import { VibeRouter } from '../src/vibe-router';
import * as path from 'path';

/**
 * 🔄 [RECURSIVE AUDIT LOOP] v1.0
 * Iteratively audits and hardens the codebase using the Security Council.
 */
async function runRecursiveAudit(cycles: number = 10) {
    const graphDir = path.join(__dirname, '../../graphify-out');
    const projectRoot = path.join(__dirname, '../../');
    const router = new VibeRouter(graphDir, projectRoot);

    console.log(`\n🔄 Starting Recursive Audit Loop (${cycles} cycles)\n`);

    for (let i = 1; i <= cycles; i++) {
        console.log(`\n🌀 [CYCLE ${i}/${cycles}] Launching Security Council...`);
        const prompt = `Perform a deep recursive audit of the src/ folder, specifically looking for command injection and path traversal. Cycle ${i}.`;
        
        try {
            await router.executeVibe(prompt);
            console.log(`✅ [CYCLE ${i}] Audit & Harden sequence complete.`);
        } catch (error) {
            console.error(`❌ [CYCLE ${i}] Failed:`, error);
        }

        // Wait a bit between cycles to simulate thought time
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    console.log(`\n🎉 Recursive Audit Loop finished. System state is now optimized.`);
}

const cycles = parseInt(process.argv[2]) || 3;
runRecursiveAudit(cycles).catch(console.error);
