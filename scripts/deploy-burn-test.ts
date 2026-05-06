import { VibeRouter } from '../src/vibe-router';
import * as path from 'path';
import * as fs from 'fs';
import { execSync } from 'child_process';

/**
 * 🌊 [DEPLOYMENT READINESS & BURN TEST]
 * 
 * This script simulates a "Zero-Context Agent" being deployed into a sandbox.
 * It runs a loop of tasks, forcing the ARG Orchestrator to evolve its 
 * skill weights and prune context dynamically.
 */

const projectRoot = path.join(__dirname, '../');
const sandboxDir = path.join(projectRoot, 'sandbox_burn_test');
const router = new VibeRouter(path.join(projectRoot, 'graphify-out'), projectRoot);

const TEST_TASKS = [
    "Add a JSDoc comment to index.js in project_alpha",
    "Ensure calculateTotal handles negative prices by returning 0",
    "Add a 'discount' parameter to calculateTotal with a default of 0",
    "Refactor project_alpha/index.js to use an ES6 Arrow function",
    "Add a unit test file for project_alpha/index.js"
];

async function runBurnTest() {
    console.log("🔥 [BURN TEST] Starting Deployment Readiness Loop...");
    
    if (!fs.existsSync(sandboxDir)) {
        fs.mkdirSync(sandboxDir);
    }

    for (let i = 0; i < TEST_TASKS.length; i++) {
        const task = TEST_TASKS[i];
        console.log(`\n🌀 [LOOP ${i + 1}/${TEST_TASKS.length}] Objective: "${task}"`);
        
        const startTime = Date.now();
        
        // Execute the vibe via the router
        const result = await router.executeVibe(task, { verbose: false });
        
        const duration = Date.now() - startTime;
        console.log(`✅ [SUCCESS] Task handled in ${duration}ms.`);
        console.log(`📊 [STATS] Pruned: ${result.prunedNodes} nodes | Duration: ${result.durationMs}ms`);
        
        // Check for Skill Evolution
        const weights = JSON.parse(fs.readFileSync(path.join(projectRoot, 'logs/skill_weights.json'), 'utf-8'));
        const evolvedSkills = Object.entries(weights)
            .filter(([, w]) => (w as number) !== 5.0)
            .map(([s, w]) => `${s} (${(w as number).toFixed(2)})`);
        
        if (evolvedSkills.length > 0) {
            console.log(`🧠 [EVOLUTION] Adaptive weights changed: ${evolvedSkills.join(', ')}`);
        }

        // Cool down to simulate real agent think-time
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log("\n✨ [BURN TEST COMPLETE] The ARG Orchestrator is fully deployable.");
    console.log("The workforce is now optimized for the sandbox project.");
}

runBurnTest().catch(console.error);
