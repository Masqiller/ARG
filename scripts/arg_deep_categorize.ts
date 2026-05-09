import fs from 'fs';
import path from 'path';

/**
 * 🌪️ ARG SOVEREIGN DEEP CATEGORIZER v2.0
 * Task: Categorize 5000+ skills from the deep scan list.
 */
class ARGDeepCategorizer {
    private listPath = '/home/smit/Downloads/Fusion/all_skills_list.txt';
    private outputDir = '/home/smit/Downloads/Fusion/graphify-out/';
    private outputPath = path.join(this.outputDir, 'deep_categorized_skills.md');

    private categories: Record<string, string[]> = {
        "Frontend Raw (Awwesome)": ["frontend_raw", "impeccable", "taste-skill", "huashu-design"],
        "Ruflo Core & Agents": ["ruflo", "ruvocal", "ruvllm", "ruvector"],
        "Superpowers": ["superpowers"],
        "AI & Machine Learning": ["ai", "ml", "agent", "llm", "rag", "hugging-face", "tensor", "prompt", "embeddings"],
        "Security & Pentesting": ["security", "attack", "pentest", "vulnerability", "hacking", "audit", "auth", "aidefence"],
        "Automation & Workflow": ["automation", "integration", "workflow", "n8n", "zapier", "make", "cron"],
        "Cloud & DevOps": ["aws", "azure", "cloud", "docker", "kubernetes", "terraform", "ci", "cd"],
        "Frontend & UI/UX": ["ui", "design", "react", "angular", "vue", "frontend", "css", "html", "high-end", "brutalist"],
        "Backend & API": ["backend", "api", "node", "python", "go", "rust", "database", "sql", "graphql", "wasm"],
        "Data & Analytics": ["data", "analytics", "stats", "chart", "graph", "metric"],
        "Product & Business": ["product", "business", "market", "seo", "growth", "strategy", "trader"],
        "Frameworks & Patterns": ["patterns", "expert", "pro", "guide", "setup", "sparc", "adr", "ddd"],
        "General / Misc": []
    };

    public async execute() {
        console.log("🌪️ ARG DEEP CATEGORIZATION ENGINE ONLINE.");
        console.log("Mind: ARG System [TIER 0]");
        console.log("Task: Classifying 5000+ Skills.");

        if (!fs.existsSync(this.listPath)) {
            console.error(`Error: List file not found at ${this.listPath}`);
            return;
        }

        const fileContent = fs.readFileSync(this.listPath, 'utf-8');
        const lines = fileContent.split('\n').filter(line => line.trim() !== '');

        console.log(`\n--- [PHASE 1: INGESTION] ---`);
        console.log(`Loaded ${lines.length} skill paths.`);

        console.log(`\n--- [PHASE 2: DEEP CLUSTERING] ---`);
        const result: Record<string, string[]> = {};
        Object.keys(this.categories).forEach(cat => result[cat] = []);

        lines.forEach(line => {
            const skillName = path.basename(path.dirname(line));
            const fullPath = line.toLowerCase();
            let categorized = false;

            // Check specialized categories first by path
            if (fullPath.includes('frontend_raw')) {
                result["Frontend Raw (Awwesome)"].push(`${skillName} (${line})`);
                categorized = true;
            } else if (fullPath.includes('ruflo') || fullPath.includes('ruvocal')) {
                result["Ruflo Core & Agents"].push(`${skillName} (${line})`);
                categorized = true;
            } else if (fullPath.includes('superpowers')) {
                result["Superpowers"].push(`${skillName} (${line})`);
                categorized = true;
            }

            // If not categorized by specialized path, use markers
            if (!categorized) {
                for (const [category, markers] of Object.entries(this.categories)) {
                    if (category === "General / Misc") continue;
                    
                    const matchesMarker = markers.some(marker => 
                        skillName.toLowerCase().includes(marker) || fullPath.includes(marker)
                    );

                    if (matchesMarker) {
                        result[category].push(`${skillName} (${line})`);
                        categorized = true;
                        break;
                    }
                }
            }

            if (!categorized) {
                result["General / Misc"].push(`${skillName} (${line})`);
            }
        });

        console.log(`Clustering complete. Generating ledger...`);

        console.log(`\n--- [PHASE 3: LEDGER UPDATE] ---`);
        this.generateMarkdownReport(result);
        console.log(`Report generated at: ${this.outputPath}`);

        console.log(`\n🏆 ARG DEEP CATEGORIZATION COMPLETE.`);
    }

    private generateMarkdownReport(result: Record<string, string[]>) {
        let md = `# 🌪️ ARG Sovereign: Deep Skill Taxonomy Report\n\n`;
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
    }
}

const categorizer = new ARGDeepCategorizer();
categorizer.execute().catch(console.error);
