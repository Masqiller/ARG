import * as fs from 'fs';
import * as path from 'path';

/**
 * 🛠️ [SELF-ARCHITECT]
 * Allows the ARG system to autonomously modify its own mapping logic
 * based on high-fitness patterns discovered during simulation.
 */
export class SelfArchitect {
    private mapperPath: string;

    constructor(projectRoot: string) {
        this.mapperPath = path.join(projectRoot, 'src/skill-mapper.ts');
    }

    /**
     * Injects a new skill heuristic discovered by the Omega Loop
     */
    public async injectHeuristic(keyword: string, skill: string, weight: number, category: string) {
        console.log(`🔧 [SELF-ARCHITECT] Injecting new heuristic: "${keyword}" -> ${skill}`);
        
        let content = fs.readFileSync(this.mapperPath, 'utf-8');
        
        // Find the SKILL_HEURISTICS object start
        const searchString = 'const SKILL_HEURISTICS: Record<string, SkillWeight[]> = {';
        const index = content.indexOf(searchString);
        
        if (index === -1) return;

        // Construct the new entry
        const newEntry = `\n    '${keyword}': [{ skill: '${skill}', weight: ${weight}, category: '${category}' }],`;
        
        // Insert after the opening brace
        const insertPos = index + searchString.length;
        const newContent = content.slice(0, insertPos) + newEntry + content.slice(insertPos);
        
        fs.writeFileSync(this.mapperPath, newContent);
        console.log(`✅ [SELF-ARCHITECT] Source code hardened with new intelligence.`);
    }
}
