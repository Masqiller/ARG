"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARGBrain = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class ARGBrain {
    graphifyOutputDir;
    graph = null;
    memoryStore = new Map();
    vocabulary = new Set();
    documentFrequencies = new Map();
    nodeVectors = new Map();
    communityCentroids = new Map();
    communityNodes = new Map();
    constructor(graphifyOutputDir) {
        this.graphifyOutputDir = graphifyOutputDir;
        this.loadGraph();
        this.buildHybridIndex();
    }
    loadGraph() {
        const graphPath = path.join(this.graphifyOutputDir, 'graph.json');
        if (fs.existsSync(graphPath)) {
            this.graph = JSON.parse(fs.readFileSync(graphPath, 'utf-8'));
            console.log(`🧠 [ARG Brain] Loaded structural graph with ${this.graph.nodes.length} nodes.`);
        }
        else {
            console.warn(`⚠️ [ARG Brain] No Graphify graph found at ${graphPath}.`);
        }
    }
    tokenize(text) {
        return (text || '').toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(w => w.length > 2);
    }
    buildHybridIndex() {
        if (!this.graph)
            return;
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
            if (!this.communityNodes.has(comm))
                this.communityNodes.set(comm, []);
            this.communityNodes.get(comm).push(node);
        }
        // 2. Calculate TF-IDF Vectors for all nodes
        for (const node of this.graph.nodes) {
            const tokens = this.tokenize(`${node.id} ${node.snippet || ''}`);
            const vector = new Map();
            const tf = new Map();
            for (const token of tokens)
                tf.set(token, (tf.get(token) || 0) + 1);
            for (const [token, count] of tf.entries()) {
                const idf = Math.log(N / (this.documentFrequencies.get(token) || 1));
                vector.set(token, count * idf);
            }
            this.nodeVectors.set(node.id, vector);
        }
        // 3. Calculate Community Centroids (Average of node vectors in community)
        for (const [comm, nodes] of this.communityNodes.entries()) {
            const centroid = new Map();
            for (const node of nodes) {
                const vec = this.nodeVectors.get(node.id);
                for (const [term, val] of vec.entries()) {
                    centroid.set(term, (centroid.get(term) || 0) + (val / nodes.length));
                }
            }
            this.communityCentroids.set(comm, centroid);
        }
        console.log(`✅ [ARG Brain] Hybrid Index built: ${this.communityCentroids.size} Communities (Centroids), ${this.vocabulary.size} Dimensions.`);
    }
    calculateCosineSimilarity(vecA, vecB) {
        let dotProduct = 0;
        let normA = 0;
        let normB = 0;
        for (const [term, val] of vecA.entries()) {
            if (vecB.has(term))
                dotProduct += val * vecB.get(term);
            normA += val * val;
        }
        for (const val of vecB.values())
            normB += val * val;
        if (normA === 0 || normB === 0)
            return 0;
        return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
    }
    /**
     * O(C) + O(k) Hybrid Search.
     * Searches Community Centroids first, drops irrelevant subgraphs, then deep searches winning communities.
     */
    pruneContext(prompt, ideMemories = []) {
        if (!this.graph)
            return { relevantNodes: [], relevantEdges: [], tokenSavingsRatio: 0, communitiesTouched: new Set(), relevantMemories: [] };
        // Build prompt vector
        const promptTokens = this.tokenize(prompt);
        const promptTf = new Map();
        for (const token of promptTokens)
            promptTf.set(token, (promptTf.get(token) || 0) + 1);
        const promptVector = new Map();
        const N = this.graph.nodes.length;
        for (const [token, count] of promptTf.entries()) {
            if (this.vocabulary.has(token)) {
                const idf = Math.log(N / (this.documentFrequencies.get(token) || 1));
                promptVector.set(token, count * idf);
            }
        }
        // Phase 1: High-Speed Centroid Search
        const winningCommunities = new Set();
        for (const [comm, centroid] of this.communityCentroids.entries()) {
            const score = this.calculateCosineSimilarity(promptVector, centroid);
            if (score > 0.02) { // Loose threshold for community inclusion
                winningCommunities.add(comm);
            }
        }
        const relevantNodes = new Set();
        const communitiesTouched = new Set();
        // Phase 2: Deep search only inside winning communities
        for (const comm of winningCommunities) {
            const nodesInComm = this.communityNodes.get(comm) || [];
            for (const node of nodesInComm) {
                const nodeVec = this.nodeVectors.get(node.id);
                const score = this.calculateCosineSimilarity(promptVector, nodeVec);
                if (score > 0.05) { // Strict threshold for exact nodes
                    relevantNodes.add(node);
                    communitiesTouched.add(comm);
                }
            }
        }
        const relevantEdges = this.graph.links.filter((e) => relevantNodes.has(this.graph.nodes.find((n) => n.id === e.source)) &&
            relevantNodes.has(this.graph.nodes.find((n) => n.id === e.target)));
        // Phase 3: Search IDE Session Memories
        const relevantMemories = [];
        for (const mem of ideMemories) {
            const memTokens = this.tokenize(`${mem.key} ${mem.content}`);
            const memVec = new Map();
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
    updateState(agentId, state) {
        this.memoryStore.set(agentId, state);
    }
    getState(agentId) {
        return this.memoryStore.get(agentId);
    }
}
exports.ARGBrain = ARGBrain;
