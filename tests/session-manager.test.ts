import { describe, it, expect } from 'vitest';
import { ARGSessionManager } from '../src/arg-session-manager';
import * as fs from 'fs';
import * as path from 'path';

describe('ARGSessionManager', () => {
    const testSessionId = `test-session-${Date.now()}`;

    it('initializes a new session', () => {
        const manager = new ARGSessionManager();
        const result = manager.initSession(testSessionId);

        expect(result).toContain(testSessionId);
        expect(result).toContain('initialized');
    });

    it('saves memory to an active session', () => {
        const manager = new ARGSessionManager();
        manager.initSession(testSessionId);

        const result = manager.saveMemory('test-key', 'test-value');
        expect(result).toContain('test-key');
    });

    it('retrieves all saved memory', () => {
        const manager = new ARGSessionManager();
        manager.initSession(testSessionId);
        manager.saveMemory('key-1', 'value-1');
        manager.saveMemory('key-2', 'value-2');

        const all = manager.getAllMemory();
        expect(all.length).toBeGreaterThanOrEqual(2);
        expect(all.some((m) => m.key === 'key-1')).toBe(true);
        expect(all.some((m) => m.key === 'key-2')).toBe(true);
    });

    it('overwrites memory with the same key', () => {
        const manager = new ARGSessionManager();
        manager.initSession(testSessionId);
        manager.saveMemory('overwrite-key', 'original');
        manager.saveMemory('overwrite-key', 'updated');

        const all = manager.getAllMemory();
        const entry = all.find((m) => m.key === 'overwrite-key');
        expect(entry?.content).toBe('updated');
    });

    it('throws when saving without an active session', () => {
        const manager = new ARGSessionManager();
        // No initSession called
        expect(() => manager.saveMemory('k', 'v')).toThrow('No active session');
    });

    it('resumes an existing session', () => {
        // First manager creates a session
        const m1 = new ARGSessionManager();
        m1.initSession(testSessionId);
        m1.saveMemory('persist-key', 'persist-value');

        // Second manager resumes it
        const m2 = new ARGSessionManager();
        const result = m2.initSession(testSessionId);
        expect(result).toContain('resumed');

        const all = m2.getAllMemory();
        expect(all.some((m) => m.key === 'persist-key')).toBe(true);
    });

    // Cleanup
    it('cleanup test session file', () => {
        const homeDir = process.env.HOME || process.env.USERPROFILE || '';
        const sessionFile = path.join(homeDir, '.arg_sessions', `${testSessionId}.json`);
        if (fs.existsSync(sessionFile)) {
            fs.unlinkSync(sessionFile);
        }
        expect(true).toBe(true);
    });
});
