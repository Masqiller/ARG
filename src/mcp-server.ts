import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { spawnSync } from "child_process";
import { promisify } from "util";
import * as fs from "fs";
import * as path from "path";
import { recommendSkills, recommendSkillsForTask, getSkillPath, listAllSkills, ScoredSkill } from "./skill-mapper.js";
import { ARGSessionManager } from "./arg-session-manager.js";
import { ARGBrain } from "./arg-brain.js";
import { VibeRouter } from "./vibe-router.js";
import { N8NDocumentationMCPServer } from "n8n-mcp";

// ═══════════════════════════════════════════════════════════════════
// AWWESOME RUFLO GRAPHIFY — Maximum Efficiency MCP Server v3.6.0
// ═══════════════════════════════════════════════════════════════════

const skillCache = new Map<string, string>();
const sessionManager = new ARGSessionManager();
let argBrain: ARGBrain | null = null;
let n8nServer: N8NDocumentationMCPServer | null = null;

/**
 * 🔒 [SECURITY HARDENING] Secure Command Execution
 * Replaces exec/execSync to prevent command injection.
 */
function runSafeCommand(command: string, args: string[]): string {
    const result = spawnSync(command, args, { encoding: "utf-8", shell: false });
    if (result.error) throw new Error(`Execution error: ${result.error.message}`);
    if (result.status !== 0) throw new Error(`Command failed [${result.status}]: ${result.stderr}`);
    return result.stdout || "";
}

const server = new Server({
    name: "AWWESOME RUFLO GRAPHIFY",
    version: "3.6.0"
}, {
    capabilities: { tools: {} }
});

server.setRequestHandler(ListToolsRequestSchema, async () => {
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
                name: "vibe_discover",
                description: "Print the Universal Agent Onboarding Manifest and read the ARG system state.",
                inputSchema: {
                    type: "object",
                    properties: {}
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

server.setRequestHandler(CallToolRequestSchema, async (request) => {
    try {
        const args = request.params.arguments || {};
        const name = request.params.name;
        const dir = (args.directory as string) || ".";
        let graphifyOut = path.resolve(dir, "graphify-out");
        
        // Robustness: Climb up to find graphify-out if not in current dir
        if (!fs.existsSync(graphifyOut)) {
            let current = path.resolve(dir);
            while (current !== path.parse(current).root) {
                const potential = path.join(current, "graphify-out");
                if (fs.existsSync(potential)) {
                    graphifyOut = potential;
                    break;
                }
                current = path.dirname(current);
            }
        }

        if (name === "graphify_update") {
            const stdout = runSafeCommand("graphify", [dir, "--update"]);
            return ok(stdout);
        }

        if (name === "read_god_nodes") {
            const reportPath = path.join(graphifyOut, "GRAPH_REPORT.md");
            if (!fs.existsSync(reportPath)) return ok("Run graphify first.");
            return ok(fs.readFileSync(reportPath, "utf-8"));
        }

        if (name === "recommend_skills_for_task") {
            const recommended = recommendSkillsForTask(graphifyOut, args.task as string);
            return ok(JSON.stringify(recommended, null, 2));
        }

        if (name === "read_skill") {
            const skillPath = getSkillPath(args.skill_name as string);
            if (!skillPath) return ok("Skill not found.");
            return ok(fs.readFileSync(skillPath, "utf-8"));
        }

        if (name === "arg_session_init") {
            return ok(sessionManager.initSession(args.session_id as string));
        }

        if (name === "arg_memory_save") {
            return ok(sessionManager.saveMemory(args.key as string, args.content as string));
        }

        if (name === "arg_memory_retrieve") {
            if (!argBrain) argBrain = ARGBrain.getInstance(graphifyOut);
            const activeMemories = sessionManager.getAllMemory();
            const result = argBrain.pruneContext(args.query as string, activeMemories);
            return ok(JSON.stringify(result, null, 2));
        }

        if (name === "arg_cost_audit") {
            const project = (args.project as string) || "awwesome-ruflo-graphify";
            const stdout = runSafeCommand("npx", ["codeburn", "status", "--project", project, "--format", "json"]);
            return ok(stdout);
        }

        if (name === "n8n_arg_fusion") {
            if (!argBrain) argBrain = ARGBrain.getInstance(graphifyOut);
            if (!n8nServer) {
                n8nServer = new N8NDocumentationMCPServer();
                await (n8nServer as any).initialized;
            }

            const prompt = args.prompt as string;
            console.error(`\n🧬 [FUSION] Bridging intelligence for: "${prompt}"`);

            // 1. Search n8n nodes & templates (using internal methods for deep integration)
            const nodes = await (n8nServer as any).searchNodes(prompt, 5);
            const templates = await (n8nServer as any).searchTemplates(prompt, 3);

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
            const router = new VibeRouter(graphifyOut, dir);
            const logs: string[] = [];
            const originalLog = console.log;
            console.log = (...args) => logs.push(args.join(' '));
            await router.executeVibe(args.prompt as string);
            console.log = originalLog;
            return ok(logs.join('\n'));
        }

        if (name === "vibe_discover") {
            const router = new VibeRouter(graphifyOut, dir);
            const logs: string[] = [];
            const originalLog = console.log;
            console.log = (...args) => logs.push(args.join(' '));
            await router.discoverSystem();
            console.log = originalLog;
            return ok(logs.join('\n'));
        }

        throw new Error(`Unknown tool: ${name}`);
    } catch (error: any) {
        return { content: [{ type: "text", text: `Error: ${error.message}` }], isError: true };
    }
});

function ok(text: string) {
    return { content: [{ type: "text" as const, text }] };
}

async function main() {
    const transport = new StdioServerTransport();
    
    // Initialize n8n-mcp backbone
    n8nServer = new N8NDocumentationMCPServer();
    await (n8nServer as any).initialized;
    console.error("🚀 [N8N] Backbone initialized");

    await server.connect(transport);
    console.error("🛸 [ARG] Swarm Orchestrator v3.6.0 running on stdio");
}

main().catch((error) => {
    console.error("Fatal error:", error);
    process.exit(1);
});
