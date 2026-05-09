import * as path from 'path';
import * as fs from 'fs';

// ═══════════════════════════════════════════════════════════════════
// ARG — Central Path Configuration
//
// ALL paths in the project resolve from here. No hardcoded absolute
// paths anywhere else. When cloned to a new machine, everything
// resolves automatically from the repository root.
// ═══════════════════════════════════════════════════════════════════

/** Absolute path to the repository root (one level above src/) */
export const PROJECT_ROOT = path.resolve(__dirname, '..');

/** Absolute path to the parent directory containing the repo */
export const PARENT_DIR = path.resolve(PROJECT_ROOT, '..');

// ── Graphify Output ─────────────────────────────────────────────
function resolveGraphifyOut(): string {
    const local = path.join(PROJECT_ROOT, 'graphify-out');
    if (fs.existsSync(local)) return local;
    const parent = path.join(PARENT_DIR, 'graphify-out');
    if (fs.existsSync(parent)) return parent;
    return local; // default even if missing
}
export const GRAPHIFY_OUT = resolveGraphifyOut();

// ── Skills Directories ──────────────────────────────────────────
// Resolve skills from vendor/ inside the repo, or fall back to
// sibling directories in the parent folder.
function resolveDir(candidates: string[]): string {
    for (const candidate of candidates) {
        if (fs.existsSync(candidate)) return candidate;
    }
    return candidates[0]; // default to first even if missing
}

export const SKILLS_DIR = resolveDir([
    path.join(PARENT_DIR, 'antigravity-awesome-skills', 'skills'),
    path.join(PROJECT_ROOT, 'vendor', 'skills'),
]);

export const SUPERPOWERS_DIR = resolveDir([
    path.join(PROJECT_ROOT, 'vendor', 'external_plugins', 'superpowers', 'skills'),
    path.join(PARENT_DIR, 'external_plugins', 'superpowers', 'skills'),
]);

export const CAVEMAN_DIR = resolveDir([
    path.join(PROJECT_ROOT, 'vendor', 'external_plugins', 'caveman', 'skills'),
    path.join(PARENT_DIR, 'external_plugins', 'caveman', 'skills'),
]);

export const EXTERNAL_PLUGINS_DIR = resolveDir([
    path.join(PROJECT_ROOT, 'external_plugins'),
    path.join(PARENT_DIR, 'external_plugins'),
]);

// ── Database & Session ──────────────────────────────────────────
export const SWARM_DB_PATH = path.join(PROJECT_ROOT, '.swarm', 'memory.db');
export const UNIVERSAL_SKILLS_JSON = path.join(GRAPHIFY_OUT, 'universal_skills.json');
export const UNIVERSAL_SKILLS_VECTORS_JSON = resolveDir([
    path.join(PROJECT_ROOT, 'graphify-out', 'universal_skills_with_vectors.json'),
    path.join(PARENT_DIR, 'graphify-out', 'universal_skills_with_vectors.json'),
]);
