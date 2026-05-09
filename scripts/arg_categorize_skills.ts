import fs from 'fs';
import path from 'path';

/**
 * 🌪️ ARG SOVEREIGN SKILL CATEGORIZER v1.0
 * Task: Categorize 1400+ skills into defined battle buckets.
 */
class ARGCategorizer {
    private skillsDir = '/home/smit/.gemini/antigravity/skills/';
    private externalDir = '/home/smit/Downloads/Fusion/external_plugins/';
    private outputDir = '/home/smit/Downloads/Fusion/graphify-out/';
    private outputPath = path.join(this.outputDir, 'categorized_skills.md');

    private categories: Record<string, string[]> = {
        "AI & Machine Learning": ["ai", "ml", "agent", "llm", "rag", "hugging-face", "tensor", "prompt"],
        "Security & Pentesting": ["security", "attack", "pentest", "vulnerability", "hacking", "audit", "auth"],
        "Automation & Workflow": ["automation", "integration", "workflow", "n8n", "zapier", "make"],
        "Cloud & DevOps": ["aws", "azure", "cloud", "docker", "kubernetes", "terraform", "ci", "cd"],
        "Frontend & UI/UX": ["ui", "design", "react", "angular", "vue", "frontend", "css", "html", "high-end"],
        "Backend & API": ["backend", "api", "node", "python", "go", "rust", "database", "sql", "graphql"],
        "Data & Analytics": ["data", "analytics", "stats", "chart", "graph", "metric"],
        "Product & Business": ["product", "business", "market", "seo", "growth", "strategy"],
        "Frameworks & Patterns": ["patterns", "expert", "pro", "guide", "setup"],
        "General / Misc": []
    };

    public async execute() {
        console.log("🌪️ ARG CATEGORIZATION ENGINE ONLINE.");
        console.log("Mind: ARG System [TIER 0]");
        console.log("Task: Classifying 1400+ Skills.");

        const systemSkills = fs.readdirSync(this.skillsDir).filter(f => fs.statSync(path.join(this.skillsDir, f)).isDirectory());
        const externalPlugins = fs.existsSync(this.externalDir) ? fs.readdirSync(this.externalDir).filter(f => fs.statSync(path.join(this.externalDir, f)).isDirectory()) : [];

        const allSkills = [...systemSkills, ...externalPlugins.map(p => `[EXTERNAL] ${p}`)];
        console.log(`\n--- [PHASE 1: DISCOVERY] ---`);
        console.log(`Discovered ${systemSkills.length} system skills.`);
        console.log(`Discovered ${externalPlugins.length} external plugins.`);

        console.log(`\n--- [PHASE 2: SWARM CLUSTERING] ---`);
        const result: Record<string, string[]> = {};
        Object.keys(this.categories).forEach(cat => result[cat] = []);

        allSkills.forEach(skill => {
            let categorized = false;
            for (const [category, markers] of Object.entries(this.categories)) {
                if (markers.some(marker => skill.toLowerCase().includes(marker))) {
                    result[category].push(skill);
                    categorized = true;
                    break;
                }
            }
            if (!categorized) {
                result["General / Misc"].push(skill);
            }
        });

        console.log(`Clustering complete. Generating report...`);

        console.log(`\n--- [PHASE 3: LEDGER UPDATE] ---`);
        this.generateMarkdownReport(result);
        console.log(`Report generated at: ${this.outputPath}`);

        console.log(`\n🏆 ARG CATEGORIZATION COMPLETE.`);
    }

    private generateMarkdownReport(result: Record<string, string[]>) {
        let md = `# 🌪️ ARG Sovereign: Skill Taxonomy Report\n\n`;
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

const categorizer = new ARGCategorizer();
categorizer.execute().catch(console.error);
