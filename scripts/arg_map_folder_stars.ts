import fs from 'fs';
import path from 'path';

/**
 * 🌪️ ARG FOLDER STAR MAPPER
 * Task: Map stars to skills based on their folder location.
 */
class ARGFolderStarMapper {
    private registryPath = '/home/smit/Downloads/Fusion/graphify-out/universal_skills.json';

    private folderStars: Record<string, number> = {
        'vendor/external_plugins/caveman': 55500,
        'vendor/external_plugins/claude-code': 121000,
        'vendor/external_plugins/superpowers': 322,
        'external_plugins/humanizer': 3400,
        'external_plugins/frontend_raw': 25000
    };

    public async execute() {
        console.log("🌪️ ARG FOLDER STAR MAPPER ONLINE.");

        if (!fs.existsSync(this.registryPath)) {
            console.error("Registry not found!");
            return;
        }

        const registry = JSON.parse(fs.readFileSync(this.registryPath, 'utf-8'));
        console.log(`Scanning ${registry.length} skills for folder-based assignment...`);
        let mappedCount = 0;

        const updatedRegistry = registry.map((skill: any) => {
            const filePath = skill.path || "";
            let stars = skill.stars || 0;

            // Check folder paths
            for (const [folder, starCount] of Object.entries(this.folderStars)) {
                if (filePath.includes(folder)) {
                    // Apply the stars if it's higher than current or if we want to enforce it
                    if (starCount > stars || stars === 0) {
                        stars = starCount;
                        mappedCount++;
                    }
                }
            }

            return {
                ...skill,
                stars: stars
            };
        });

        fs.writeFileSync(this.registryPath, JSON.stringify(updatedRegistry, null, 2));
        console.log(`Registry updated with folder stars. Mapped ${mappedCount} skills to high-profile data.`);
    }
}

const mapper = new ARGFolderStarMapper();
mapper.execute().catch(console.error);
