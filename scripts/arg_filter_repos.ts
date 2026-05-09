import fs from 'fs';
import path from 'path';

/**
 * 🌪️ ARG REPO FILTER
 * Task: Filter out placeholder repos from the unique list.
 */
class ARGRepoFilter {
    private reposPath = '/home/smit/Downloads/Fusion/graphify-out/unique_repos.json';
    private outputPath = '/home/smit/Downloads/Fusion/graphify-out/real_repos.json';

    private placeholders = [
        'user/repo', 'owner/repo', 'org/repo', 'example/repo',
        'your-repo/project', 'user/project-name', 'owner/my-repo',
        'yourusername/cli-ai-skills', 'user/plugin-name', 'username/repo',
        'repos/owner', 'org/repo-a', 'org/repo-b', 'org/repo-c',
        'you/your-repo', 'your-org/repo', 'my-org/frontend', 'my-org/backend',
        'my-org/shared'
    ];

    public async execute() {
        console.log("🌪️ ARG REPO FILTER ONLINE.");

        if (!fs.existsSync(this.reposPath)) {
            console.error("Repos list not found!");
            return;
        }

        const repos = JSON.parse(fs.readFileSync(this.reposPath, 'utf-8'));
        console.log(`Total repos found initially: ${repos.length}`);

        const realRepos = repos.filter((repo: string) => {
            // Filter out exact placeholders
            if (this.placeholders.includes(repo.toLowerCase())) return false;
            
            // Filter out generic looking ones
            const parts = repo.split('/');
            if (parts[0] === 'user' || parts[0] === 'owner' || parts[0] === 'org') return false;
            if (parts[1] === 'repo' || parts[1] === 'project') return false;
            
            return true;
        });

        console.log(`Filtered down to ${realRepos.length} potentially real repositories.`);
        
        fs.writeFileSync(this.outputPath, JSON.stringify(realRepos, null, 2));
        console.log(`Saved clean list to: ${this.outputPath}`);
    }
}

const filter = new ARGRepoFilter();
filter.execute().catch(console.error);
