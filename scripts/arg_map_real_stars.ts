import fs from 'fs';
import path from 'path';

/**
 * 🌪️ ARG STAR MAPPER
 * Task: Map real star counts from repo_stars.json back to universal_skills.json.
 */
class ARGStarMapper {
    private registryPath = '/home/smit/Downloads/Fusion/graphify-out/universal_skills.json';
    private starsDbPath = '/home/smit/Downloads/Fusion/graphify-out/repo_stars.json';

    public async execute() {
        console.log("🌪️ ARG STAR MAPPER ONLINE.");

        if (!fs.existsSync(this.registryPath) || !fs.existsSync(this.starsDbPath)) {
            console.error("Registry or Stars DB not found!");
            return;
        }

        const registry = JSON.parse(fs.readFileSync(this.registryPath, 'utf-8'));
        const starsDb = JSON.parse(fs.readFileSync(this.starsDbPath, 'utf-8'));

        console.log(`Mapping stars for ${registry.length} skills using ${Object.keys(starsDb).length} fetched repos...`);
        let mappedCount = 0;

        const updatedRegistry = registry.map((skill: any) => {
            const filePath = skill.path || "";
            let stars = skill.stars || 0; // Keep existing simulated stars as fallback

            try {
                if (fs.existsSync(filePath)) {
                    const content = fs.readFileSync(filePath, 'utf-8');
                    
                    // Check if any of the fetched repos are mentioned in this file
                    for (const [repo, starCount] of Object.entries(starsDb)) {
                        if (content.includes(repo)) {
                            // Found a match! Use the real star count.
                            // If multiple match, we take the highest one.
                            if (typeof starCount === 'number' && starCount > stars) {
                                stars = starCount;
                                mappedCount++;
                            }
                        }
                    }
                }
            } catch (e) {
                // Ignore
            }

            return {
                ...skill,
                stars: stars
            };
        });

        fs.writeFileSync(this.registryPath, JSON.stringify(updatedRegistry, null, 2));
        console.log(`Registry updated with real stars. Mapped ${mappedCount} skills to real data.`);
    }
}

const mapper = new ARGStarMapper();
mapper.execute().catch(console.error);
