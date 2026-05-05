import { VibeRouter } from '../src/vibe-router';
import * as path from 'path';
import * as fs from 'fs';

// Auto-discover the project root by looking for package.json or .git
let currentDir = process.cwd();
let projectRoot = currentDir;
while (currentDir !== path.parse(currentDir).root) {
    if (fs.existsSync(path.join(currentDir, 'package.json')) || fs.existsSync(path.join(currentDir, '.git'))) {
        projectRoot = currentDir;
        break;
    }
    currentDir = path.dirname(currentDir);
}

const graphDir = path.join(projectRoot, 'graphify-out');
const router = new VibeRouter(graphDir, projectRoot);

async function cli() {
    const command = process.argv[2];
    const args = process.argv.slice(3).join(' ');

    if (!command || command === 'help') {
        console.log(`
🛸 AWWESOME RUFLO GRAPHIFY (ARG) - Universal CLI 🛸
Usage: vibe <command> [arguments]

Commands:
  run <prompt>    Launch a Swarm Orchestrator for the given task
  discover        Print the Universal Agent Onboarding Manifest
  burn            Print the Net Intelligence Efficiency Balance Sheet
  help            Show this menu
`);
        process.exit(0);
    }

    try {
        switch (command) {
            case 'discover':
                await router.discoverSystem();
                break;
            case 'burn':
                await router.reportBurn();
                break;
            case 'run':
                if (!args) throw new Error("The 'run' command requires a prompt. Example: vibe run 'Refactor login'");
                console.log(`🚀 [VIBE HUB] Dispatching workforce for: "${args}"`);
                await router.executeVibe(args);
                console.log("\n✅ [VIBE HUB] Task complete.");
                break;
            default:
                // Fallback for legacy scripts calling \`vibe "prompt"\`
                console.log(`⚠️ [WARNING] Implicit 'run' detected. Please use 'vibe run "${command} ${args}".trim()' in the future.`);
                const fullPrompt = process.argv.slice(2).join(' ');
                console.log(`🚀 [VIBE HUB] Dispatching workforce for: "${fullPrompt}"`);
                await router.executeVibe(fullPrompt);
                console.log("\n✅ [VIBE HUB] Task complete.");
                break;
        }
    } catch (e: any) {
        console.error(`\n❌ [FATAL ERROR] ${e.message}`);
        process.exit(1);
    }
}

cli().catch(console.error);
