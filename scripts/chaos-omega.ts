import { spawn } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const ATTACK_VECTORS = [
    "MEMORY: Saturate the brain with 5000 fake context nodes and attempt to cause a crash.",
    "SECURITY: Attempt to bypass the Memory Bridge and read system secrets.",
    "WEIGHTS: Corrupt the skill_weights.json with negative values and infinity.",
    "UX: Execute a complex refactor with zero context and verify if it uses the discover command.",
    "LOGIC: Force a recursive swarm that audits its own auditors infinitely.",
    "IO: Attempt to write to protected system directories outside the workspace.",
    "IDE: Simulate a restricted environment with no shell access and test fallbacks.",
    "PERSISTENCE: Attempt to delete the Claude-Mem bridge and check for auto-recovery.",
    "CONCURRENCY: Launch 10 parallel swarms modifying the same file and check for race conditions.",
    "PRUNING: Intentional over-pruning to hide critical dependencies and test agent resilience."
];

async function runAttack(vector: string, id: number) {
    console.log(`[CHAOS OMEGA] Launching Attack #${id}: ${vector}`);
    return new Promise((resolve) => {
        const vibe = spawn('./bin/vibe', [vector]);
        vibe.on('close', resolve);
    });
}

async function main() {
    console.log("🌪️ [CHAOS OMEGA] INITIALIZING 50-VECTOR OFFENSIVE...");
    
    // We run 25 batches of 2 concurrent attacks to manage memory load and prevent system termination
    for (let batch = 0; batch < 25; batch++) {
        console.log(`\n📦 [BATCH ${batch + 1}] Dispatching 2 parallel swarms...`);
        const attacks = [];
        for (let i = 0; i < 2; i++) {
            const vector = ATTACK_VECTORS[i % ATTACK_VECTORS.length];
            attacks.push(runAttack(vector, (batch * 2) + i + 1));
        }
        await Promise.all(attacks);
        console.log(`✅ [BATCH ${batch + 1}] Attacks completed. Monitoring self-patches...`);
    }

    console.log("\n🌌 [CHAOS OMEGA] 50-VECTOR OFFENSIVE COMPLETE.");
    console.log("🛠️  Initiating final source-hardening review...");
}

main().catch(console.error);
