import fs from 'fs';
import path from 'path';

/**
 * 🌪️ ARG SOVEREIGN STAR SIMULATOR
 * Task: Remove hierarchy and add simulated GitHub stars for parallelism.
 */
class ARGStarSimulator {
    private registryPath = '/home/smit/Downloads/Fusion/graphify-out/universal_skills.json';

    public async execute() {
        console.log("🌪️ ARG STAR SIMULATOR ONLINE.");

        if (!fs.existsSync(this.registryPath)) {
            console.error("Registry file not found!");
            return;
        }

        const registry = JSON.parse(fs.readFileSync(this.registryPath, 'utf-8'));
        console.log(`Processing ${registry.length} skills...`);

        const optimizedRegistry = registry.map((skill: any) => {
            const filePath = skill.path || "";
            let fileSize = 0;

            try {
                if (fs.existsSync(filePath)) {
                    fileSize = fs.statSync(filePath).size;
                }
            } catch (e) {
                // Ignore
            }

            // Simulate GitHub Stars based on source folder + random variance
            let stars = 0;
            const randomVariance = Math.floor(Math.random() * 100);

            if (filePath.includes('antigravity-awesome-skills') || filePath.includes('awesome-skills')) {
                stars = 1500 + Math.floor(Math.random() * 500); // 1500 - 2000
            } else if (filePath.includes('graphify')) {
                stars = 800 + Math.floor(Math.random() * 300);  // 800 - 1100
            } else if (filePath.includes('ruflo')) {
                stars = 500 + Math.floor(Math.random() * 200);  // 500 - 700
            } else if (filePath.includes('external_plugins')) {
                stars = 100 + Math.floor(Math.random() * 100);  // 100 - 200
            } else {
                stars = 10 + Math.floor(Math.random() * 50);    // 10 - 60
            }

            // Remove the old rank field
            const { rank, ...rest } = skill;

            return {
                ...rest,
                stars: stars,
                file_size: fileSize
            };
        });

        fs.writeFileSync(this.registryPath, JSON.stringify(optimizedRegistry, null, 2));
        console.log(`Registry optimized with simulated stars and saved to: ${this.registryPath}`);
    }
}

const simulator = new ARGStarSimulator();
simulator.execute().catch(console.error);
