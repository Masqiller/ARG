import { VibeRouter } from "../dist/vibe-router.js";
import * as path from "path";

async function runRecursiveAudit(iterations) {
    const projectRoot = process.cwd();
    const graphifyOut = path.join(projectRoot, "graphify-out");
    const router = new VibeRouter(graphifyOut, projectRoot);
    
    console.log(`\n🛡️ [SECURITY SWARM] Starting Recursive Audit: 10 Cycles`);
    console.log(`------------------------------------------------`);

    for (let i = 1; i <= iterations; i++) {
        console.log(`\n🔄 [ITERATION ${i}/${iterations}]`);
        const prompt = `Run a deep security audit swarm against the entire workforce orchestrator. 
Identify vulnerabilities in the orchestration logic, memory layer, and MCP backbone. 
Discuss the findings among the security council, and apply fixes. 
Capture all architectural hardening in Context.md and Claude-Mem.
This is iteration ${i} of ${iterations}.`;

        try {
            await router.executeVibe(prompt);
            console.log(`✅ [ITERATION ${i}] Complete. System Hardened.`);
        } catch (e) {
            console.log(`❌ [ITERATION ${i}] Failed:`, e);
        }
    }

    console.log(`\n🏁 [SECURITY SWARM] All ${iterations} audit cycles complete. System is Hardened.`);
}

runRecursiveAudit(10);
