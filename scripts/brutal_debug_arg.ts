import { VibeRouter } from '../src/vibe-router';
import * as path from 'path';
import * as fs from 'fs';

async function brutalDebugSequence() {
    console.log("=================================================");
    console.log("🚀 STARTING AWWESOME RUFLO GRAPHIFY BRUTAL DEBUG ");
    console.log("=================================================\n");

    const graphDir = path.join(__dirname, '../graphify-out');

    // TEST 1: The Ghost Graph Test (Missing Graph Directory)
    console.log("\n[TEST 1] THE GHOST GRAPH (Simulating missing Graphify output)");
    const fakeDir = path.join(__dirname, '../fake-dir');
    const ghostRouter = new VibeRouter(fakeDir);
    ghostRouter.executeVibe("Update the user authentication service.");
    
    // Switch to normal router
    const router = new VibeRouter(graphDir);

    // TEST 2: The Hallucination Prompt (Gibberish)
    console.log("\n-------------------------------------------------");
    console.log("\n[TEST 2] THE HALLUCINATION PROMPT (Testing skill-mapper fallback)");
    router.executeVibe("asdfjkl qwertyuiop zxcvbnm plswork");

    // TEST 3: The Mega-Swarm Trigger (Testing parallel execution logic)
    console.log("\n-------------------------------------------------");
    console.log("\n[TEST 3] THE MEGA-SWARM TRIGGER (Cross-domain impact)");
    router.executeVibe("Refactor the execution engine, parallelization logic, and the UI layout simultaneously.");

    // TEST 4: Recursive Dogfooding
    console.log("\n-------------------------------------------------");
    console.log("\n[TEST 4] RECURSIVE DOGFOODING (Debugging itself)");
    router.executeVibe("Debug the ARG memory layer and fix any concurrency issues in the Vibe Router itself.");

    console.log("\n=================================================");
    console.log("✅ BRUTAL DEBUG SEQUENCE COMPLETE");
    console.log("=================================================\n");
}

brutalDebugSequence();
