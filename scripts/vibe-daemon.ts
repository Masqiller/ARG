import { VibeRouter } from '../src/vibe-router';
import * as path from 'path';

const projectRoot = path.join(__dirname, '../');
const router = new VibeRouter(path.join(projectRoot, 'graphify-out'), projectRoot);

async function runDaemon() {
    console.log("🌊 [VIBE DAEMON] Active. Monitoring system for evolution opportunities...");
    
    while (true) {
        // Run silent optimization
        await router.executeVibe("Perform a background audit and self-optimize skill weights.", { verbose: false });
        // Cooldown period for background processing
        await new Promise(resolve => setTimeout(resolve, 3600000)); 
    }
}

runDaemon().catch(console.error);
