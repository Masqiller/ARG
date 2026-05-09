import fs from 'fs';

/**
 * 🌪️ ARG STAR PURGER
 * Task: Set all stars to 0 to remove fake data.
 */
class ARGStarPurger {
    private registryPath = '/home/smit/Downloads/Fusion/graphify-out/universal_skills.json';

    public async execute() {
        console.log("🌪️ ARG STAR PURGER ONLINE.");

        if (!fs.existsSync(this.registryPath)) {
            console.error("Registry not found!");
            return;
        }

        const registry = JSON.parse(fs.readFileSync(this.registryPath, 'utf-8'));
        console.log(`Purging stars for ${registry.length} skills...`);

        const updatedRegistry = registry.map((skill: any) => {
            return {
                ...skill,
                stars: 0 // Reset to 0
            };
        });

        fs.writeFileSync(this.registryPath, JSON.stringify(updatedRegistry, null, 2));
        console.log(`Registry cleared. All skills now have 0 stars.`);
    }
}

const purger = new ARGStarPurger();
purger.execute().catch(console.error);
