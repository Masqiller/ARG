import { VibeRouter } from '../src/vibe-router';
import * as path from 'path';
import * as fs from 'fs';

async function brutalDebugSequence() {
    console.log("=================================================");
    console.log("🚀 STARTING AWWESOME RUFLO GRAPHIFY BRUTAL DEBUG ");
    console.log("=================================================\n");

    const graphDir = path.join(__dirname, '../graphify-out');
    const projectRoot = path.join(__dirname, '..');

    // TEST 1: The Ghost Graph Test (Missing Graph Directory)
    console.log("\n[TEST 1] THE GHOST GRAPH (Simulating missing Graphify output)");
    const fakeDir = path.join(__dirname, '../fake-dir');
    const ghostRouter = new VibeRouter(fakeDir, projectRoot);
    ghostRouter.executeVibe("Update the user authentication service.");
    
    // Switch to normal router
    const router = new VibeRouter(graphDir, projectRoot);

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

    // TEST 5: The Security Council Debate
    console.log("\n-------------------------------------------------");
    console.log("\n[TEST 5] THE SECURITY COUNCIL DEBATE (Audit Mode)");
    router.executeVibe("Audit the MCP server's command sanitization logic for possible shell injection vulnerabilities.");

    // TEST 6: CodeBurn Integration
    console.log("\n-------------------------------------------------");
    console.log("\n[TEST 6] CODEBURN COST AUDIT");
    router.executeVibe("Calculate the cost of the last 10 iterations of the security audit swarm.");

    console.log("\n=================================================");
    console.log("✅ BRUTAL DEBUG SEQUENCE COMPLETE");
    console.log("=================================================\n");
}

brutalDebugSequence();
