import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { ARGSessionManager } from "../src/arg-session-manager";

async function testSessionManager() {
    console.log("🧪 Starting Iterative Testing for ARG Session Manager...");
    
    const manager = new ARGSessionManager();
    
    // 1. Init Session
    console.log("\n[Test 1] Initializing New Session 'test-session-v1'...");
    const initRes = manager.initSession('test-session-v1');
    console.log("Response:", initRes);

    // 2. Save Memory
    console.log("\n[Test 2] Saving Architecture Decision...");
    const saveRes1 = manager.saveMemory('AuthArchitecture', 'We will use Supabase for Auth instead of NextAuth because we need RLS policies.');
    console.log("Response:", saveRes1);

    const saveRes2 = manager.saveMemory('TestingFramework', 'Jest has been dropped in favor of Vitest for speed.');
    console.log("Response:", saveRes2);

    // 3. Verify Local File Creation
    const fs = require('fs');
    const path = require('path');
    const homeDir = process.env.HOME || process.env.USERPROFILE || '';
    const sessionFile = path.join(homeDir, '.arg_sessions', 'test-session-v1.json');
    
    console.log("\n[Test 3] Verifying file persistence...");
    if (fs.existsSync(sessionFile)) {
        console.log(`✅ Session file successfully created at: ${sessionFile}`);
        const contents = fs.readFileSync(sessionFile, 'utf-8');
        console.log(`Contents: ${contents.substring(0, 100)}...`);
    } else {
        console.log("❌ Failed to create session file.");
    }

    // 4. Retrieve Memory (Mocking what ARGBrain would do)
    console.log("\n[Test 4] Retrieving Memory from Manager State...");
    const memories = manager.getAllMemory();
    console.log(`Found ${memories.length} memory blocks.`);
    memories.forEach(m => console.log(`- ${m.key}: ${m.content}`));

    console.log("\n✅ Iterative Testing Complete!");
}

testSessionManager().catch(console.error);
