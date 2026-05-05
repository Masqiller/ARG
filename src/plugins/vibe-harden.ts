import { ARGPlugin } from './plugin-manager';
import { ARGBrain } from '../arg-brain';
import * as fs from 'fs';
import * as path from 'path';

/**
 * 🛡️ [VIBE HARDEN PLUGIN] v1.0
 * Synthesizes council findings into hardened code proposals.
 */
export class VibeHardenPlugin implements ARGPlugin {
    name = "vibe-harden";
    description = "Proposes hardened code patches based on security council findings.";

    constructor(private brain: ARGBrain) {}

    async execute(context: any): Promise<any> {
        const { findings } = context;
        if (!findings || findings.length === 0) {
            return { status: "success", message: "No hotspots found to harden." };
        }

        console.log(`🛡️ [VIBE HARDEN] Generating proposals for ${findings.length} hotspots...`);
        
        const proposals = findings.map((f: string) => {
            if (f.includes('execSync')) {
                return {
                    finding: f,
                    proposal: "Replace execSync with spawnSync and pass arguments as an array to prevent command injection.",
                    severity: "CRITICAL"
                };
            }
            if (f.includes('readFileSync')) {
                return {
                    finding: f,
                    proposal: "Ensure the path is resolved and validated against a whitelist of allowed directories.",
                    severity: "MEDIUM"
                };
            }
            return {
                finding: f,
                proposal: "Review usage and apply least-privilege principles.",
                severity: "LOW"
            };
        });

        return {
            status: "success",
            action: "proposals_generated",
            proposals
        };
    }
}
