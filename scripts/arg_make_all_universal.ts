import fs from 'fs';
import path from 'path';

/**
 * 🌪️ ARG SOVEREIGN ALL-UNIVERSALIZER
 * Task: Refactor all 5000+ skills to be marked as universal.
 */
class ARGAllUniversalizer {
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
        console.log("🌪️ ARG ALL-UNIVERSALIZER ONLINE.");

        let lines: string[] = [];
        if (fs.existsSync(this.listPath)) {
            const fileContent = fs.readFileSync(this.listPath, 'utf-8');
            lines = fileContent.split('\n').filter(line => line.trim() !== '');
            lines = lines.map(line => path.resolve('/home/smit/Downloads/Fusion', line));
        }
        lines = [...lines, ...this.hiddenSkills];

        console.log(`Processing ${lines.length} files...`);
        let updatedCount = 0;

        for (const filePath of lines) {
            try {
                if (!fs.existsSync(filePath)) continue;
                if (filePath.endsWith('.json')) continue; // Skip JSON files

                let content = fs.readFileSync(filePath, 'utf-8');
                if (content.length > 1000000) continue; // Skip huge files

                const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
                const match = content.match(frontmatterRegex);

                if (match && match[1]) {
                    // Has frontmatter
                    const frontmatter = match[1];
                    if (frontmatter.includes('tools:')) {
                        // Check if universal is already there
                        if (!frontmatter.includes('universal')) {
                            const newFrontmatter = frontmatter.replace(/tools:\s*\[([^\]]*)\]/, (m, p1) => {
                                return `tools: [universal, ${p1.trim()}]`;
                            });
                            content = content.replace(frontmatter, newFrontmatter);
                            fs.writeFileSync(filePath, content);
                            updatedCount++;
                        }
                    } else {
                        // Add tools: [universal]
                        const newFrontmatter = frontmatter + `\ntools: [universal]`;
                        content = content.replace(frontmatter, newFrontmatter);
                        fs.writeFileSync(filePath, content);
                        updatedCount++;
                    }
                } else {
                    // No frontmatter, prepend it
                    const skillName = path.basename(path.dirname(filePath));
                    const newContent = `---\nname: ${skillName}\ntools: [universal]\n---\n\n` + content;
                    fs.writeFileSync(filePath, newContent);
                    updatedCount++;
                }

            } catch (e) {
                // Ignore errors
            }
        }

        console.log(`Successfully marked ${updatedCount} skills as universal.`);
    }
}

const universalizer = new ARGAllUniversalizer();
universalizer.execute().catch(console.error);
