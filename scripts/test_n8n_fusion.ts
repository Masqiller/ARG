import { VibeRouter } from '../src/vibe-router';
import * as path from 'path';

async function testFusion() {
    const projectRoot = process.cwd();
    const graphifyOut = path.join(projectRoot, "graphify-out");
    const router = new VibeRouter(graphifyOut, projectRoot);

    console.log("🌊 [TEST] Triggering n8n fusion via VibeRouter...");
    const prompt = "n8n automation: Setup a workflow to audit the core mcp-server cluster.";
    await router.executeVibe(prompt);
}

testFusion();
