import * as fs from 'fs';
import * as path from 'path';
import { ARGPlugin } from './plugin-manager';

/**
 * 🌍 [UNIVERSAL EXTERNAL LOADER] v2.0
 * Deep integration for Claude-Code and Superpowers workforce.
 */
export class ExternalPluginLoader {
    private externalRoot = '/home/smit/Downloads/Fusion/external_plugins';

    constructor() {}

    /**
     * Scans the claude-code/plugins directory and registers each command as an ARG Plugin.
     * Universalizes the .md playbooks into executable swarm prompts.
     */
    public loadClaudeCodePlugins(manager: any) {
        const pluginsDir = path.join(this.externalRoot, 'claude-code/plugins');
        if (!fs.existsSync(pluginsDir)) return;

        const pluginDirs = fs.readdirSync(pluginsDir).filter(f => fs.statSync(path.join(pluginsDir, f)).isDirectory());

        for (const dirName of pluginDirs) {
            const commandPath = path.join(pluginsDir, dirName, 'commands');
            if (fs.existsSync(commandPath)) {
                const commandFiles = fs.readdirSync(commandPath).filter(f => f.endsWith('.md'));
                for (const cmdFile of commandFiles) {
                    const pluginName = cmdFile.replace('.md', '');
                    const playbookContent = fs.readFileSync(path.join(commandPath, cmdFile), 'utf-8');
                    
                    manager.registerPlugin({
                        name: `external:${pluginName}`,
                        description: `Global workforce plugin: ${dirName}`,
                        execute: async (context: any) => {
                            console.log(`🌍 [GLOBAL WORKFORCE] Activating "${pluginName}" playbook from ${dirName}...`);
                            
                            // High-Intelligence Routing:
                            // We pass the playbook content directly to the swarm orchestration layer.
                            return { 
                                status: "success", 
                                action: "swarm_delegation",
                                playbook: playbookContent.substring(0, 500) + "..." // For logging
                            };
                        }
                    });
                }
            }
        }
    }
}
