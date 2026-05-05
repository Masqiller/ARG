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
const child_process_1 = require("child_process");
const util_1 = require("util");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const skill_mapper_1 = require("./skill-mapper");
const execAsync = (0, util_1.promisify)(child_process_1.exec);
// ═══════════════════════════════════════════════════════════════════
// AWWESOME RUFLO GRAPHIFY — Live Swarm Launcher
// This script simulates the Ruflo orchestrator hooking into our plugin
// to launch a live parallel agent swarm.
// ═══════════════════════════════════════════════════════════════════
const TARGET_DIR = path.resolve(process.argv[2] || ".");
const TASK = process.argv[3] || "Analyze architecture and propose optimization strategies";
const GRAPHIFY_OUT = path.join(TARGET_DIR, "graphify-out");
async function runSwarm() {
    console.log(`\n🚀 [AWWESOME SWARM] Initializing swarm on: ${TARGET_DIR}`);
    console.log(`🎯 [AWWESOME SWARM] Global Task: "${TASK}"`);
    // PHASE 1: Baseline Structural Knowledge
    console.log(`\n[Phase 1] Baselining Graphify Structural Knowledge...`);
    try {
        await execAsync(`~/.local/bin/graphify extract ${TARGET_DIR}`);
        console.log(`✅ Graphify baseline complete. Reports generated in ${GRAPHIFY_OUT}`);
    }
    catch (e) {
        console.warn(`⚠️ Graphify baseline issue: ${e.message.split('\\n')[0]}. Simulating fast Graphify extraction...`);
        // Simulate graph generation so the swarm can launch fast
        if (!fs.existsSync(GRAPHIFY_OUT))
            fs.mkdirSync(GRAPHIFY_OUT, { recursive: true });
        fs.writeFileSync(path.join(GRAPHIFY_OUT, 'GRAPH_REPORT.md'), `# Graphify Structural Report
## God Nodes
- \`src/mcp-server.ts\` (Score: 0.95)
- \`v3/src/task-execution/application/WorkflowEngine.ts\` (Score: 0.88)
## Community execution
Core execution engine: \`v3/src/task-execution/application/WorkflowEngine.ts\`
## Community parallel
Parallel workers: \`v3/src/task-execution/workers.ts\`
`);
        fs.writeFileSync(path.join(GRAPHIFY_OUT, 'graph.json'), JSON.stringify({
            nodes: [
                { id: "v3/src/task-execution/application/WorkflowEngine.ts", community: "execution" },
                { id: "v3/src/task-execution/workers.ts", community: "parallel" }
            ]
        }));
    }
    // PHASE 2: Parallel Decomposition
    console.log(`\n[Phase 2] Decomposing task via Graph Communities...`);
    const graphPath = path.join(GRAPHIFY_OUT, "graph.json");
    let communities = new Map();
    if (fs.existsSync(graphPath)) {
        try {
            const graph = JSON.parse(fs.readFileSync(graphPath, "utf-8"));
            const nodes = graph.nodes || [];
            for (const node of nodes) {
                const comm = node.community || 'core';
                const id = node.id || node.name || '';
                if (!communities.has(comm))
                    communities.set(comm, []);
                communities.get(comm).push(id);
            }
        }
        catch { /* ignore */ }
    }
    if (communities.size === 0) {
        communities.set('core', ['(entire codebase)']);
    }
    console.log(`✅ Decomposed into ${communities.size} independent domains. Launching Swarm...`);
    // PHASE 3: Swarm Execution
    const agents = [];
    let agentId = 1;
    for (const [communityName, files] of communities.entries()) {
        const agentName = `Agent-${agentId++} [Domain: ${communityName}]`;
        // Launch parallel agent
        agents.push((async () => {
            console.log(`🤖 ${agentName} starting. Domain covers ${files.length} files.`);
            // Generate agent briefing via skill-mapper (simulate MCP call)
            const godNodesMatch = fs.readFileSync(path.join(GRAPHIFY_OUT, 'GRAPH_REPORT.md'), 'utf-8').match(/## God Nodes[\s\S]*?(?=##|$)/i);
            const godNodes = godNodesMatch ? godNodesMatch[0] : '';
            const recommended = (0, skill_mapper_1.recommendSkillsForTask)(GRAPHIFY_OUT, TASK);
            const topSkills = recommended.slice(0, 3);
            let skillBriefs = '';
            for (const rec of topSkills) {
                const skillPath = (0, skill_mapper_1.getSkillPath)(rec.skill);
                if (skillPath) {
                    const content = fs.readFileSync(skillPath, "utf-8");
                    skillBriefs += `\n- Loaded expert playbook: ${rec.skill} (score: ${rec.score})`;
                }
            }
            // Simulate Agent processing time based on domain size
            const processingTime = 1000 + (Math.random() * 2000);
            await new Promise(r => setTimeout(r, processingTime));
            console.log(`✅ ${agentName} finished.
   Briefing loaded: God Nodes + ${topSkills.length} Expert Skills${skillBriefs}
   Action: Executed task logic against Community ${communityName}.`);
        })());
    }
    // Wait for all agents
    await Promise.all(agents);
    // PHASE 4: Integration
    console.log(`\n[Phase 4] Swarm Execution Complete.`);
    console.log(`🔄 Triggering post-task Graphify incremental update...`);
    try {
        await execAsync(`graphify ${TARGET_DIR} --update`);
        console.log(`✅ Graphify update complete.`);
    }
    catch (e) {
        console.log(`⚠️ Graphify update warning: ${e.message}`);
    }
    console.log(`\n🎉 AWWESOME RUFLO GRAPHIFY Swarm execution finished successfully!`);
}
runSwarm().catch(e => console.error(e));
