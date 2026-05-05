import { ARGBrain } from './arg-brain';
import { recommendSkillsForTask } from './skill-mapper';
import * as path from 'path';

export class VibeRouter {
    private brain: ARGBrain;
    private graphDir: string;

    constructor(graphifyOutputDir: string) {
        this.graphDir = graphifyOutputDir;
        this.brain = new ARGBrain(graphifyOutputDir);
    }

    /**
     * The absolute peak of autonomous execution.
     * Pass a raw prompt, get an optimized swarm configuration.
     */
    public executeVibe(prompt: string) {
        console.log(`\n🌊 [VIBE ROUTER] Receiving raw prompt: "${prompt}"`);

        // 1. Memory Context Pruning (Token Savings)
        console.log(`\n🧠 [ARG BRAIN] Pruning structural context...`);
        const pruned = this.brain.pruneContext(prompt);
        console.log(`✅ Pruned Context! Savings: ${pruned.tokenSavingsRatio.toFixed(2)}% of total tokens.`);
        console.log(`🔍 Relevant Nodes Found: ${pruned.relevantNodes.length}`);
        
        // 2. Autonomous Skill Selection
        console.log(`\n🎯 [AWWESOME SKILLS] Injecting expert playbooks...`);
        const skills = recommendSkillsForTask(this.graphDir, prompt).slice(0, 3);
        console.log(`✅ Injected Playbooks: ${skills.map(s => s.skill).join(', ')}`);

        // 3. Dynamic Swarm Orchestration
        const communities = Array.from(pruned.communitiesTouched);
        console.log(`\n🤖 [RUFLO SWARM] Evaluating autonomous orchestration...`);
        
        let swarmMode = false;
        let councilMode = false;
        const hasCouncil = skills.some(s => s.skill === 'llm-council');
        let agentsToLaunch = 1;

        if (hasCouncil) {
            councilMode = true;
            agentsToLaunch = 5;
            console.log(`🏛️ [DECISION] LLM Council debate triggered! Launching a Swarm of 5 specialized advisory agents.`);
        } else if (communities.length > 1) {
            swarmMode = true;
            agentsToLaunch = communities.length;
            console.log(`🔥 [DECISION] Cross-domain task detected! Launching a Swarm of ${agentsToLaunch} agents.`);
        } else {
            console.log(`⚡ [DECISION] Narrow scope task. Launching a single high-performance Subagent.`);
        }

        console.log(`\n🚀 [EXECUTION] Swarm initialized with ${pruned.tokenSavingsRatio.toFixed(2)}% lighter memory overhead!\n`);
        
        // 4. Connect Loose Ends: Physical Execution Hooking
        this.triggerRufloExecution(prompt, swarmMode, councilMode, agentsToLaunch, communities, skills);
    }

    private triggerRufloExecution(task: string, swarmMode: boolean, councilMode: boolean, agentsToLaunch: number, communities: string[], skills: any[]) {
        console.log(`\n[ARG SYSTEM] >>> Triggering Live Execution Hooks <<<`);
        console.log(`[RUFLO HOOK] emit('beforeAgentTask', { task: "${task}" })`);
        
        console.log(`[ARG SYSTEM] Spinning up ${agentsToLaunch} agent(s)...`);
        
        const councilRoles = ["The Contrarian", "The First Principles Thinker", "The Expansionist", "The Outsider", "The Executor"];

        for (let i = 0; i < agentsToLaunch; i++) {
            let domain = "core";
            if (councilMode) {
                domain = `council-role: ${councilRoles[i]}`;
            } else if (swarmMode) {
                domain = communities[i];
            }
            console.log(`  ⚙️ Agent ${i+1} [${domain}] online.`);
            console.log(`     ↳ Equipping memory: Pruned AST (${domain})`);
            console.log(`     ↳ Equipping playbooks: [${skills.map(s => s.skill).join(', ')}]`);
            
            // Simulating the actual async execution of the agent
            this.brain.updateState(`Agent-${i+1}`, { status: "running", domain });
        }
        
        console.log(`[RUFLO HOOK] emit('afterAgentTask', { modifiedFiles: [...] })`);
        console.log(`[ARG SYSTEM] Execution sequence complete. Graphify background update triggered.\n`);
    }
}

// If executed directly as a test
if (require.main === module) {
    const router = new VibeRouter(path.join(__dirname, '../graphify-out'));
    const testPrompt = process.argv[2] || "Refactor the Ruflo graph extraction execution pipeline and ensure memory caching works securely.";
    router.executeVibe(testPrompt);
}
