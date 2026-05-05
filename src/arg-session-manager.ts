import * as fs from 'fs';
import * as path from 'path';

export interface MemoryBlock {
    timestamp: number;
    key: string;
    content: string;
}

export class ARGSessionManager {
    private sessionsDir: string;
    private activeSessionId: string | null = null;
    private sessionMemory: MemoryBlock[] = [];

    constructor() {
        // Use user's home directory to persist across IDE runs
        const homeDir = process.env.HOME || process.env.USERPROFILE || '';
        this.sessionsDir = path.join(homeDir, '.arg_sessions');
        if (!fs.existsSync(this.sessionsDir)) {
            fs.mkdirSync(this.sessionsDir, { recursive: true });
        }
    }

    public initSession(sessionId: string): string {
        this.activeSessionId = sessionId;
        const sessionFile = path.join(this.sessionsDir, `${sessionId}.json`);
        
        if (fs.existsSync(sessionFile)) {
            this.sessionMemory = JSON.parse(fs.readFileSync(sessionFile, 'utf-8'));
            return `Session '${sessionId}' resumed. Loaded ${this.sessionMemory.length} memory blocks.`;
        } else {
            this.sessionMemory = [];
            this.saveSession();
            return `New session '${sessionId}' initialized.`;
        }
    }

    public getActiveSessionId(): string | null {
        return this.activeSessionId;
    }

    public saveMemory(key: string, content: string): string {
        if (!this.activeSessionId) {
            throw new Error("No active session. Call arg_session_init first.");
        }
        
        // Overwrite if key exists, or append new block
        const existingIdx = this.sessionMemory.findIndex(m => m.key === key);
        if (existingIdx !== -1) {
            this.sessionMemory[existingIdx].content = content;
            this.sessionMemory[existingIdx].timestamp = Date.now();
        } else {
            this.sessionMemory.push({
                timestamp: Date.now(),
                key,
                content
            });
        }
        
        this.saveSession();
        return `Memory saved under key '${key}'.`;
    }

    public getAllMemory(): MemoryBlock[] {
        return this.sessionMemory;
    }

    private saveSession() {
        if (this.activeSessionId) {
            const sessionFile = path.join(this.sessionsDir, `${this.activeSessionId}.json`);
            fs.writeFileSync(sessionFile, JSON.stringify(this.sessionMemory, null, 2));
        }
    }
}
