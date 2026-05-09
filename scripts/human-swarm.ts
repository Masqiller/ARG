import * as fs from 'fs';
import * as path from 'path';
import { VibeRouter } from '../src/vibe-router';

const projectRoot = path.join(__dirname, '../');
const graphifyOut = path.join(projectRoot, 'graphify-out');
const router = new VibeRouter(graphifyOut, projectRoot);

/**
 * 🌊 [HUMANIZATION SWARM]
 * Iteratively hunts for "AI-ish" text and passes it to the Humanization Council.
 */
async function runHumanSwarm() {
    console.log("🌊 [HUMAN SWARM] Initializing Stealth Rewrite Loop...");
    
    // Target files for humanization (docs, readmes, markdown)
    const targets = [
        'README.md',
        'Example.md',
        'docs/ARCH.md'
    ].map(f => path.join(projectRoot, f)).filter(f => fs.existsSync(f));

    for (const target of targets) {
        console.log(`\n📄 [TARGET] Analyzing ${path.basename(target)}...`);
        const content = fs.readFileSync(target, 'utf-8');
        
        // Check for "AI markers" (Heuristic: high density of formal transitions)
        const markers = ["Additionally", "Furthermore", "In conclusion", "Moreover", "Notably", "Paradigm"];
        const found = markers.filter(m => content.includes(m));
        
        if (found.length > 0) {
            console.log(`🤖 [DETECTION] Found ${found.length} AI-style markers. Calling the Council...`);
            
            // Execute the humanization vibe
            const result = await (router as any).plugins.runPlugin('humanization-council', { text: content });
            
            if (result.status === 'success' && result.humanized) {
                console.log(`✅ [HUMANIZED] Applying stealth rewrite to ${path.basename(target)}...`);
                fs.writeFileSync(target, result.humanized);
                console.log(`📝 [COUNCIL DECISION]: ${result.decision}`);
            }
        } else {
            console.log(`✅ [HUMANIZED] ${path.basename(target)} already passes the local vibe-check.`);
        }
    }

    console.log("\n🌊 [HUMAN SWARM] Cycle complete. Stealth-mode preserved.");
}

runHumanSwarm().catch(console.error);
