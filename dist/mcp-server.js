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
const index_js_1 = require("@modelcontextprotocol/sdk/server/index.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const types_js_1 = require("@modelcontextprotocol/sdk/types.js");
const child_process_1 = require("child_process");
const util_1 = require("util");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const skill_mapper_js_1 = require("./skill-mapper.js");
const arg_session_manager_js_1 = require("./arg-session-manager.js");
const arg_brain_js_1 = require("./arg-brain.js");
const execAsync = (0, util_1.promisify)(child_process_1.exec);
// ═══════════════════════════════════════════════════════════════════
// AWWESOME RUFLO GRAPHIFY — Maximum Efficiency MCP Server v3.0
//
// Architecture informed by:
// - multi-agent-patterns:     Hierarchical agent specialization
// - context-optimization:     Budget-aware skill injection
// - hierarchical-agent-memory: Scoped memory with routing
// - dispatching-parallel-agents: Task decomposition for parallel work
// - agent-orchestrator:       Auto-discovery & weighted matching
// ═══════════════════════════════════════════════════════════════════
// ── In-memory skill content cache (observation masking pattern) ──
// Once a skill is read, we cache it to avoid redundant disk I/O.
// This follows the KV-cache optimization from context-optimization.
const skillCache = new Map();
// ── Session Manager ──
const sessionManager = new arg_session_manager_js_1.ARGSessionManager();
let argBrain = null;
const server = new index_js_1.Server({
    name: "AWWESOME RUFLO GRAPHIFY",
    version: "3.0.0"
}, {
    capabilities: { tools: {} }
});
// ═══════════════════════════════════════════════════════════════════
// Tool Definitions
// ═══════════════════════════════════════════════════════════════════
server.setRequestHandler(types_js_1.ListToolsRequestSchema, async () => {
    return {
        tools: [
            // ── Layer 1: Structural Intelligence (Graphify) ──
            {
                name: "graphify_update",
                description: "Run 'graphify --update' to refresh the knowledge graph from the codebase. Use sparingly — only after significant code changes.",
                inputSchema: {
                    type: "object",
                    properties: {
                        directory: { type: "string", description: "Directory to run graphify in", default: "." }
                    }
                }
            },
            {
                name: "read_god_nodes",
                description: "Read the structural core of the codebase — the God Nodes. These are the most connected, most critical files. ALWAYS call this first.",
                inputSchema: {
                    type: "object",
                    properties: {
                        directory: { type: "string", description: "Directory containing graphify-out", default: "." }
                    }
                }
            },
            {
                name: "get_node_neighbors",
                description: "Find all files directly connected to a specific node in the dependency graph. Use for impact analysis before modifying a file.",
                inputSchema: {
                    type: "object",
                    properties: {
                        node_id: { type: "string", description: "The ID or name of the node" },
                        directory: { type: "string", description: "Directory containing graphify-out", default: "." }
                    },
                    required: ["node_id"]
                }
            },
            {
                name: "get_graph_stats",
                description: "Get high-level statistics about the codebase graph: node count, edge count, density, and community count. Useful for determining complexity tier.",
                inputSchema: {
                    type: "object",
                    properties: {
                        directory: { type: "string", description: "Directory containing graphify-out", default: "." }
                    }
                }
            },
            {
                name: "read_wiki_article",
                description: "Read a community wiki article from graphify for deep understanding of a code cluster.",
                inputSchema: {
                    type: "object",
                    properties: {
                        article_name: { type: "string", description: "Name of the wiki article" },
                        directory: { type: "string", description: "Directory containing graphify-out", default: "." }
                    },
                    required: ["article_name"]
                }
            },
            // ── Layer 2: Skill Intelligence (Awesome Skills) ──
            {
                name: "recommend_skills",
                description: "Analyze the Graphify structure and return a ranked, budget-constrained list of recommended expert playbooks from the 1400+ Awesome Skills library.",
                inputSchema: {
                    type: "object",
                    properties: {
                        directory: { type: "string", description: "Directory containing graphify-out", default: "." }
                    }
                }
            },
            {
                name: "recommend_skills_for_task",
                description: "Like recommend_skills, but also boosts skills relevant to a specific task description. Use when you know WHAT you're about to do.",
                inputSchema: {
                    type: "object",
                    properties: {
                        task: { type: "string", description: "Natural language description of the task" },
                        directory: { type: "string", description: "Directory containing graphify-out", default: "." }
                    },
                    required: ["task"]
                }
            },
            {
                name: "read_skill",
                description: "Load the full SKILL.md expert playbook for a specific skill into your context. Results are cached for efficiency.",
                inputSchema: {
                    type: "object",
                    properties: {
                        skill_name: { type: "string", description: "The skill name (e.g. 'typescript-pro')" }
                    },
                    required: ["skill_name"]
                }
            },
            {
                name: "search_skills",
                description: "Search the entire 1400+ skill library by keyword. Returns matching skill names. Use when you need a specific capability not in the recommendations.",
                inputSchema: {
                    type: "object",
                    properties: {
                        query: { type: "string", description: "Search keyword (e.g. 'graphql', 'security', 'testing')" }
                    },
                    required: ["query"]
                }
            },
            // ── Layer 3: Agent Coordination (Ruflo) ──
            {
                name: "generate_agent_briefing",
                description: "Generate a complete agent briefing: structural context (god nodes) + recommended skills + task-specific playbooks, all in one call. This is the POWER tool — use it to fully equip an agent in a single round-trip.",
                inputSchema: {
                    type: "object",
                    properties: {
                        task: { type: "string", description: "The task this agent will perform" },
                        directory: { type: "string", description: "Directory containing graphify-out", default: "." },
                        max_skills: { type: "number", description: "Max skills to include in briefing (default: 3)", default: 3 }
                    },
                    required: ["task"]
                }
            },
            {
                name: "decompose_for_parallel",
                description: "Analyze the graph structure and a complex task to suggest how to decompose it into parallel, independent sub-tasks for multiple agents. Follows the dispatching-parallel-agents pattern.",
                inputSchema: {
                    type: "object",
                    properties: {
                        task: { type: "string", description: "The complex task to decompose" },
                        directory: { type: "string", description: "Directory containing graphify-out", default: "." }
                    },
                    required: ["task"]
                }
            },
            // ── Layer 4: Universal IDE Session Memory ──
            {
                name: "arg_session_init",
                description: "Initialize an ARG memory session. Use this when starting work in an IDE to load past context or create a fresh memory state. Always call this first.",
                inputSchema: {
                    type: "object",
                    properties: {
                        session_id: { type: "string", description: "A unique identifier for this project session (e.g. 'migration-v2')" }
                    },
                    required: ["session_id"]
                }
            },
            {
                name: "arg_memory_save",
                description: "Save a crucial piece of context, a technical decision, or a constraint to the ARG Vector Brain. Do NOT hoard memory in your context window. Save it here.",
                inputSchema: {
                    type: "object",
                    properties: {
                        key: { type: "string", description: "Short descriptive key (e.g. 'AuthArchitecture')" },
                        content: { type: "string", description: "The full text of the fact, decision, or code pointer to save." }
                    },
                    required: ["key", "content"]
                }
            },
            {
                name: "arg_memory_retrieve",
                description: "Retrieve past memories, facts, and decisions by querying the ARG Brain. Uses hybrid HNSW vector search to pull exactly what you need.",
                inputSchema: {
                    type: "object",
                    properties: {
                        query: { type: "string", description: "What do you need to remember? (e.g. 'How is auth implemented?')" },
                        directory: { type: "string", description: "Directory containing graphify-out", default: "." }
                    },
                    required: ["query"]
                }
            }
        ]
    };
});
// ═══════════════════════════════════════════════════════════════════
// Tool Handlers
// ═══════════════════════════════════════════════════════════════════
server.setRequestHandler(types_js_1.CallToolRequestSchema, async (request) => {
    try {
        const args = request.params.arguments || {};
        const dir = args.directory || ".";
        const graphifyOut = path.join(dir, "graphify-out");
        const name = request.params.name;
        // ── Layer 1: Structural Intelligence ──
        if (name === "graphify_update") {
            const { stdout, stderr } = await execAsync(`graphify ${dir} --update`);
            skillCache.clear(); // Invalidate cache on graph update
            return ok(stdout || stderr);
        }
        if (name === "read_god_nodes") {
            const reportPath = path.join(graphifyOut, "GRAPH_REPORT.md");
            if (!fs.existsSync(reportPath))
                return ok("GRAPH_REPORT.md not found. Run graphify first.");
            const content = fs.readFileSync(reportPath, "utf-8");
            const godNodesMatch = content.match(/## God Nodes[\s\S]*?(?=##|$)/i);
            return ok(godNodesMatch ? godNodesMatch[0] : content);
        }
        if (name === "get_node_neighbors") {
            const nodeId = args.node_id;
            const graphPath = path.join(graphifyOut, "graph.json");
            if (!fs.existsSync(graphPath))
                return ok("graph.json not found.");
            const graph = JSON.parse(fs.readFileSync(graphPath, "utf-8"));
            const links = graph.links || [];
            const neighbors = links.filter((l) => l.source === nodeId || l.target === nodeId);
            return ok(JSON.stringify(neighbors, null, 2));
        }
        if (name === "get_graph_stats") {
            const graphPath = path.join(graphifyOut, "graph.json");
            if (!fs.existsSync(graphPath))
                return ok("graph.json not found.");
            const graph = JSON.parse(fs.readFileSync(graphPath, "utf-8"));
            const nodes = graph.nodes || [];
            const links = graph.links || [];
            const stats = {
                nodeCount: nodes.length,
                edgeCount: links.length,
                density: nodes.length > 1 ? (2 * links.length) / (nodes.length * (nodes.length - 1)) : 0,
                complexityTier: nodes.length < 20 ? 'small' : nodes.length < 100 ? 'medium' : 'large',
                topNodes: nodes.slice(0, 10).map((n) => n.id || n.name)
            };
            return ok(JSON.stringify(stats, null, 2));
        }
        if (name === "read_wiki_article") {
            const article = args.article_name;
            const wikiPath = path.join(graphifyOut, "wiki", article.endsWith('.md') ? article : `${article}.md`);
            if (!fs.existsSync(wikiPath))
                return ok(`Wiki article ${article} not found.`);
            return ok(fs.readFileSync(wikiPath, "utf-8"));
        }
        // ── Layer 2: Skill Intelligence ──
        if (name === "recommend_skills") {
            const recommended = (0, skill_mapper_js_1.recommendSkills)(graphifyOut);
            return ok(formatScoredSkills(recommended));
        }
        if (name === "recommend_skills_for_task") {
            const task = args.task;
            const recommended = (0, skill_mapper_js_1.recommendSkillsForTask)(graphifyOut, task);
            return ok(formatScoredSkills(recommended));
        }
        if (name === "read_skill") {
            const skillName = args.skill_name;
            // Check cache first (context optimization: KV-cache pattern)
            if (skillCache.has(skillName)) {
                return ok(skillCache.get(skillName));
            }
            const skillPath = (0, skill_mapper_js_1.getSkillPath)(skillName);
            if (!skillPath)
                return ok(`Skill '${skillName}' not found in the library.`);
            const content = fs.readFileSync(skillPath, "utf-8");
            skillCache.set(skillName, content); // Cache for future calls
            return ok(content);
        }
        if (name === "search_skills") {
            const query = args.query.toLowerCase();
            const allSkills = (0, skill_mapper_js_1.listAllSkills)();
            const matches = allSkills.filter(s => s.includes(query));
            return ok(matches.length > 0
                ? `Found ${matches.length} matching skills:\n${matches.map(s => `  • ${s}`).join('\n')}`
                : `No skills found matching "${query}".`);
        }
        // ── Layer 3: Agent Coordination ──
        if (name === "generate_agent_briefing") {
            const task = args.task;
            const maxSkills = args.max_skills || 3;
            // Step 1: Read god nodes for structural context
            let godNodes = "No graph available.";
            const reportPath = path.join(graphifyOut, "GRAPH_REPORT.md");
            if (fs.existsSync(reportPath)) {
                const content = fs.readFileSync(reportPath, "utf-8");
                const match = content.match(/## God Nodes[\s\S]*?(?=##|$)/i);
                godNodes = match ? match[0] : "No God Nodes section found.";
            }
            // Step 2: Get task-aware skill recommendations
            const recommended = (0, skill_mapper_js_1.recommendSkillsForTask)(graphifyOut, task);
            const topSkills = recommended.slice(0, maxSkills);
            // Step 3: Pre-load skill content (compaction: only first 100 lines per skill)
            const skillBriefs = [];
            for (const rec of topSkills) {
                const skillPath = (0, skill_mapper_js_1.getSkillPath)(rec.skill);
                if (skillPath) {
                    const content = fs.readFileSync(skillPath, "utf-8");
                    const lines = content.split('\n');
                    const brief = lines.slice(0, 100).join('\n');
                    skillBriefs.push(`### ${rec.skill} (score: ${rec.score}, reason: ${rec.reason})\n${brief}\n---`);
                    skillCache.set(rec.skill, content); // Full content cached for follow-up
                }
            }
            // Step 4: Assemble the briefing
            const briefing = [
                `# Agent Briefing: ${task}`,
                '',
                '## 1. Structural Context (God Nodes)',
                godNodes,
                '',
                '## 2. Equipped Expert Playbooks',
                `${topSkills.length} skills loaded (budget: ${maxSkills} max):`,
                ...skillBriefs,
                '',
                '## 3. Execution Constraints',
                '- OBEY the patterns in the loaded playbooks.',
                '- Do NOT modify God Nodes without flagging for review.',
                '- After completing your task, report modified files for graph update.',
            ].join('\n');
            return ok(briefing);
        }
        if (name === "decompose_for_parallel") {
            const task = args.task;
            const graphPath = path.join(graphifyOut, "graph.json");
            let communities = [];
            if (fs.existsSync(graphPath)) {
                const graph = JSON.parse(fs.readFileSync(graphPath, "utf-8"));
                const nodes = graph.nodes || [];
                // Group nodes by community (if Graphify provides community labels)
                const communityMap = new Map();
                for (const node of nodes) {
                    const community = node.community || node.group || 'default';
                    const id = node.id || node.name || '';
                    if (!communityMap.has(community))
                        communityMap.set(community, []);
                    communityMap.get(community).push(id);
                }
                communities = Array.from(communityMap.entries()).map(([key, files]) => `Community ${key}: ${files.slice(0, 5).join(', ')}${files.length > 5 ? ` (+${files.length - 5} more)` : ''}`);
            }
            const decomposition = [
                `# Parallel Decomposition: ${task}`,
                '',
                '## Graph Communities (Independent Domains)',
                communities.length > 0
                    ? communities.map((c, i) => `${i + 1}. ${c}`).join('\n')
                    : 'No graph data available. Decompose manually.',
                '',
                '## Suggested Agent Dispatch',
                'Each community represents a cluster of tightly-coupled files.',
                'Assign one agent per community for maximum parallelism.',
                '',
                '## Constraints',
                '- Agents MUST NOT edit files in other communities.',
                '- Use file-system memory for cross-community state.',
                '- Run full test suite after integration.',
            ].join('\n');
            return ok(decomposition);
        }
        // ── Layer 4: Universal IDE Session Memory ──
        if (name === "arg_session_init") {
            const sessionId = args.session_id;
            const result = sessionManager.initSession(sessionId);
            return ok(result);
        }
        if (name === "arg_memory_save") {
            const key = args.key;
            const content = args.content;
            try {
                const result = sessionManager.saveMemory(key, content);
                return ok(result);
            }
            catch (e) {
                return ok(`Error saving memory: ${e.message}`);
            }
        }
        if (name === "arg_memory_retrieve") {
            const query = args.query;
            // Instantiate ARGBrain if needed
            if (!argBrain) {
                argBrain = new arg_brain_js_1.ARGBrain(graphifyOut);
            }
            const activeMemories = sessionManager.getAllMemory();
            const result = argBrain.pruneContext(query, activeMemories);
            let response = `# Memory Retrieval for: "${query}"\n\n`;
            if (result.relevantMemories && result.relevantMemories.length > 0) {
                response += `## IDE Session Memories Found\n`;
                result.relevantMemories.forEach((mem) => {
                    response += `- **${mem.key}**: ${mem.content}\n`;
                });
                response += `\n`;
            }
            if (result.relevantNodes && result.relevantNodes.length > 0) {
                response += `## Relevant Codebase Nodes (AST)\n`;
                result.relevantNodes.forEach((node) => {
                    response += `- ${node.id} (${node.community || 'unassigned'})\n`;
                });
            }
            if (response === `# Memory Retrieval for: "${query}"\n\n`) {
                response += "No relevant memories or code nodes found in the ARG Brain.";
            }
            return ok(response);
        }
        throw new Error(`Unknown tool: ${name}`);
    }
    catch (error) {
        return { content: [{ type: "text", text: `Error: ${error.message}` }], isError: true };
    }
});
// ═══════════════════════════════════════════════════════════════════
// Helpers
// ═══════════════════════════════════════════════════════════════════
function ok(text) {
    return { content: [{ type: "text", text }] };
}
function formatScoredSkills(skills) {
    if (skills.length === 0)
        return "No skills recommended. Run graphify first to generate structural data.";
    const lines = [
        `Recommended ${skills.length} skills (ranked by relevance):`,
        '',
        ...skills.map((s, i) => `${i + 1}. **${s.skill}** — score: ${s.score} [${s.category}] (${s.reason})`)
    ];
    return lines.join('\n');
}
// ═══════════════════════════════════════════════════════════════════
// Server Startup
// ═══════════════════════════════════════════════════════════════════
async function main() {
    const transport = new stdio_js_1.StdioServerTransport();
    await server.connect(transport);
    console.error("AWWESOME RUFLO GRAPHIFY v3.0 MCP Server running on stdio");
}
main().catch((error) => {
    console.error("Fatal error:", error);
    process.exit(1);
});
