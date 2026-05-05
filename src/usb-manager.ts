import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

export class UniversalSessionBridge {
    private sessionDir: string;
    private globalDir: string;
    private projectRoot: string;

    constructor(projectRoot: string) {
        this.projectRoot = projectRoot;
        this.sessionDir = path.join(projectRoot, '.arg_session');
        this.globalDir = path.join(os.homedir(), '.arg_workforce');
        
        this.init();
    }

    public getProjectRoot(): string {
        return this.projectRoot;
    }

    private init() {
        if (!fs.existsSync(this.sessionDir)) fs.mkdirSync(this.sessionDir, { recursive: true });
        if (!fs.existsSync(this.globalDir)) fs.mkdirSync(this.globalDir, { recursive: true });
    }

    /**
     * Heartbeat: Synchronize current IDE state to the universal buffer.
     */
    public syncContext(ideName: string, state: any) {
        const timestamp = new Date().toISOString();
        const payload = {
            ide: ideName,
            timestamp,
            state
        };

        const localPath = path.join(this.sessionDir, 'latest.json');
        const globalPath = path.join(this.globalDir, `${ideName}_latest.json`);

        fs.writeFileSync(localPath, JSON.stringify(payload, null, 2));
        fs.writeFileSync(globalPath, JSON.stringify(payload, null, 2));
        
        console.log(`🔄 [USB SYNC] Context heartbeat emitted from ${ideName}.`);
    }

    /**
     * Recovery: Load the latest context from any previous IDE session.
     */
    public recoverLatestContext(): any {
        const localPath = path.join(this.sessionDir, 'latest.json');
        if (fs.existsSync(localPath)) {
            console.log(`✅ [USB RECOVERY] Restoring context from project session...`);
            return JSON.parse(fs.readFileSync(localPath, 'utf-8'));
        }

        // Fallback to global workforce sync
        const files = fs.readdirSync(this.globalDir).filter(f => f.endsWith('.json'));
        if (files.length > 0) {
            const latestFile = files.sort((a, b) => {
                const statA = fs.statSync(path.join(this.globalDir, a));
                const statB = fs.statSync(path.join(this.globalDir, b));
                return statB.mtime.getTime() - statA.mtime.getTime();
            })[0];
            
            console.log(`✅ [USB RECOVERY] Restoring context from global workforce (${latestFile})...`);
            return JSON.parse(fs.readFileSync(path.join(this.globalDir, latestFile), 'utf-8'));
        }

        return null;
    }
}
