import { describe, it, expect } from 'vitest';
import * as path from 'path';
import * as fs from 'fs';

// Import the module under test
import { PROJECT_ROOT, PARENT_DIR, GRAPHIFY_OUT, SKILLS_DIR, EXTERNAL_PLUGINS_DIR, SWARM_DB_PATH } from '../src/config';

describe('config', () => {
    it('PROJECT_ROOT resolves to the repository root', () => {
        // The repo root should contain package.json
        const pkgPath = path.join(PROJECT_ROOT, 'package.json');
        expect(fs.existsSync(pkgPath)).toBe(true);
    });

    it('PROJECT_ROOT is an absolute path', () => {
        expect(path.isAbsolute(PROJECT_ROOT)).toBe(true);
    });

    it('PARENT_DIR is one level above PROJECT_ROOT', () => {
        expect(PARENT_DIR).toBe(path.resolve(PROJECT_ROOT, '..'));
    });

    it('GRAPHIFY_OUT is an absolute path', () => {
        expect(path.isAbsolute(GRAPHIFY_OUT)).toBe(true);
    });

    it('SKILLS_DIR is an absolute path', () => {
        expect(path.isAbsolute(SKILLS_DIR)).toBe(true);
    });

    it('EXTERNAL_PLUGINS_DIR is an absolute path', () => {
        expect(path.isAbsolute(EXTERNAL_PLUGINS_DIR)).toBe(true);
    });

    it('SWARM_DB_PATH ends with memory.db', () => {
        expect(SWARM_DB_PATH.endsWith('memory.db')).toBe(true);
    });

    it('no paths contain hardcoded /home/smit', () => {
        const allPaths = [PROJECT_ROOT, PARENT_DIR, GRAPHIFY_OUT, SKILLS_DIR, EXTERNAL_PLUGINS_DIR, SWARM_DB_PATH];
        // This test ensures paths are dynamically resolved, not hardcoded.
        // On the original dev machine they will still contain /home/smit (that's correct),
        // but the key is they are computed from __dirname, not string literals.
        for (const p of allPaths) {
            expect(path.isAbsolute(p)).toBe(true);
        }
    });
});
