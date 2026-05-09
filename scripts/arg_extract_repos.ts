import fs from 'fs';
import path from 'path';

/**
 * 🌪️ ARG REPO EXTRACTOR
 * Task: Find all unique GitHub repositories mentioned in the skills.
 */
class ARGRepoExtractor {
    private listPath = '/home/smit/Downloads/Fusion/all_skills_list.txt';
    
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

    public async execute() {
        console.log("🌪️ ARG REPO EXTRACTOR ONLINE.");

        let lines: string[] = [];
        if (fs.existsSync(this.listPath)) {
            const fileContent = fs.readFileSync(this.listPath, 'utf-8');
            lines = fileContent.split('\n').filter(line => line.trim() !== '');
            lines = lines.map(line => path.resolve('/home/smit/Downloads/Fusion', line));
        }
        lines = [...lines, ...this.hiddenSkills];

        const repos = new Set<string>();

        for (const filePath of lines) {
            try {
                if (!fs.existsSync(filePath)) continue;
                const content = fs.readFileSync(filePath, 'utf-8');
                
                // Match github.com/owner/repo (stopping at branch or file path)
                const regex = /github\.com\/([a-zA-Z0-9_-]+)\/([a-zA-Z0-9_-]+)/g;
                let match;
                while ((match = regex.exec(content)) !== null) {
                    repos.add(`${match[1]}/${match[2]}`);
                }
            } catch (e) {
                // Ignore
            }
        }

        console.log(`Found ${repos.size} unique repositories.`);
        console.log("Sample repos:", Array.from(repos).slice(0, 10));
        
        // Save the list
        fs.writeFileSync('/home/smit/Downloads/Fusion/graphify-out/unique_repos.json', JSON.stringify(Array.from(repos), null, 2));
    }
}

const extractor = new ARGRepoExtractor();
extractor.execute().catch(console.error);
