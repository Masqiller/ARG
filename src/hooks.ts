import { spawnSync, spawn } from "child_process";
import * as path from "path";

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

export default function registerHooks(ruflo: any) {
    const pluginDir = __dirname;
    
    // ─────────────────────────────────────────────────────────────
    // PHASE 1: INITIALIZATION — Build the structural foundation
    // ─────────────────────────────────────────────────────────────
    ruflo.hooks.on("afterInit", async (context: any) => {
        console.log("[AWWESOME] Phase 1: Building structural knowledge graph...");
        try {
            // Generate baseline graph
            const result = spawnSync('graphify', ['.'], { encoding: 'utf-8', shell: false });
            if (result.status !== 0) throw new Error(result.stderr || 'graphify failed');
            console.log("[AWWESOME] ✓ Baseline knowledge graph generated.");
            
            // Immediately warm the skill recommendation cache
            console.log("[AWWESOME] Phase 1b: Pre-computing skill recommendations...");
            // The MCP server will handle this on first call, but we log it
            console.log("[AWWESOME] ✓ System initialized. Agents are ready for briefing.");
        } catch (error: any) {
            console.error(`[AWWESOME] ✗ Initialization failed: ${error.message}`);
        }
    });

    // ─────────────────────────────────────────────────────────────
    // PHASE 2: AGENT BRIEFING — Equip before every task
    // ─────────────────────────────────────────────────────────────
    ruflo.hooks.on("beforeAgentTask", async (context: any) => {
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
    ruflo.hooks.on("afterAgentTask", async (context: any) => {
        const modifiedFiles = context.result?.modifiedFiles || [];
        
        if (modifiedFiles.length > 0) {
            console.log(`[AWWESOME] Phase 3: ${modifiedFiles.length} files modified. Updating graph...`);
            
            // Run incremental update in background (non-blocking)
            const child = spawn('graphify', ['.', '--update'], { stdio: 'ignore', shell: false });
            child.on('close', (code) => {
                if (code === 0) console.log("[AWWESOME] ✓ Knowledge graph updated incrementally.");
                else console.error(`[AWWESOME] ✗ Background graph update failed (exit ${code})`);
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
    ruflo.hooks.on("beforeParallelDispatch", async (context: any) => {
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

async function checkGodNodeImpact(modifiedFiles: string[]): Promise<{ impacted: boolean; nodes: string[] }> {
    try {
        const fs = await import('fs');
        const reportPath = './graphify-out/GRAPH_REPORT.md';
        
        if (!fs.existsSync(reportPath)) return { impacted: false, nodes: [] };
        
        const content = fs.readFileSync(reportPath, 'utf-8');
        const godNodesMatch = content.match(/## God Nodes[\s\S]*?(?=##|$)/i);
        if (!godNodesMatch) return { impacted: false, nodes: [] };
        
        const godText = godNodesMatch[0].toLowerCase();
        const impactedNodes: string[] = [];
        
        for (const file of modifiedFiles) {
            const basename = file.split('/').pop()?.toLowerCase() || '';
            if (godText.includes(basename)) {
                impactedNodes.push(file);
            }
        }
        
        return { impacted: impactedNodes.length > 0, nodes: impactedNodes };
    } catch {
        return { impacted: false, nodes: [] };
    }
}
