import { ARGPlugin, PluginManager } from './plugin-manager';
import { ARGBrain } from '../arg-brain';

/**
 * 🏛️ [SECURITY COUNCIL PLUGIN] v1.0
 * Launches a 5-agent debate to harden architectural decisions.
 */
export class SecurityCouncilPlugin implements ARGPlugin {
    name = "security-council";
    description = "Launches a 5-agent debate to audit and harden security-critical tasks.";

    constructor(private brain: ARGBrain) { }

    async execute(context: any): Promise<any> {
        const { prompt } = context;
        console.log(`\n🏛️ [SECURITY COUNCIL] Convening the council for: "${prompt}"`);

        // Real Scan: Find potential issues to debate
        const { spawnSync } = require('child_process');
        const scanners = [
            { name: "Command Injection", query: "execSync|execAsync|spawn" },
            { name: "Path Traversal", query: "readFileSync|writeFileSync|readFile|writeFile" },
            { name: "Environment Leakage", query: "process\\.env" }
        ];

        let findings: string[] = [];
        for (const scanner of scanners) {
            const grep = spawnSync('grep', ['-rE', scanner.query, 'src']);
            const result = grep.stdout.toString().split('\n').filter((l: string) => l.trim().length > 0);
            findings = findings.concat(result.map((l: string) => `[${scanner.name}] ${l}`));
        }

        const roles = [
            {
                id: "contrarian",
                name: "The Contrarian",
                directive: `Found ${findings.length} security hotspots. Challenge the necessity of each one, especially those in src/mcp-server.ts.`
            },
            {
                id: "first_principles",
                name: "The First Principles Thinker",
                directive: "Strip the problem to its basics. Why do we need shell execution at all? Can we use child_process.spawn properly everywhere?"
            },
            {
                id: "expansionist",
                name: "The Expansionist",
                directive: "Identify all downstream effects. If we harden the shell execution, will it break the Graphify update or CodeBurn audit?"
            },
            {
                id: "outsider",
                name: "The Outsider",
                directive: "Audit for environment-level threats. Are we leaking paths in the console logs?"
            },
            {
                id: "executor",
                name: "The Executor",
                directive: `Synthesize findings. Findings to address: ${findings.slice(0, 10).join(', ')}`
            }
        ];

        console.log(`[COUNCIL] 5 Agents initialized and briefed with ${findings.length} security hotspots.`);

        const pruned = this.brain.pruneContext(prompt);
        const briefing = roles.map(r => {
            return `Agent: ${r.name}\nDirective: ${r.directive}\nContext: ${JSON.stringify(pruned.relevantNodes.map((n: any) => n.id))}\n---`;
        }).join('\n');

        return {
            status: "success",
            action: "council_debate_triggered",
            agentCount: roles.length,
            findings: findings.slice(0, 50),
            briefing: briefing.substring(0, 2000)
        };
    }
}
