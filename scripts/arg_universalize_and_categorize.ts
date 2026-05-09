import fs from 'fs';
import path from 'path';

/**
 * 🌪️ ARG SOVEREIGN UNIVERSALIZER & CATEGORIZER
 * Task: Refactor 5000+ skills to be IDE-agnostic and categorize them properly.
 */
class ARGUniversalizer {
    private listPath = '/home/smit/Downloads/Fusion/all_skills_list.txt';
    private outputDir = '/home/smit/Downloads/Fusion/graphify-out/';
    private outputPath = path.join(this.outputDir, 'properly_categorized_skills.md');
    
    private hiddenSkills = [
        '/home/smit/Downloads/Fusion/graphify/graphify/skill.md',
        '/home/smit/Downloads/Fusion/awwesome-ruflo-graphify/vendor/graphify/graphify/skill.md',
        '/home/smit/Downloads/Fusion/awwesome-ruflo-graphify/vendor/external_plugins/caveman/caveman.skill',
        '/home/smit/Downloads/Fusion/awwesome-ruflo-graphify/external_plugins/frontend_raw/ui-ux-pro-max-skill/skill.json',
        '/home/smit/Downloads/Fusion/external_plugins/caveman/caveman.skill',
        '/home/smit/Downloads/Fusion/ruflo/v3/@claude-flow/cli/.claude/skills/worker-integration/skill.md',
        '/home/smit/Downloads/Fusion/ruflo/v3/@claude-flow/cli/.claude/skills/worker-benchmarks/skill.md',
        '/home/smit/Downloads/Fusion/ruflo/.agents/skills/worker-integration/skill.md',
        '/home/smit/Downloads/Fusion/ruflo/.agents/skills/worker-benchmarks/skill.md'
    ];

    // Expanded High-Fidelity Taxonomy
    private categories: Record<string, string[]> = {
        "Frontend Raw (Awwesome)": ["frontend_raw", "impeccable", "taste-skill", "huashu-design"],
        "Ruflo Core & Agents": ["ruflo", "ruvocal", "ruvllm", "ruvector"],
        "Superpowers": ["superpowers"],
        "AI & Machine Learning": ["ai", "ml", "agent", "llm", "rag", "hugging-face", "tensor", "prompt", "embeddings", "karpathy", "lecun", "transformer", "whisper", "vision"],
        "Security & Pentesting": ["security", "attack", "pentest", "vulnerability", "hacking", "audit", "auth", "aidefence", "creds", "omega"],
        "Automation & Workflow": ["automation", "integration", "workflow", "n8n", "zapier", "make", "cron", "caveman"],
        "Cloud & DevOps": ["aws", "azure", "cloud", "docker", "kubernetes", "terraform", "ci", "cd", "mise", "render"],
        "Observability & Monitoring": ["observability", "monitoring", "prometheus", "grafana", "slo", "postmortem", "trace", "metric"],
        "QA & Testing": ["test", "qa", "debug", "checklist", "tdd", "playwright", "fuzzing"],
        "Mobile Development": ["mobile", "ios", "android", "expo", "react-native"],
        "Frontend & UI/UX": ["ui", "design", "react", "angular", "vue", "frontend", "css", "html", "high-end", "brutalist", "canvas", "motion", "framer"],
        "Backend & API": ["backend", "api", "node", "python", "go", "rust", "database", "sql", "graphql", "wasm", "neon", "prisma", "fastapi"],
        "Blockchain & Web3": ["web3", "nft", "blockchain", "solidity", "ethereum", "erc"],
        "Product & Business": ["product", "business", "market", "seo", "growth", "strategy", "trader", "founder", "copywriting", "competitor"],
        "Frameworks & Patterns": ["patterns", "expert", "pro", "guide", "setup", "sparc", "adr", "ddd", "architect"],
        "General / Misc": []
    };

    public async execute() {
        console.log("🌪️ ARG UNIVERSALIZER & CATEGORIZER ONLINE.");

        let lines: string[] = [];
        if (fs.existsSync(this.listPath)) {
            const fileContent = fs.readFileSync(this.listPath, 'utf-8');
            lines = fileContent.split('\n').filter(line => line.trim() !== '');
            lines = lines.map(line => path.resolve('/home/smit/Downloads/Fusion', line));
        }
        lines = [...lines, ...this.hiddenSkills];

        const result: Record<string, string[]> = {};
        Object.keys(this.categories).forEach(cat => result[cat] = []);

        let refactoredCount = 0;

        for (const filePath of lines) {
            try {
                if (!fs.existsSync(filePath)) continue;

                let content = fs.readFileSync(filePath, 'utf-8');
                let modified = false;

                // Task 1: Universalize (only if not a binary or large file)
                if (content.length < 1000000) {
                    // Replace restrictive tools lists
                    const newContent = content.replace(/tools:\s*\[([^\]]*cursor[^\]]*)\]/gi, (match, p1) => {
                        modified = true;
                        return `tools: [universal, antigravity, ${p1}]`;
                    }).replace(/###\s*Cursor/gi, (match) => {
                        modified = true;
                        return `### IDE / Assistant (Cursor/Windsurf/Antigravity)`;
                    });

                    if (modified) {
                        fs.writeFileSync(filePath, newContent);
                        refactoredCount++;
                    }
                }

                // Task 2: Categorize properly
                const skillName = path.basename(path.dirname(filePath));
                const fullPath = filePath.toLowerCase();
                let categorized = false;

                // Check specialized paths first
                if (fullPath.includes('frontend_raw')) {
                    result["Frontend Raw (Awwesome)"].push(`${skillName} (${filePath})`);
                    categorized = true;
                } else if (fullPath.includes('ruflo')) {
                    result["Ruflo Core & Agents"].push(`${skillName} (${filePath})`);
                    categorized = true;
                }

                if (!categorized) {
                    for (const [category, markers] of Object.entries(this.categories)) {
                        if (category === "General / Misc") continue;
                        
                        const matchesMarker = markers.some(marker => 
                            skillName.toLowerCase().includes(marker) || fullPath.includes(marker)
                        );

                        if (matchesMarker) {
                            result[category].push(`${skillName} (${filePath})`);
                            categorized = true;
                            break;
                        }
                    }
                }

                if (!categorized) {
                    result["General / Misc"].push(`${skillName} (${filePath})`);
                }

            } catch (e) {
                // Ignore errors
            }
        }

        console.log(`Refactored ${refactoredCount} files to be universal.`);
        this.generateMarkdownReport(result);
    }

    private generateMarkdownReport(result: Record<string, string[]>) {
        let md = `# 🌪️ ARG Sovereign: High-Fidelity Skill Taxonomy\n\n`;
        md += `Total Skills Processed: ${Object.values(result).reduce((a, b) => a + b.length, 0)}\n\n`;

        for (const [category, skills] of Object.entries(result)) {
            md += `## 📁 ${category} (${skills.length})\n`;
            skills.forEach(skill => {
                md += `- ${skill}\n`;
            });
            md += `\n`;
        }

        fs.mkdirSync(this.outputDir, { recursive: true });
        fs.writeFileSync(this.outputPath, md);
        console.log(`Ledger written to: ${this.outputPath}`);
    }
}

const universalizer = new ARGUniversalizer();
universalizer.execute().catch(console.error);
