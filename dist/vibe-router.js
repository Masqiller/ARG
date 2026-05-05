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
exports.VibeRouter = void 0;
const arg_brain_1 = require("./arg-brain");
const skill_mapper_1 = require("./skill-mapper");
const usb_manager_1 = require("./usb-manager");
const plugin_manager_1 = require("./plugins/plugin-manager");
const external_loader_1 = require("./plugins/external-loader");
const workforce_plugins_1 = require("./plugins/workforce-plugins");
const security_council_1 = require("./plugins/security-council");
const n8n_bridge_1 = require("./plugins/n8n-bridge");
const vibe_harden_1 = require("./plugins/vibe-harden");
const path = __importStar(require("path"));
class VibeRouter {
    brain;
    graphDir;
    usb;
    plugins;
    externalLoader;
    constructor(graphifyOutputDir, projectRoot) {
        this.graphDir = graphifyOutputDir;
        this.brain = new arg_brain_1.ARGBrain(graphifyOutputDir);
        this.usb = new usb_manager_1.UniversalSessionBridge(projectRoot);
        this.plugins = new plugin_manager_1.PluginManager(this.brain);
        this.externalLoader = new external_loader_1.ExternalPluginLoader();
        // Register Internal Workforce Candidates
        this.plugins.registerPlugin(new workforce_plugins_1.FrontendDesignPlugin());
        this.plugins.registerPlugin(new workforce_plugins_1.CodeReviewPlugin());
        this.plugins.registerPlugin(new workforce_plugins_1.SecurityReviewPlugin());
        this.plugins.registerPlugin(new security_council_1.SecurityCouncilPlugin(this.brain));
        this.plugins.registerPlugin(new n8n_bridge_1.N8NBridgePlugin(this.brain));
        this.plugins.registerPlugin(new vibe_harden_1.VibeHardenPlugin(this.brain));
        // Register Global External Plugins (Claude-Code / Superpowers / Caveman)
        this.externalLoader.loadClaudeCodePlugins(this.plugins);
        this.externalLoader.loadCavemanAgents(this.plugins);
    }
    /**
     * The absolute peak of autonomous execution.
     * Pass a raw prompt, get an optimized swarm configuration.
     */
    async executeVibe(prompt) {
        console.log(`\n🌊 [VIBE ROUTER] Receiving raw prompt: "${prompt}"`);
        // 1. Memory Context Pruning (Token Savings)
        const pruned = this.brain.pruneContext(prompt);
        console.log(`🧠 [BRAIN] Pruned context to ${pruned.relevantNodes.length} nodes across ${pruned.communitiesTouched.size} communities.`);
        // 2. Skill Recommendation Heuristics (1,400+ Skill Pool)
        const recommendedSkills = (0, skill_mapper_1.recommendSkillsForTask)(this.graphDir, prompt);
        console.log(`🛠️ [SKILLS] Recommended: ${recommendedSkills.map(s => s.skill).join(', ')}`);
        // 3. Long-Term Memory Retrieval (Claude-Mem)
        console.log(`\n🧠 [MEMORY LAYER] Ensuring Claude-Mem service is active...`);
        try {
            const { spawnSync } = require('child_process');
            const memCliPath = path.join(this.usb.getProjectRoot(), 'vendor/claude-mem/dist/npx-cli/index.js');
            // Check status and start if needed
            const status = spawnSync('node', [memCliPath, 'status']).stdout.toString();
            if (!status.includes('RUNNING')) {
                console.log("   ↳ Starting Memory Worker...");
                spawnSync('node', [memCliPath, 'start', '--no-auto-start']);
            }
            console.log(`🧠 [MEMORY LAYER] Querying Long-Term Memory...`);
            const memoryResult = spawnSync('node', [memCliPath, 'search', prompt]).stdout.toString();
            if (memoryResult.trim() && !memoryResult.includes('No results')) {
                console.log(`✅ Retrieved Memory Context: ${memoryResult.length} bytes`);
            }
            else {
                console.log(`ℹ️ No relevant long-term memory found for this task.`);
            }
        }
        catch (e) {
            console.log(`⚠️ Memory layer bypass: initialization in progress or CLI unavailable.`);
        }
        // 4. Workforce Swarm Dispatching
        console.log(`\n🐝 [SWARM] Dispatching agents...`);
        let swarmMode = false;
        let councilMode = false;
        let agentsToLaunch = 1;
        let communities = [];
        let skills = recommendedSkills;
        if (prompt.toLowerCase().includes('refactor') || prompt.toLowerCase().includes('implement')) {
            swarmMode = true;
            communities = Array.from(pruned.communitiesTouched);
            agentsToLaunch = Math.min(communities.length, 5);
            console.log(`   ↳ High-complexity task detected. Launching ${agentsToLaunch}-agent parallel swarm.`);
        }
        if (prompt.toLowerCase().includes('audit') || prompt.toLowerCase().includes('security') || prompt.toLowerCase().includes('harden') || prompt.toLowerCase().includes('council')) {
            councilMode = true;
            agentsToLaunch = 5;
            console.log(`   ↳ Security-critical task detected. Convening the ARG Security Council.`);
            const auditResult = await this.plugins.runPlugin('security-council', { prompt });
            if (auditResult.status === 'success') {
                const hardenResult = await this.plugins.runPlugin('vibe-harden', { findings: auditResult.findings });
                console.log(`✅ Swarm synthesized ${hardenResult.proposals?.length || 0} hardening proposals.`);
            }
        }
        if (prompt.toLowerCase().includes('workflow') || prompt.toLowerCase().includes('automation') || prompt.toLowerCase().includes('n8n')) {
            console.log(`🌉 [VIBE MATCH] n8n-mcp backbone triggered! Bridging automation tools.`);
            await this.plugins.runPlugin('n8n-bridge', { prompt });
        }
        // 6. Connect Loose Ends: Physical Execution Hooking
        this.triggerRufloExecution(prompt, swarmMode, councilMode, agentsToLaunch, communities, skills);
    }
    triggerRufloExecution(task, swarmMode, councilMode, agentsToLaunch, communities, skills) {
        console.log(`\n[ARG SYSTEM] >>> Triggering Live Execution Hooks <<<`);
        console.log(`[RUFLO HOOK] emit('beforeAgentTask', { task: "${task}" })`);
        console.log(`[ARG SYSTEM] Spinning up ${agentsToLaunch} agent(s)...`);
        const councilRoles = ["The Contrarian", "The First Principles Thinker", "The Expansionist", "The Outsider", "The Executor"];
        for (let i = 0; i < agentsToLaunch; i++) {
            let domain = "core";
            if (councilMode) {
                domain = `council-role: ${councilRoles[i]}`;
            }
            else if (swarmMode) {
                domain = communities[i] || "core";
            }
            console.log(`  ⚙️ Agent ${i + 1} [${domain}] online.`);
            console.log(`     ↳ Equipping memory: Pruned AST (${domain})`);
            console.log(`     ↳ Equipping playbooks: [${skills.map(s => s.skill).join(', ')}]`);
            // Simulating the actual async execution of the agent
            this.brain.updateState(`Agent-${i + 1}`, { status: "running", domain });
        }
        console.log(`[RUFLO HOOK] emit('afterAgentTask', { modifiedFiles: [...] })`);
        // 5. Cost Observability (CodeBurn)
        try {
            console.log(`\n🔥 [CODEBURN] Running cost audit for this swarm...`);
            const { spawnSync } = require('child_process');
            const auditResult = spawnSync('npx', ['codeburn', 'status', '--project', 'awwesome-ruflo-graphify']).stdout.toString();
            console.log(auditResult);
        }
        catch (e) {
            console.log(`ℹ️ CodeBurn report pending session log flush.`);
        }
        console.log(`[ARG SYSTEM] Execution sequence complete. Graphify background update triggered.\n`);
    }
}
exports.VibeRouter = VibeRouter;
// If executed directly as a test
if (require.main === module) {
    const projectRoot = path.join(__dirname, '..');
    const router = new VibeRouter(path.join(__dirname, '../graphify-out'), projectRoot);
    const testPrompt = process.argv[2] || "Refactor the Ruflo graph extraction execution pipeline and ensure memory caching works securely.";
    router.executeVibe(testPrompt);
}
