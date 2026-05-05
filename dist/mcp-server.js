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
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const skill_mapper_js_1 = require("./skill-mapper.js");
const arg_session_manager_js_1 = require("./arg-session-manager.js");
const arg_brain_js_1 = require("./arg-brain.js");
const vibe_router_js_1 = require("./vibe-router.js");
const n8n_mcp_1 = require("n8n-mcp");
// ═══════════════════════════════════════════════════════════════════
// AWWESOME RUFLO GRAPHIFY — Maximum Efficiency MCP Server v3.6.0
// ═══════════════════════════════════════════════════════════════════
const skillCache = new Map();
const sessionManager = new arg_session_manager_js_1.ARGSessionManager();
let argBrain = null;
let n8nServer = null;
/**
 * 🔒 [SECURITY HARDENING] Secure Command Execution
 * Replaces exec/execSync to prevent command injection.
 */
function runSafeCommand(command, args) {
    const result = (0, child_process_1.spawnSync)(command, args, { encoding: "utf-8", shell: false });
    if (result.error)
        throw new Error(`Execution error: ${result.error.message}`);
    if (result.status !== 0)
        throw new Error(`Command failed [${result.status}]: ${result.stderr}`);
    return result.stdout || "";
}
const server = new index_js_1.Server({
    name: "AWWESOME RUFLO GRAPHIFY",
    version: "3.6.0"
}, {
    capabilities: { tools: {} }
});
server.setRequestHandler(types_js_1.ListToolsRequestSchema, async () => {
    return {
        tools: [
            {
                name: "graphify_update",
                description: "Run 'graphify --update' to refresh the knowledge graph.",
                inputSchema: {
                    type: "object",
                    properties: {
                        directory: { type: "string", default: "." }
                    }
                }
            },
            {
                name: "read_god_nodes",
                description: "Read the structural core of the codebase.",
                inputSchema: {
                    type: "object",
                    properties: {
                        directory: { type: "string", default: "." }
                    }
                }
            },
            {
                name: "get_node_neighbors",
                description: "Find neighbors of a node.",
                inputSchema: {
                    type: "object",
                    properties: {
                        node_id: { type: "string" },
                        directory: { type: "string", default: "." }
                    },
                    required: ["node_id"]
                }
            },
            {
                name: "recommend_skills_for_task",
                description: "Recommend expert playbooks for a task.",
                inputSchema: {
                    type: "object",
                    properties: {
                        task: { type: "string" },
                        directory: { type: "string", default: "." }
                    },
                    required: ["task"]
                }
            },
            {
                name: "read_skill",
                description: "Read a specific expert playbook.",
                inputSchema: {
                    type: "object",
                    properties: {
                        skill_name: { type: "string" }
                    },
                    required: ["skill_name"]
                }
            },
            {
                name: "generate_agent_briefing",
                description: "Generate a complete briefing for an agent.",
                inputSchema: {
                    type: "object",
                    properties: {
                        task: { type: "string" },
                        directory: { type: "string", default: "." },
                        max_skills: { type: "number", default: 3 }
                    },
                    required: ["task"]
                }
            },
            {
                name: "arg_session_init",
                description: "Initialize an ARG memory session.",
                inputSchema: {
                    type: "object",
                    properties: {
                        session_id: { type: "string" }
                    },
                    required: ["session_id"]
                }
            },
            {
                name: "arg_memory_save",
                description: "Save context to session memory.",
                inputSchema: {
                    type: "object",
                    properties: {
                        key: { type: "string" },
                        content: { type: "string" }
                    },
                    required: ["key", "content"]
                }
            },
            {
                name: "arg_memory_retrieve",
                description: "Retrieve context using semantic pruning.",
                inputSchema: {
                    type: "object",
                    properties: {
                        query: { type: "string" }
                    },
                    required: ["query"]
                }
            },
            {
                name: "arg_cost_audit",
                description: "Analyze token usage via CodeBurn.",
                inputSchema: {
                    type: "object",
                    properties: {
                        project: { type: "string", default: "awwesome-ruflo-graphify" }
                    }
                }
            },
            {
                name: "vibe_execute",
                description: "Launch the full ARG Swarm Orchestrator.",
                inputSchema: {
                    type: "object",
                    properties: {
                        prompt: { type: "string" }
                    },
                    required: ["prompt"]
                }
            },
            {
                name: "n8n_arg_fusion",
                description: "Bridge ARG structural intelligence with n8n automation backbone.",
                inputSchema: {
                    type: "object",
                    properties: {
                        prompt: { type: "string" },
                        directory: { type: "string", description: "Project directory" }
                    },
                    required: ["prompt"]
                }
            }
        ]
    };
});
server.setRequestHandler(types_js_1.CallToolRequestSchema, async (request) => {
    try {
        const args = request.params.arguments || {};
        const name = request.params.name;
        const dir = args.directory || ".";
        const graphifyOut = path.join(dir, "graphify-out");
        if (name === "graphify_update") {
            const stdout = runSafeCommand("graphify", [dir, "--update"]);
            return ok(stdout);
        }
        if (name === "read_god_nodes") {
            const reportPath = path.join(graphifyOut, "GRAPH_REPORT.md");
            if (!fs.existsSync(reportPath))
                return ok("Run graphify first.");
            return ok(fs.readFileSync(reportPath, "utf-8"));
        }
        if (name === "recommend_skills_for_task") {
            const recommended = (0, skill_mapper_js_1.recommendSkillsForTask)(graphifyOut, args.task);
            return ok(JSON.stringify(recommended, null, 2));
        }
        if (name === "read_skill") {
            const skillPath = (0, skill_mapper_js_1.getSkillPath)(args.skill_name);
            if (!skillPath)
                return ok("Skill not found.");
            return ok(fs.readFileSync(skillPath, "utf-8"));
        }
        if (name === "arg_session_init") {
            return ok(sessionManager.initSession(args.session_id));
        }
        if (name === "arg_memory_save") {
            return ok(sessionManager.saveMemory(args.key, args.content));
        }
        if (name === "arg_memory_retrieve") {
            if (!argBrain)
                argBrain = new arg_brain_js_1.ARGBrain(graphifyOut);
            const activeMemories = sessionManager.getAllMemory();
            const result = argBrain.pruneContext(args.query, activeMemories);
            return ok(JSON.stringify(result, null, 2));
        }
        if (name === "arg_cost_audit") {
            const project = args.project || "awwesome-ruflo-graphify";
            const stdout = runSafeCommand("npx", ["codeburn", "status", "--project", project, "--format", "json"]);
            return ok(stdout);
        }
        if (name === "n8n_arg_fusion") {
            if (!argBrain)
                argBrain = new arg_brain_js_1.ARGBrain(graphifyOut);
            if (!n8nServer) {
                n8nServer = new n8n_mcp_1.N8NDocumentationMCPServer();
                await n8nServer.initialized;
            }
            const prompt = args.prompt;
            console.error(`\n🧬 [FUSION] Bridging intelligence for: "${prompt}"`);
            // 1. Search n8n nodes & templates (using internal methods for deep integration)
            const nodes = await n8nServer.searchNodes(prompt, 5);
            const templates = await n8nServer.searchTemplates({ query: prompt, limit: 3 });
            // 2. Get ARG context
            const argContext = argBrain.pruneContext(prompt, sessionManager.getAllMemory());
            const fusionPlan = {
                status: "success",
                task: prompt,
                automation: {
                    recommendedNodes: nodes,
                    relevantTemplates: templates
                },
                structuralIntelligence: {
                    godNodes: argContext.relevantNodes.slice(0, 5),
                    communities: Array.from(argContext.communitiesTouched)
                },
                implementationPath: "Deploy n8n workflow with above nodes, injecting ARG structural context as state."
            };
            return ok(JSON.stringify(fusionPlan, null, 2));
        }
        if (name === "vibe_execute") {
            const router = new vibe_router_js_1.VibeRouter(graphifyOut, dir);
            const logs = [];
            const originalLog = console.log;
            console.log = (...args) => logs.push(args.join(' '));
            router.executeVibe(args.prompt);
            console.log = originalLog;
            return ok(logs.join('\n'));
        }
        throw new Error(`Unknown tool: ${name}`);
    }
    catch (error) {
        return { content: [{ type: "text", text: `Error: ${error.message}` }], isError: true };
    }
});
function ok(text) {
    return { content: [{ type: "text", text }] };
}
async function main() {
    const transport = new stdio_js_1.StdioServerTransport();
    // Initialize n8n-mcp backbone
    n8nServer = new n8n_mcp_1.N8NDocumentationMCPServer();
    await n8nServer.initialized;
    console.error("🚀 [N8N] Backbone initialized");
    await server.connect(transport);
    console.error("🛸 [ARG] Swarm Orchestrator v3.6.0 running on stdio");
}
main().catch((error) => {
    console.error("Fatal error:", error);
    process.exit(1);
});
