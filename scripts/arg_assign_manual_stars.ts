import fs from 'fs';
import path from 'path';

/**
 * 🌪️ ARG MANUAL STAR ASSIGNER
 * Task: Inject manually verified star counts into the registry.
 */
class ARGManualStarAssigner {
    private registryPath = '/home/smit/Downloads/Fusion/graphify-out/universal_skills.json';

    private manualStars: Record<string, number> = {
        'rails/rails': 58400,
        'cline/cline': 61500,
        'shadcn-ui/ui': 114000,
        'modelcontextprotocol/sdk': 12400,
        'anthropics/claude-code': 121000
    };

    public async execute() {
        console.log("🌪️ ARG MANUAL STAR ASSIGNER ONLINE.");

        if (!fs.existsSync(this.registryPath)) {
            console.error("Registry not found!");
            return;
        }

        const registry = JSON.parse(fs.readFileSync(this.registryPath, 'utf-8'));
        console.log(`Scanning ${registry.length} skills for manual assignment...`);
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
        console.log(`Registry updated with manual stars. Mapped ${mappedCount} skills to elite data.`);
    }
}

const assigner = new ARGManualStarAssigner();
assigner.execute().catch(console.error);
