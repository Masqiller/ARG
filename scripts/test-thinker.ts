import { VibeRouter } from '../src/vibe-router';
import * as path from 'path';

const graphDir = path.join(__dirname, '../../graphify-out');
const projectRoot = path.join(__dirname, '../');
const router = new VibeRouter(graphDir, projectRoot);

async function test() {
    console.log("Starting Thinker Agent test...");
    await router.executeVibe("Summon the thinker agent to find cross-repo synergies in my skills.");
    console.log("Test complete.");
}

test().catch(console.error);
