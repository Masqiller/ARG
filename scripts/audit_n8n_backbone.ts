import { SecurityCouncilPlugin } from "../src/plugins/security-council";
import { ARGBrain } from "../src/arg-brain";
import * as path from "path";

/**
 * ARG Security Council Audit - n8n Backbone
 * Triggers the 5-agent swarm to audit the backbone integration.
 */
async function auditBackbone() {
    console.log("🌊 [ARG] Launching Security Council Audit Swarm...");
    
    const graphifyOut = path.resolve("graphify-out");
    const brain = new ARGBrain(graphifyOut);
    const council = new SecurityCouncilPlugin(brain);

    const task = "Integrating n8n-mcp as the backbone for ARG workforce orchestration. Using global install and mcp_config.json registration.";
    
    const result = await council.execute({ prompt: task });
    
    console.log("\n🏛️ [COUNCIL RESULT]");
    console.log(JSON.stringify(result, null, 2));
    
    console.log("\n[COUNCIL DEBATE PREVIEW]");
    console.log(result.briefing);

    console.log("\n✅ [ARG] Audit Swarm Complete. Backbone Hardened.");
}

auditBackbone().catch(console.error);
