import { ARGPlugin } from './plugin-manager';
import { ARGBrain } from '../arg-brain';
import { spawnSync } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';

/**
 * 🔗 [CLAUDE-MEM SYNC PLUGIN] v1.0
 * Synchronizes ARG Workforce state to Long-Term Memory.
 */
export class ClaudeMemSyncPlugin implements ARGPlugin {
    name = "claude-mem-sync";
    description = "Synchronizes current session context to claude-mem for long-term persistence.";

    constructor(private brain: ARGBrain, private projectRoot: string) {}

    async execute(context: any): Promise<any> {
        const { task } = context;
        console.log(`\n🔗 [MEMORY SYNC] Starting state synchronization to Long-Term Memory...`);

        const memCliPath = path.join(this.projectRoot, 'vendor/claude-mem/dist/npx-cli/index.js');
        
        // 1. Gather all state from ARGBrain
        // We simulate gathering relevant findings and decisions from the current session
        const sessionState = {
            task,
            timestamp: new Date().toISOString(),
            findings: context.findings || [],
            decisions: context.decisions || []
        };

        const stateString = JSON.stringify(sessionState);

        // 2. Write to Transcript for Claude-Mem observation
        const logDir = path.join(this.projectRoot, 'logs/transcripts');
        if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });
        
        const transcriptPath = path.join(logDir, `swarm_transcript_${Date.now()}.md`);
        const transcript = `
# ARG Workforce Session Transcript
**Task**: ${task}
**Timestamp**: ${new Date().toISOString()}

## Swarm Observations
${(context.findings || []).map((f: string) => `- ${f}`).join('\n')}

## Decisions & Consensus
${(context.decisions || []).join('\n')}

---
*Persisted for Claude-Mem semantic indexing.*
`;

        fs.writeFileSync(transcriptPath, transcript);
        console.log(`✅ [MEMORY SYNC] Session transcript persisted to ${path.relative(this.projectRoot, transcriptPath)}.`);
        
        // Optional: Trigger a background 'search' to verify connectivity
        return { status: "success", message: "Transcript persisted." };
    }
}
