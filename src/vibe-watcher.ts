import * as fs from 'fs';
import * as path from 'path';
import { VibeRouter } from './vibe-router';

/**
 * 👻 [VIBE WATCHER]
 * Monitors the workspace for new "Vibes" (file changes) 
 * and automatically triggers the ARG Orchestrator.
 */
export class VibeWatcher {
    private router: VibeRouter;
    private projectRoot: string;
    private isProcessing: boolean = false;
    private debounceTimer: NodeJS.Timeout | null = null;

    constructor(router: VibeRouter, projectRoot: string) {
        this.router = router;
        this.projectRoot = projectRoot;
    }

    public start() {
        // Watch Workspace (Non-recursive root for new files)
        this.watchDir(this.projectRoot, "Workspace Root", false);
        
        // Watch Key Subdirs
        const subdirs = ['src', 'scripts', 'components', 'pages'];
        for (const dir of subdirs) {
            const dirPath = path.join(this.projectRoot, dir);
            if (fs.existsSync(dirPath)) {
                this.watchDir(dirPath, `Workspace:${dir}`, true);
            }
        }

        // Watch External Plugins (Relative to Project Root or Environment)
        const externalRoot = process.env.ARG_WORKFORCE_PATH || path.join(this.projectRoot, 'external_plugins');
        if (fs.existsSync(externalRoot)) {
            this.watchDir(externalRoot, "External Plugins", true);
        }
    }

    private watchDir(dir: string, label: string, recursive: boolean) {
        console.log(`   ↳ [${label}] ARG is now listening (recursive: ${recursive})...`);
        fs.watch(dir, { recursive }, (eventType, filename) => {
            if (!filename) return;

            // Ignore system/lock files
            if (filename.includes('node_modules') || 
                filename.includes('.git') || 
                filename.includes('graphify-out') ||
                filename.includes('logs/')) {
                return;
            }

            // Only care about meaningful code vibes
            const ext = path.extname(filename);
            const validExts = ['.html', '.ts', '.js', '.css', '.md'];
            if (!validExts.includes(ext)) return;

            this.handleVibe(eventType, filename, dir);
        });
    }

    private handleVibe(eventType: string, filename: string, sourceDir: string) {
        if (this.debounceTimer) clearTimeout(this.debounceTimer);

        this.debounceTimer = setTimeout(async () => {
            if (this.isProcessing) return;
            
            const filePath = path.join(sourceDir, filename);
            if (!fs.existsSync(filePath)) return; // Handle deletion

            const isExternal = sourceDir.includes('external_plugins');
            console.log(`\n🌊 [GHOST SIGNAL] New Vibe detected: ${filename} (${isExternal ? 'External Plugin' : 'Workspace'})`);
            
            this.isProcessing = true;
            try {
                let prompt = '';
                if (isExternal) {
                    prompt = `Register and analyze the new external plugin: ${filename}. Ensure the workforce is updated.`;
                } else if (eventType === 'rename') {
                    prompt = `Audit and harden the newly created file: ${filename}. Ensure it follows the Elite Frontend guidelines if applicable.`;
                } else {
                    prompt = `Review recent changes in ${filename}. Check for architectural drift and security vulnerabilities.`;
                }

                await this.router.executeVibe(prompt);
                console.log(`👻 [VIBE GHOST] Audit complete for ${filename}. Waiting for next signal...`);
            } catch (e) {
                console.error(`❌ [GHOST ERROR] Failed to process vibe:`, e);
            } finally {
                this.isProcessing = false;
            }
        }, 1500); // Debounce to allow file writes to finish
    }
}
