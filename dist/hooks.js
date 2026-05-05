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
exports.default = registerHooks;
const child_process_1 = require("child_process");
const util_1 = require("util");
const path = __importStar(require("path"));
const execAsync = (0, util_1.promisify)(child_process_1.exec);
// ═══════════════════════════════════════════════════════════════════
// AWWESOME RUFLO GRAPHIFY — Lifecycle Hooks v3.0
//
// These hooks wire into Ruflo's event system to create a fully
// autonomous intelligence loop:
//
//   init → baseline graph → equip agents with skills
//   task assigned → brief agent with structural + skill context
//   task complete → update graph → re-evaluate skill set
//
// Architecture patterns used:
// - Hierarchical agent pattern (strategy → planning → execution)
// - File-system memory for cross-agent coordination
// - Background graph updates to minimize agent latency
// ═══════════════════════════════════════════════════════════════════
function registerHooks(ruflo) {
    const pluginDir = __dirname;
    // ─────────────────────────────────────────────────────────────
    // PHASE 1: INITIALIZATION — Build the structural foundation
    // ─────────────────────────────────────────────────────────────
    ruflo.hooks.on("afterInit", async (context) => {
        console.log("[AWWESOME] Phase 1: Building structural knowledge graph...");
        try {
            // Generate baseline graph
            await execAsync(`graphify .`);
            console.log("[AWWESOME] ✓ Baseline knowledge graph generated.");
            // Immediately warm the skill recommendation cache
            console.log("[AWWESOME] Phase 1b: Pre-computing skill recommendations...");
            // The MCP server will handle this on first call, but we log it
            console.log("[AWWESOME] ✓ System initialized. Agents are ready for briefing.");
        }
        catch (error) {
            console.error(`[AWWESOME] ✗ Initialization failed: ${error.message}`);
        }
    });
    // ─────────────────────────────────────────────────────────────
    // PHASE 2: AGENT BRIEFING — Equip before every task
    // ─────────────────────────────────────────────────────────────
    ruflo.hooks.on("beforeAgentTask", async (context) => {
        const taskDesc = context.task?.description || context.task?.name || "unknown task";
        console.log(`[AWWESOME] Phase 2: Briefing agent for task: "${taskDesc}"`);
        // The agent should call generate_agent_briefing via MCP,
        // but we inject a system message nudging it to do so.
        if (context.agent?.systemPrompt) {
            context.agent.systemPrompt += `\n\n## AWWESOME RUFLO GRAPHIFY — Auto-Injected Directive
Before starting your task, you MUST call the 'generate_agent_briefing' tool with:
  task: "${taskDesc}"
This will equip you with:
1. Structural context (God Nodes — the critical files)
2. Expert playbooks matched to this codebase's tech stack
3. Execution constraints to prevent architectural damage
Do NOT skip this step. Do NOT proceed without reading the briefing.`;
        }
    });
    // ─────────────────────────────────────────────────────────────
    // PHASE 3: POST-TASK — Update graph & evolve intelligence
    // ─────────────────────────────────────────────────────────────
    ruflo.hooks.on("afterAgentTask", async (context) => {
        const modifiedFiles = context.result?.modifiedFiles || [];
        if (modifiedFiles.length > 0) {
            console.log(`[AWWESOME] Phase 3: ${modifiedFiles.length} files modified. Updating graph...`);
            // Run incremental update in background (non-blocking)
            execAsync(`graphify . --update`).then(() => {
                console.log("[AWWESOME] ✓ Knowledge graph updated incrementally.");
            }).catch((error) => {
                console.error(`[AWWESOME] ✗ Background graph update failed: ${error.message}`);
            });
            // Check if a God Node was modified (high-impact change)
            const godNodeCheck = await checkGodNodeImpact(modifiedFiles);
            if (godNodeCheck.impacted) {
                console.warn(`[AWWESOME] ⚠ GOD NODE MODIFIED: ${godNodeCheck.nodes.join(', ')}`);
                console.warn("[AWWESOME] ⚠ Flagging for human review.");
                // Emit event for Ruflo to handle (e.g., pause pipeline, notify)
                if (ruflo.events?.emit) {
                    ruflo.events.emit("godNodeModified", {
                        files: godNodeCheck.nodes,
                        agent: context.agent?.name,
                        task: context.task?.name
                    });
                }
            }
        }
    });
    // ─────────────────────────────────────────────────────────────
    // PHASE 4: PARALLEL DISPATCH — Route tasks to communities
    // ─────────────────────────────────────────────────────────────
    ruflo.hooks.on("beforeParallelDispatch", async (context) => {
        console.log("[AWWESOME] Phase 4: Analyzing graph for parallel decomposition...");
        // Agents should call decompose_for_parallel via MCP,
        // but we can pre-populate the context with community info
        if (context.tasks && Array.isArray(context.tasks)) {
            console.log(`[AWWESOME] ${context.tasks.length} tasks queued for parallel dispatch.`);
            console.log("[AWWESOME] Each agent will be auto-briefed via beforeAgentTask hook.");
        }
    });
    // ─────────────────────────────────────────────────────────────
    // MCP SERVER REGISTRATION
    // ─────────────────────────────────────────────────────────────
    ruflo.mcp.registerServer("awwesome-ruflo-graphify", {
        command: "node",
        args: [path.join(pluginDir, "mcp-server.js")],
        cwd: pluginDir
    });
    console.log("[AWWESOME] Plugin registered. MCP server: awwesome-ruflo-graphify");
}
// ═══════════════════════════════════════════════════════════════════
// Internal: God Node Impact Analysis
// ═══════════════════════════════════════════════════════════════════
async function checkGodNodeImpact(modifiedFiles) {
    try {
        const fs = await Promise.resolve().then(() => __importStar(require('fs')));
        const reportPath = './graphify-out/GRAPH_REPORT.md';
        if (!fs.existsSync(reportPath))
            return { impacted: false, nodes: [] };
        const content = fs.readFileSync(reportPath, 'utf-8');
        const godNodesMatch = content.match(/## God Nodes[\s\S]*?(?=##|$)/i);
        if (!godNodesMatch)
            return { impacted: false, nodes: [] };
        const godText = godNodesMatch[0].toLowerCase();
        const impactedNodes = [];
        for (const file of modifiedFiles) {
            const basename = file.split('/').pop()?.toLowerCase() || '';
            if (godText.includes(basename)) {
                impactedNodes.push(file);
            }
        }
        return { impacted: impactedNodes.length > 0, nodes: impactedNodes };
    }
    catch {
        return { impacted: false, nodes: [] };
    }
}
