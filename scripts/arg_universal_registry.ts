import fs from 'fs';
import path from 'path';

/**
 * 🌪️ ARG SOVEREIGN UNIVERSAL REGISTRY BUILDER v1.0
 * Task: Extract metadata from 5000+ skills to make them universal.
 */
class ARGUniversalRegistry {
    private listPath = '/home/smit/Downloads/Fusion/all_skills_list.txt';
    private outputDir = '/home/smit/Downloads/Fusion/graphify-out/';
    private outputPath = path.join(this.outputDir, 'universal_skills.json');
    
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
        console.log("🌪️ ARG UNIVERSAL REGISTRY ENGINE ONLINE.");
        console.log("Task: Indexing 5000+ Skills for Universal Access.");

        let lines: string[] = [];
        if (fs.existsSync(this.listPath)) {
            const fileContent = fs.readFileSync(this.listPath, 'utf-8');
            lines = fileContent.split('\n').filter(line => line.trim() !== '');
            // Convert relative paths to absolute
            lines = lines.map(line => path.resolve('/home/smit/Downloads/Fusion', line));
        }

        // Add hidden skills
        lines = [...lines, ...this.hiddenSkills];
        console.log(`Total files to process: ${lines.length}`);

        const registry: any[] = [];
        let processed = 0;
        let failed = 0;

        for (const filePath of lines) {
            try {
                if (!fs.existsSync(filePath)) {
                    failed++;
                    continue;
                }

                const content = fs.readFileSync(filePath, 'utf-8');
                
                // Handle JSON files differently (like the UI/UX Pro Max one)
                if (filePath.endsWith('.json')) {
                    const json = JSON.parse(content);
                    registry.push({
                        name: json.name || path.basename(path.dirname(filePath)),
                        description: json.description || "",
                        trigger: json.trigger || "",
                        path: filePath,
                        type: 'json'
                    });
                    processed++;
                    continue;
                }

                // Extract Frontmatter from Markdown/Skill files
                const frontmatter = this.extractFrontmatter(content);
                
                registry.push({
                    name: frontmatter.name || path.basename(path.dirname(filePath)),
                    description: frontmatter.description || "",
                    trigger: frontmatter.trigger || "",
                    path: filePath,
                    type: filePath.endsWith('.skill') ? 'skill' : 'markdown'
                });
                
                processed++;
                if (processed % 500 === 0) {
                    console.log(`Processed ${processed} files...`);
                }
            } catch (e) {
                failed++;
            }
        }

        console.log(`Done. Processed: ${processed}, Failed/Skipped: ${failed}`);

        fs.mkdirSync(this.outputDir, { recursive: true });
        fs.writeFileSync(this.outputPath, JSON.stringify(registry, null, 2));
        console.log(`Registry written to: ${this.outputPath}`);
    }

    private extractFrontmatter(content: string): { name?: string, description?: string, trigger?: string } {
        const result: { name?: string, description?: string, trigger?: string } = {};
        
        // Look for content between --- and ---
        const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
        if (!match) return result;

        const lines = match[1].split('\n');
        lines.forEach(line => {
            const nameMatch = line.match(/^name:\s*(.*)/);
            const descMatch = line.match(/^description:\s*(.*)/);
            const triggerMatch = line.match(/^trigger:\s*(.*)/);

            if (nameMatch) result.name = nameMatch[1].replace(/^["']|["']$/g, '').trim();
            if (descMatch) result.description = descMatch[1].replace(/^["']|["']$/g, '').trim();
            if (triggerMatch) result.trigger = triggerMatch[1].replace(/^["']|["']$/g, '').trim();
        });

        return result;
    }
}

const builder = new ARGUniversalRegistry();
builder.execute().catch(console.error);
