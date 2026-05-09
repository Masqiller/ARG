import fs from 'fs';
import path from 'path';

/**
 * 🌪️ ARG EXTERNAL STAR ASSIGNER
 * Task: Inject star counts for external plugins into the registry.
 */
class ARGExternalStarAssigner {
    private registryPath = '/home/smit/Downloads/Fusion/graphify-out/universal_skills.json';

    private manualStars: Record<string, number> = {
        'hardikpandya/stop-slop': 3400,
        'JuliusBrussee/caveman': 55500,
        'thedotmack/claude-mem': 73700,
        'blader/humanizer': 100
    };

    public async execute() {
        console.log("🌪️ ARG EXTERNAL STAR ASSIGNER ONLINE.");

        if (!fs.existsSync(this.registryPath)) {
            console.error("Registry not found!");
            return;
        }

        const registry = JSON.parse(fs.readFileSync(this.registryPath, 'utf-8'));
        console.log(`Scanning ${registry.length} skills for external plugin assignment...`);
        let mappedCount = 0;

        const updatedRegistry = registry.map((skill: any) => {
            const filePath = skill.path || "";
            let stars = skill.stars || 0;

            try {
                if (fs.existsSync(filePath)) {
                    const content = fs.readFileSync(filePath, 'utf-8');
                    
                    for (const [repo, starCount] of Object.entries(this.manualStars)) {
                        if (content.includes(repo)) {
                            if (starCount > stars) {
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
        console.log(`Registry updated with external stars. Mapped ${mappedCount} skills to high-profile data.`);
    }
}

const assigner = new ARGExternalStarAssigner();
assigner.execute().catch(console.error);
