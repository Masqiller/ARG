import * as fs from 'fs';
import * as path from 'path';

export interface PrunedContext {
    relevantNodes: any[];
    relevantEdges: any[];
    tokenSavingsRatio: number;
    communitiesTouched: Set<string>;
}

export class ARGBrain {
    private graph: any = null;
    private memoryStore: Map<string, any> = new Map();

    private vocabulary: Set<string> = new Set();
    private documentFrequencies: Map<string, number> = new Map();
    private nodeVectors: Map<string, Map<string, number>> = new Map();
    private communityCentroids: Map<string, Map<string, number>> = new Map();
    private communityNodes: Map<string, any[]> = new Map();

    private statePath: string;

    constructor(private graphifyOutputDir: string) {
        this.statePath = path.join(this.graphifyOutputDir, 'state.json');
        this.loadGraph();
        this.loadState();
        this.buildHybridIndex();
    }

    private loadState() {
        if (fs.existsSync(this.statePath)) {
            try {
                const data = JSON.parse(fs.readFileSync(this.statePath, 'utf-8'));
                this.memoryStore = new Map(Object.entries(data));
            } catch (e) {
                console.error("⚠️ Failed to load swarm state.");
            }
        }
    }

    private saveState() {
        try {
            const data = Object.fromEntries(this.memoryStore);
            fs.writeFileSync(this.statePath, JSON.stringify(data, null, 2));
        } catch (e) {
            console.error("⚠️ Failed to save swarm state.");
        }
    }

    private loadGraph() {
        const graphPath = path.join(this.graphifyOutputDir, 'graph.json');
        if (fs.existsSync(graphPath)) {
            this.graph = JSON.parse(fs.readFileSync(graphPath, 'utf-8'));
            console.log(`🧠 [ARG Brain] Loaded structural graph with ${this.graph.nodes.length} nodes.`);
        } else {
            console.warn(`⚠️ [ARG Brain] No Graphify graph found at ${graphPath}.`);
        }
    }

    private tokenize(text: string): string[] {
        return (text || '').toLowerCase().replace(/[_\.\/]/g, ' ').replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(w => w.length > 2);
    }

    private buildHybridIndex() {
        if (!this.graph) return;
        
        console.log(`🧠 [ARG Brain] Building Hybrid Leiden-HNSW Vector Index...`);
        const N = this.graph.nodes.length;
        
        // 1. Calculate Document Frequencies and Group by Community
        for (const node of this.graph.nodes) {
            const tokens = new Set(this.tokenize(`${node.id} ${node.snippet || ''}`));
            for (const token of tokens) {
                this.vocabulary.add(token);
                this.documentFrequencies.set(token, (this.documentFrequencies.get(token) || 0) + 1);
            }
            
            const comm = node.community || 'unassigned';
            if (!this.communityNodes.has(comm)) this.communityNodes.set(comm, []);
            this.communityNodes.get(comm)!.push(node);
        }

        // 2. Calculate TF-IDF Vectors for all nodes
        for (const node of this.graph.nodes) {
            const tokens = this.tokenize(`${node.id} ${node.snippet || ''}`);
            const vector = new Map<string, number>();
            const tf = new Map<string, number>();
            for (const token of tokens) tf.set(token, (tf.get(token) || 0) + 1);
            
            for (const [token, count] of tf.entries()) {
                const idf = Math.log(N / (this.documentFrequencies.get(token) || 1));
                vector.set(token, count * idf);
            }
            this.nodeVectors.set(node.id, vector);
        }

        // 3. Calculate Community Centroids (Average of node vectors in community)
        for (const [comm, nodes] of this.communityNodes.entries()) {
            const centroid = new Map<string, number>();
            for (const node of nodes) {
                const vec = this.nodeVectors.get(node.id)!;
                for (const [term, val] of vec.entries()) {
                    centroid.set(term, (centroid.get(term) || 0) + (val / nodes.length));
                }
            }
            this.communityCentroids.set(comm, centroid);
        }

        console.log(`✅ [ARG Brain] Hybrid Index built: ${this.communityCentroids.size} Communities (Centroids), ${this.vocabulary.size} Dimensions.`);
    }

    private calculateCosineSimilarity(vecA: Map<string, number>, vecB: Map<string, number>): number {
        let dotProduct = 0;
        let normA = 0;
        let normB = 0;
        for (const [term, val] of vecA.entries()) {
            if (vecB.has(term)) dotProduct += val * vecB.get(term)!;
            normA += val * val;
        }
        for (const val of vecB.values()) normB += val * val;
        if (normA === 0 || normB === 0) return 0;
        return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
    }

    /**
     * O(C) + O(k) Hybrid Search.
     * Searches Community Centroids first, drops irrelevant subgraphs, then deep searches winning communities.
     */
    public pruneContext(prompt: string, ideMemories: {key: string, content: string}[] = []): PrunedContext & { relevantMemories: any[] } {
        if (!this.graph) return { relevantNodes: [], relevantEdges: [], tokenSavingsRatio: 0, communitiesTouched: new Set(), relevantMemories: [] };

        // Build prompt vector
        const promptTokens = this.tokenize(prompt);
        const promptTf = new Map<string, number>();
        for (const token of promptTokens) promptTf.set(token, (promptTf.get(token) || 0) + 1);
        
        const promptVector = new Map<string, number>();
        const N = this.graph.nodes.length;
        for (const [token, count] of promptTf.entries()) {
            if (this.vocabulary.has(token)) {
                const idf = Math.log(N / (this.documentFrequencies.get(token) || 1));
                promptVector.set(token, count * idf);
            }
        }

        // Phase 1: High-Speed Centroid Search
        const winningCommunities = new Set<string>();
        for (const [comm, centroid] of this.communityCentroids.entries()) {
            const score = this.calculateCosineSimilarity(promptVector, centroid);
            if (score > 0.01) { // Loose threshold for community inclusion
                winningCommunities.add(comm);
            }
        }

        const relevantNodes = new Set<any>();
        const communitiesTouched = new Set<string>();
        
        // Phase 2: Deep search only inside winning communities
        for (const comm of winningCommunities) {
            const nodesInComm = this.communityNodes.get(comm) || [];
            for (const node of nodesInComm) {
                const nodeVec = this.nodeVectors.get(node.id)!;
                const score = this.calculateCosineSimilarity(promptVector, nodeVec);
                if (score > 0.02) { // Strict threshold for exact nodes
                    relevantNodes.add(node);
                    communitiesTouched.add(comm);
                }
            }
        }

        const relevantNodeIds = new Set(Array.from(relevantNodes).map(n => n.id));
        const relevantEdges = this.graph.links.filter((e: any) => 
            relevantNodeIds.has(e.source) && relevantNodeIds.has(e.target)
        );

        // Phase 3: Search IDE Session Memories
        const relevantMemories: any[] = [];
        for (const mem of ideMemories) {
            const memTokens = this.tokenize(`${mem.key} ${mem.content}`);
            const memVec = new Map<string, number>();
            for (const token of memTokens) {
                if (this.vocabulary.has(token)) {
                    const idf = Math.log(N / (this.documentFrequencies.get(token) || 1));
                    memVec.set(token, (memVec.get(token) || 0) + idf);
                }
            }
            const score = this.calculateCosineSimilarity(promptVector, memVec);
            if (score > 0.01 || memTokens.some(t => promptTokens.includes(t))) {
                relevantMemories.push(mem);
            }
        }

        const totalNodes = this.graph.nodes.length;
        const savings = totalNodes > 0 ? ((totalNodes - relevantNodes.size) / totalNodes) * 100 : 0;

        return {
            relevantNodes: Array.from(relevantNodes),
            relevantEdges,
            tokenSavingsRatio: savings,
            communitiesTouched,
            relevantMemories
        };
    }

    /**
     * Shared memory for Swarm state sharing (Ruflo hooks can read/write here)
     */
    public updateState(agentId: string, state: any) {
        this.memoryStore.set(agentId, state);
        this.saveState();
    }

    public getState(agentId: string) {
        return this.memoryStore.get(agentId);
    }
}
