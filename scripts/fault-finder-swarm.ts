
import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

const projectRoot = path.join(__dirname, '../');
const logFile = path.join(projectRoot, 'logs/FAULT_LOG.md');

/**
 * 🌪️ [FAULT FINDER SWARM] v2.3 (Robust System Audit)
 * Updated memory service signatures and core logic.
 */
class FaultFinderSystemWide {
    private iteration = 1;

    async start() {
        console.log("🌪️ [FAULT FINDER] Swarm v2.3 (Robust) launched.");
        this.initLog();

        while (true) {
            console.log(`\n🚨 [CYCLE ${this.iteration}] Multi-Vector Audit in progress...`);
            
            const findings: string[] = [];
            
            findings.push(await this.auditCoreArchitecture());
            findings.push(await this.auditMemoryLayer());
            findings.push(await this.auditWorkforceHealth());
            findings.push(await this.auditFrontendTaste());
            findings.push(await this.auditTagoreSlop());

            const validFindings = findings.filter(f => f !== "");
            if (validFindings.length > 0) {
                this.logFindings(validFindings);
            } else {
                console.log("🟢 [AUDIT] System health optimal across all vectors.");
            }

            this.iteration++;
            await new Promise(resolve => setTimeout(resolve, 15000));
        }
    }

    private initLog() {
        if (!fs.existsSync(path.dirname(logFile))) fs.mkdirSync(path.dirname(logFile));
    }

    private async auditCoreArchitecture(): Promise<string> {
        const routerPath = path.join(projectRoot, 'src/vibe-router.ts');
        if (fs.existsSync(routerPath)) {
            const content = fs.readFileSync(routerPath, 'utf-8');
            if (content.match(/new ClaudeMemWorker.*executeVibe/s)) {
                return "[ARCH] Bottleneck: Memory Worker initialized inside execution loop. Refactor to Service Provider.";
            }
        }
        return "";
    }

    private async auditMemoryLayer(): Promise<string> {
        try {
            // Check for both the wrapper and the underlying vector DB
            const result = execSync(`ps aux | grep -E "claude-mem|chroma-mcp" | grep -v grep`, { encoding: 'utf-8' });
            if (!result) return "[MEMORY] Intelligence Layer (Claude-Mem/Chroma) is OFFLINE.";
        } catch (e) {}
        return "";
    }

    private async auditWorkforceHealth(): Promise<string> {
        try {
            const zombieCount = parseInt(execSync(`ps -ef | grep defunct | grep -v grep | wc -l`, { encoding: 'utf-8' }));
            if (zombieCount > 3) return `[WORKFORCE] System saturation: ${zombieCount} zombie processes detected.`;
        } catch (e) {}
        return "";
    }

    private async auditFrontendTaste(): Promise<string> {
        const excludeFlags = "--exclude=scripts/fault-finder-swarm.ts --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=graphify-out";
        try {
            const result = execSync(`grep -r ${excludeFlags} "min-h-[100dvh]" . | head -n 1`, { encoding: 'utf-8' });
            if (result) return `[TASTE] Banned viewport pattern \`min-h-[100dvh]\` detected.`;
        } catch (e) {}
        try {
            const result = execSync(`grep -r ${excludeFlags} "justify-center" . | head -n 1`, { encoding: 'utf-8' });
            if (result) return `[TASTE] Center-bias (\`justify-center\`) found in active layouts.`;
        } catch (e) {}
        return "";
    }

    private async auditTagoreSlop(): Promise<string> {
        const slopRegex = "(||||moreover|furthermore)";
        const excludeFlags = "--exclude=scripts/fault-finder-swarm.ts --exclude-dir=node_modules";
        try {
            const result = execSync(`grep -riE ${excludeFlags} "${slopRegex}" . | head -n 1`, { encoding: 'utf-8' });
            if (result) return `[TAGORE] AI Slop detected in technical prose.`;
        } catch (e) {}
        return "";
    }

    private logFindings(findings: string[]) {
        const timestamp = new Date().toISOString();
        const entry = `\n### 🕒 ${timestamp} (Cycle ${this.iteration})\n` + findings.map(f => `- ⚠️ ${f}`).join('\n') + '\n';
        fs.appendFileSync(logFile, entry);
        console.log(`📣 [FAULT DETECTED] ${findings.length} system issues logged.`);
    }
}

new FaultFinderSystemWide().start().catch(console.error);
