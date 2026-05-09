import fs from 'fs';
import path from 'path';

/**
 * 🌪️ ARG SOVEREIGN REGISTRY OPTIMIZER
 * Task: Add keywords and ranking to the universal skills registry.
 */
class ARGRegistryOptimizer {
    private registryPath = '/home/smit/Downloads/Fusion/graphify-out/universal_skills.json';

    public async execute() {
        console.log("🌪️ ARG REGISTRY OPTIMIZER ONLINE.");

        if (!fs.existsSync(this.registryPath)) {
            console.error("Registry file not found!");
            return;
        }

        const registry = JSON.parse(fs.readFileSync(this.registryPath, 'utf-8'));
        console.log(`Optimizing ${registry.length} skills...`);

        const optimizedRegistry = registry.map((skill: any) => {
            const name = skill.name || "";
            const desc = skill.description || "";
            const filePath = skill.path || "";

            // 1. Generate Keywords
            const keywords = new Set<string>();
            
            // Extract words from name
            name.split(/[^a-zA-Z]/).forEach((w: string) => {
                if (w.length > 2) keywords.add(w.toLowerCase());
            });

            // Extract words from description
            desc.split(/[^a-zA-Z]/).forEach((w: string) => {
                if (w.length > 3) keywords.add(w.toLowerCase());
            });

            // Remove common stop words (simple list)
            const stopWords = ["this", "that", "with", "from", "your", "using", "support", "based", "expert", "pro", "guide"];
            stopWords.forEach(word => keywords.delete(word));

            // 2. Assign Rank based on path
            let rank = 5; // Default lowest
            if (filePath.includes('antigravity-awesome-skills') || filePath.includes('awesome-skills')) {
                rank = 1;
            } else if (filePath.includes('graphify')) {
                rank = 2;
            } else if (filePath.includes('ruflo')) {
                rank = 3;
            } else if (filePath.includes('external_plugins')) {
                rank = 4;
            }

            return {
                ...skill,
                keywords: Array.from(keywords),
                rank: rank
            };
        });

        fs.writeFileSync(this.registryPath, JSON.stringify(optimizedRegistry, null, 2));
        console.log(`Registry optimized and saved to: ${this.registryPath}`);
    }
}

const optimizer = new ARGRegistryOptimizer();
optimizer.execute().catch(console.error);
