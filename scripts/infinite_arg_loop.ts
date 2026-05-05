import { VibeRouter } from '../src/vibe-router';
import * as path from 'path';

console.log("=====================================================");
console.log("🌀 INITIATING ITERATIVE SKILL DISCOVERY LOOP");
console.log("=====================================================\n");

const graphDir = path.join(__dirname, '../graphify-out');
const router = new VibeRouter(graphDir);

let iteration = 1;
let currentScenarioIndex = 0;

// Massive cross-domain scenarios to test the engine's playbook mapping
const discoveryScenarios = [
    "Architect a highly secure distributed system with zero-trust network boundaries.",
    "Deploy an autonomous robotics swarm with computer vision and kinematics control.",
    "Build a low-latency high-frequency trading bot handling billions of transactions.",
    "Execute a massive legacy-to-modern framework migration with atomic commits.",
    "Setup a multi-region highly available PostgreSQL cluster with disaster recovery.",
    "Conduct a deep semantic security audit looking for zero-day vulnerabilities."
];

async function infiniteLoop() {
    while (true) {
        const activeScenario = discoveryScenarios[currentScenarioIndex];
        console.log(`\n\n[DISCOVERY CYCLE ${iteration}] --------------------------------`);
        console.log(`🌍 Active Scenario: ${activeScenario}`);
        
        // Constructing an autonomous prompt to trigger the Council to debate the best skills
        const prompt = `Council debate: Analyze the 1,400+ skill repository and determine the absolute best hooks and plugins to integrate into the ARG system to ${activeScenario}`;
        
        try {
            // Vibe Router autonomously prunes context and routes subagents
            router.executeVibe(prompt);
            
            console.log(`✅ Iteration ${iteration} skill discovery complete.`);
            
            // Move to next scenario
            currentScenarioIndex++;
            if (currentScenarioIndex >= discoveryScenarios.length) {
                console.log(`\n🔄 Scenario pool exhausted. Looping back to beginning...`);
                currentScenarioIndex = 0;
            }
        } catch (error: any) {
            console.error(`❌ Iteration ${iteration} failed: ${error.message}`);
            console.log("🤖 Triggering fallback for self-healing...");
        }

        iteration++;
        
        // Wait 3 seconds between iterations to prevent aggressive CPU lockup
        await new Promise(resolve => setTimeout(resolve, 3000));
    }
}

infiniteLoop();
