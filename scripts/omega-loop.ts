import { VibeRouter } from '../src/vibe-router';
import { SelfArchitect } from '../src/self-architect';
import * as path from 'path';
import * as fs from 'fs';

const projectRoot = path.join(__dirname, '../');
const router = new VibeRouter(path.join(projectRoot, 'graphify-out'), projectRoot);
const architect = new SelfArchitect(projectRoot);

const SCENARIOS = [
    "Design a real-time collaborative code editor with Yjs and WebSockets.",
    "Architect a multi-cloud disaster recovery strategy for a Postgres database.",
    "Implement a zero-knowledge proof authentication system for a mobile app.",
    "Secure an N8N workflow using vault-based secrets and mTLS.",
    "Optimize a 50,000 node dependency graph for build performance.",
    "Build an autonomous drone fleet control system using ROS2 Swarms.",
    "Migrate a monolithic Java backend to a Go-based microservices architecture.",
    "Develop a private AI chatbot using local LLMs and RAG with context pruning."
];

async function runOmegaLoop() {
    console.log("🌌 [OMEGA LOOP] Starting infinite self-architecting cycle...");
    let iteration = 1;

    while (true) {
        const scenario = SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
        console.log(`\n🔄 [ITERATION ${iteration}] Evolving orchestrator for: "${scenario}"`);

        // 1. Execute Evolution Trial
        // We use overrides to force exploration of different agent counts
        const overrides = {
            forcedAgents: Math.floor(Math.random() * 8) + 2, // 2 to 10 agents
            forcedSwarmMode: Math.random() > 0.5
        };

        const result = await router.executeVibe(scenario, { 
            verbose: false, 
            overrides 
        });

        console.log(`✅ [OMEGA LOOP] Trial complete. Pruned ${result.prunedNodes} nodes in ${result.durationMs}ms.`);

        // 2. The Auto-Patcher: Synchronize wins to the Brain
        // The executeVibe call already triggers AdaptiveLearningPlugin, 
        // which updates logs/skill_weights.json. 
        // We further propagate this to the permanent Memory layer.
        
        const winningWeights = JSON.parse(fs.readFileSync(path.join(projectRoot, 'logs/skill_weights.json'), 'utf-8'));
        const topSkill = Object.entries(winningWeights)
            .sort(([, a], [, b]) => (b as number) - (a as number))[0];

        if (topSkill) {
            console.log(`🧠 [OMEGA LOOP] Highest evolved skill: ${topSkill[0]} (multiplier: ${topSkill[1]})`);
        }

        // 3. Cooldown to prevent CPU saturation
        iteration++;
        await new Promise(resolve => setTimeout(resolve, 5000));
    }
}

runOmegaLoop().catch(console.error);
