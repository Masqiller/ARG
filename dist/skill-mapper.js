"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.recommendSkills = recommendSkills;
exports.getSkillPath = getSkillPath;
exports.listAllSkills = listAllSkills;
exports.recommendSkillsForTask = recommendSkillsForTask;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
// ─────────────────────────────────────────────────────────────────────
// AWWESOME RUFLO GRAPHIFY — Intelligent Skill Mapper v2.0
// Uses weighted scoring, graph community analysis, and context budget
// awareness to select the minimum set of maximum-impact skills.
// ─────────────────────────────────────────────────────────────────────
const SKILLS_DIR = '/home/smit/Downloads/Fusion/antigravity-awesome-skills/skills';
const SUPERPOWERS_DIR = '/home/smit/Downloads/Fusion/external_plugins/superpowers/skills';
const CAVEMAN_DIR = '/home/smit/Downloads/Fusion/external_plugins/caveman/skills';
const SKILL_HEURISTICS = {
    // ── Languages (detected from file extensions in god nodes) ──
    '.ts': [{ skill: 'typescript-pro', weight: 9, category: 'language' }, { skill: 'typescript-expert', weight: 7, category: 'language' }],
    '.tsx': [{ skill: 'react-best-practices', weight: 9, category: 'framework' }, { skill: 'typescript-pro', weight: 7, category: 'language' }, { skill: 'react-patterns', weight: 6, category: 'framework' }],
    '.js': [{ skill: 'javascript-pro', weight: 9, category: 'language' }, { skill: 'modern-javascript-patterns', weight: 6, category: 'language' }],
    '.jsx': [{ skill: 'react-best-practices', weight: 9, category: 'framework' }, { skill: 'javascript-pro', weight: 7, category: 'language' }],
    '.py': [{ skill: 'python-pro', weight: 9, category: 'language' }, { skill: 'python-patterns', weight: 6, category: 'language' }],
    '.go': [{ skill: 'golang-pro', weight: 9, category: 'language' }, { skill: 'go-concurrency-patterns', weight: 5, category: 'language' }],
    '.rs': [{ skill: 'rust-pro', weight: 9, category: 'language' }, { skill: 'rust-async-patterns', weight: 5, category: 'language' }],
    '.rb': [{ skill: 'ruby-pro', weight: 9, category: 'language' }],
    '.java': [{ skill: 'java-pro', weight: 9, category: 'language' }],
    '.sh': [{ skill: 'bash-pro', weight: 8, category: 'language' }, { skill: 'bash-scripting', weight: 6, category: 'language' }],
    '.cs': [{ skill: 'csharp-pro', weight: 9, category: 'language' }],
    '.cpp': [{ skill: 'cpp-pro', weight: 9, category: 'language' }],
    '.php': [{ skill: 'php-pro', weight: 9, category: 'language' }],
    '.kt': [{ skill: 'kotlin-coroutines-expert', weight: 8, category: 'language' }],
    '.swift': [{ skill: 'swiftui-ui-patterns', weight: 7, category: 'framework' }],
    '.sol': [{ skill: 'solidity-security', weight: 9, category: 'language' }],
    '.ex': [{ skill: 'elixir-pro', weight: 9, category: 'language' }],
    '.hs': [{ skill: 'haskell-pro', weight: 9, category: 'language' }],
    '.scala': [{ skill: 'scala-pro', weight: 9, category: 'language' }],
    '.jl': [{ skill: 'julia-pro', weight: 9, category: 'language' }],
    '.tex': [{ skill: 'scientific-writing', weight: 8, category: 'quality' }],
    // ── Frameworks & Libraries ──
    'react': [{ skill: 'react-best-practices', weight: 9, category: 'framework' }, { skill: 'react-patterns', weight: 7, category: 'framework' }, { skill: 'react-component-performance', weight: 5, category: 'framework' }],
    'next': [{ skill: 'nextjs-best-practices', weight: 9, category: 'framework' }, { skill: 'nextjs-app-router-patterns', weight: 8, category: 'framework' }],
    'vue': [{ skill: 'frontend-developer', weight: 7, category: 'framework' }],
    'svelte': [{ skill: 'sveltekit', weight: 9, category: 'framework' }],
    'angular': [{ skill: 'angular-best-practices', weight: 9, category: 'framework' }],
    'django': [{ skill: 'django-pro', weight: 9, category: 'framework' }],
    'fastapi': [{ skill: 'fastapi-pro', weight: 9, category: 'framework' }, { skill: 'python-fastapi-development', weight: 7, category: 'framework' }],
    'flask': [{ skill: 'python-pro', weight: 7, category: 'framework' }],
    'express': [{ skill: 'nodejs-best-practices', weight: 8, category: 'framework' }],
    'nestjs': [{ skill: 'nestjs-expert', weight: 9, category: 'framework' }],
    'rails': [{ skill: 'ruby-pro', weight: 8, category: 'framework' }],
    'laravel': [{ skill: 'laravel-expert', weight: 9, category: 'framework' }],
    'flutter': [{ skill: 'flutter-expert', weight: 9, category: 'framework' }],
    'expo': [{ skill: 'expo-deployment', weight: 8, category: 'framework' }],
    'tailwind': [{ skill: 'tailwind-patterns', weight: 8, category: 'framework' }],
    'prisma': [{ skill: 'prisma-expert', weight: 9, category: 'database' }],
    'drizzle': [{ skill: 'drizzle-orm-expert', weight: 9, category: 'database' }],
    'graphql': [{ skill: 'graphql-architect', weight: 8, category: 'architecture' }],
    'trpc': [{ skill: 'trpc-fullstack', weight: 8, category: 'architecture' }],
    // ── Databases ──
    'postgres': [{ skill: 'postgres-best-practices', weight: 9, category: 'database' }, { skill: 'postgresql-optimization', weight: 7, category: 'database' }],
    'mysql': [{ skill: 'sql-pro', weight: 8, category: 'database' }],
    'mongo': [{ skill: 'nosql-expert', weight: 9, category: 'database' }],
    'redis': [{ skill: 'database-admin', weight: 6, category: 'database' }],
    'supabase': [{ skill: 'nextjs-supabase-auth', weight: 8, category: 'database' }],
    'firebase': [{ skill: 'firebase', weight: 9, category: 'database' }],
    'snowflake': [{ skill: 'snowflake-development', weight: 9, category: 'database' }],
    // ── Infrastructure & DevOps ──
    'docker': [{ skill: 'docker-expert', weight: 9, category: 'infra' }],
    'kubernetes': [{ skill: 'kubernetes-architect', weight: 9, category: 'infra' }],
    'terraform': [{ skill: 'terraform-skill', weight: 9, category: 'infra' }],
    'aws': [{ skill: 'aws-skills', weight: 8, category: 'infra' }],
    'azure': [{ skill: 'azure-functions', weight: 7, category: 'infra' }],
    'gcp': [{ skill: 'gcp-cloud-run', weight: 7, category: 'infra' }],
    'vercel': [{ skill: 'vercel-deployment', weight: 8, category: 'infra' }],
    'github': [{ skill: 'github', weight: 7, category: 'infra' }, { skill: 'github-actions-templates', weight: 6, category: 'infra' }],
    'cicd': [{ skill: 'github-actions-templates', weight: 7, category: 'infra' }],
    // ── Architecture patterns (detected from community structure) ──
    'microservice': [{ skill: 'microservices-patterns', weight: 8, category: 'architecture' }],
    'event': [{ skill: 'event-sourcing-architect', weight: 7, category: 'architecture' }],
    'saga': [{ skill: 'saga-orchestration', weight: 7, category: 'architecture' }],
    'cqrs': [{ skill: 'cqrs-implementation', weight: 7, category: 'architecture' }],
    'ddd': [{ skill: 'domain-driven-design', weight: 7, category: 'architecture' }],
    'api': [{ skill: 'api-patterns', weight: 6, category: 'architecture' }],
    'webhook': [{ skill: 'api-patterns', weight: 5, category: 'architecture' }],
    'council': [{ skill: 'llm-council', weight: 10, category: 'architecture' }],
    'debate': [{ skill: 'llm-council', weight: 9, category: 'architecture' }],
    'review': [{ skill: 'llm-council', weight: 8, category: 'architecture' }],
};
// ── Architectural Meta-Skills (always loaded based on graph complexity) ──
const META_SKILLS = {
    'subagent': { skill: 'subagent-driven-development', minNodes: 0, description: 'Native Swarm task partitioning' },
    'auditor': { skill: 'vibe-code-auditor', minNodes: 10, description: 'Structural safety net for AI-generated code' },
    'debugging': { skill: 'systematic-debugging', minNodes: 0, description: 'Auto-recovery mechanism for execution failures' },
    'memory': { skill: 'context-management-context-save', minNodes: 30, description: 'Persistent memory state serialization' },
    'refactor': { skill: 'orchestrate-batch-refactor', minNodes: 50, description: 'Atomic dependency-aware batch changes' },
};
// ── Context Budget Constants ──
// Informed by context-optimization skill: keep total injected skill
// content under 30% of a typical 200k context window (~60k tokens).
// Average SKILL.md is ~300 lines × 4 chars/token ≈ 1200 tokens.
// Budget: 60000 / 1200 ≈ 50 skills max, but we cap at 8 for focus.
const MAX_SKILLS = 8;
const MAX_PER_CATEGORY = 3; // Prevent any single category from dominating
/**
 * Extracts keywords from Graphify's GRAPH_REPORT.md (God Nodes + Communities)
 */
function extractGraphKeywords(graphifyDir) {
    const reportPath = path.join(graphifyDir, 'GRAPH_REPORT.md');
    const graphPath = path.join(graphifyDir, 'graph.json');
    const keywords = new Set();
    let nodeCount = 0;
    const communities = [];
    // ── Parse GRAPH_REPORT.md for God Nodes + Communities ──
    if (fs.existsSync(reportPath)) {
        const content = fs.readFileSync(reportPath, 'utf-8');
        // Extract God Nodes section
        const godNodesMatch = content.match(/## God Nodes[\s\S]*?(?=##|$)/i);
        if (godNodesMatch) {
            const lines = godNodesMatch[0].split('\n');
            for (const line of lines) {
                extractKeywordsFromLine(line, keywords);
            }
        }
        // Extract Community sections (Graphify generates these)
        const communityMatches = content.matchAll(/## Community\s*(\d+|:?\s*\w+)[\s\S]*?(?=## Community|## |$)/gi);
        for (const match of communityMatches) {
            communities.push(match[0].substring(0, 200)); // First 200 chars as summary
            const lines = match[0].split('\n');
            for (const line of lines) {
                extractKeywordsFromLine(line, keywords);
            }
        }
    }
    // ── Parse graph.json for node count and additional signals ──
    if (fs.existsSync(graphPath)) {
        try {
            const graph = JSON.parse(fs.readFileSync(graphPath, 'utf-8'));
            const nodes = graph.nodes || [];
            nodeCount = nodes.length;
            // Extract file extensions from node IDs (files in the graph)
            for (const node of nodes) {
                const id = node.id || node.name || '';
                const extMatch = id.match(/\.([a-zA-Z0-9]+)$/);
                if (extMatch) {
                    keywords.add(`.${extMatch[1].toLowerCase()}`);
                }
            }
        }
        catch { /* graph.json may be malformed */ }
    }
    return { keywords: Array.from(keywords), nodeCount, communities };
}
/**
 * Extracts technology keywords from a single line of text
 */
function extractKeywordsFromLine(line, keywords) {
    if (!line.trim())
        return;
    const lowerLine = line.toLowerCase();
    // Check all known heuristic keys
    for (const key of Object.keys(SKILL_HEURISTICS)) {
        if (key.startsWith('.')) {
            // Extension check
            if (lowerLine.includes(key))
                keywords.add(key);
        }
        else {
            // Framework/tech keyword check (word boundary)
            if (lowerLine.match(new RegExp(`\\b${key}\\b`, 'i'))) {
                keywords.add(key);
            }
        }
    }
    // Detect file extensions not in our heuristics (for future mapping)
    const extMatches = line.matchAll(/\.([a-zA-Z0-9]{1,6})\b/g);
    for (const m of extMatches) {
        keywords.add(`.${m[1].toLowerCase()}`);
    }
}
/**
 * Score and rank skills using weighted heuristics with category budgets.
 * This implements the "weighted voting" pattern from multi-agent-patterns.
 */
function scoreSkills(keywords, nodeCount) {
    const skillScores = new Map();
    // ── Score from keyword matches ──
    for (const keyword of keywords) {
        const entries = SKILL_HEURISTICS[keyword];
        if (!entries)
            continue;
        for (const entry of entries) {
            const existing = skillScores.get(entry.skill);
            if (existing) {
                existing.score += entry.weight;
                existing.reason += `, ${keyword}`;
            }
            else {
                skillScores.set(entry.skill, {
                    skill: entry.skill,
                    score: entry.weight,
                    category: entry.category,
                    reason: `matched: ${keyword}`
                });
            }
        }
    }
    // ── Add meta-skills based on graph complexity ──
    for (const [key, meta] of Object.entries(META_SKILLS)) {
        if (nodeCount >= meta.minNodes) {
            const existing = skillScores.get(meta.skill);
            if (existing) {
                existing.score += 5; // Boost if already matched
            }
            else {
                skillScores.set(meta.skill, {
                    skill: meta.skill,
                    score: 5,
                    category: 'architecture',
                    reason: `meta: ${meta.description} (nodes=${nodeCount})`
                });
            }
        }
    }
    return Array.from(skillScores.values());
}
/**
 * Apply category budget constraints to prevent any single domain
 * from consuming the entire context budget.
 * Informed by context-optimization: "optimize for quality over quantity."
 */
function applyBudgetConstraints(scored) {
    // Sort by score descending
    scored.sort((a, b) => b.score - a.score);
    const selected = [];
    const categoryCount = {};
    for (const skill of scored) {
        if (selected.length >= MAX_SKILLS)
            break;
        const catCount = categoryCount[skill.category] || 0;
        if (catCount >= MAX_PER_CATEGORY)
            continue; // Category budget exceeded
        // Verify the skill actually exists in the library
        if (getSkillPath(skill.skill)) {
            selected.push(skill);
            categoryCount[skill.category] = catCount + 1;
        }
    }
    return selected;
}
// ═══════════════════════════════════════════════════════════════════
// Public API
// ═══════════════════════════════════════════════════════════════════
/**
 * Full analysis pipeline: extract → score → budget-constrain → return
 */
function recommendSkills(graphifyDir) {
    const { keywords, nodeCount } = extractGraphKeywords(graphifyDir);
    const scored = scoreSkills(keywords, nodeCount);
    return applyBudgetConstraints(scored);
}
/**
 * Returns the absolute path to a skill's SKILL.md
 */
function getSkillPath(skillName) {
    const skillMdPath = path.join(SKILLS_DIR, skillName, 'SKILL.md');
    if (fs.existsSync(skillMdPath))
        return skillMdPath;
    const superpowersPath = path.join(SUPERPOWERS_DIR, skillName, 'SKILL.md');
    if (fs.existsSync(superpowersPath))
        return superpowersPath;
    const cavemanPath = path.join(CAVEMAN_DIR, skillName, 'SKILL.md');
    return fs.existsSync(cavemanPath) ? cavemanPath : null;
}
/**
 * Lists ALL available skills in the library (for agent browsing)
 */
function listAllSkills() {
    const skills = fs.existsSync(SKILLS_DIR) ? fs.readdirSync(SKILLS_DIR) : [];
    const superpowers = fs.existsSync(SUPERPOWERS_DIR) ? fs.readdirSync(SUPERPOWERS_DIR) : [];
    const caveman = fs.existsSync(CAVEMAN_DIR) ? fs.readdirSync(CAVEMAN_DIR) : [];
    return [...skills, ...superpowers, ...caveman].filter(name => {
        const p1 = path.join(SKILLS_DIR, name, 'SKILL.md');
        const p2 = path.join(SUPERPOWERS_DIR, name, 'SKILL.md');
        const p3 = path.join(CAVEMAN_DIR, name, 'SKILL.md');
        return fs.existsSync(p1) || fs.existsSync(p2) || fs.existsSync(p3);
    });
}
/**
 * Task-aware skill lookup: given a natural-language task description,
 * boost skills whose names/keywords appear in the task text.
 * This enables the "Primary + Support" orchestration pattern.
 */
function recommendSkillsForTask(graphifyDir, taskDescription) {
    const { keywords, nodeCount } = extractGraphKeywords(graphifyDir);
    // ALSO extract keywords from the task description itself!
    const taskKeywords = new Set();
    extractKeywordsFromLine(taskDescription, taskKeywords);
    for (const kw of taskKeywords) {
        keywords.push(kw);
    }
    const scored = scoreSkills(keywords, nodeCount);
    // Boost skills whose names appear in the task description
    const lowerTask = taskDescription.toLowerCase();
    for (const entry of scored) {
        const skillWords = entry.skill.split('-');
        for (const word of skillWords) {
            if (word.length > 2 && lowerTask.includes(word)) {
                entry.score += 10;
                entry.reason += `, task-match: "${word}"`;
            }
        }
    }
    return applyBudgetConstraints(scored);
}
