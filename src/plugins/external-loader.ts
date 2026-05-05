import * as fs from 'fs';
import * as path from 'path';
import { ARGPlugin } from './plugin-manager';

/**
 * 🌍 [UNIVERSAL EXTERNAL LOADER] v2.5
 * Deep integration for Claude-Code, Superpowers, and Caveman workforce.
 */
export class ExternalPluginLoader {
    private externalRoot = '/home/smit/Downloads/Fusion/external_plugins';

    constructor() {}

    /**
     * Scans the claude-code/plugins directory and registers each command as an ARG Plugin.
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
                            return { 
                                status: "success", 
                                action: "swarm_delegation",
                                playbook: playbookContent.substring(0, 500) + "..."
                            };
                        }
                    });
                }
            }
        }
    }

    /**
     * Scans the caveman/agents directory and registers each agent as an ARG Plugin.
     */
    public loadCavemanAgents(manager: any) {
        const agentsDir = path.join(this.externalRoot, 'caveman/agents');
        if (!fs.existsSync(agentsDir)) return;

        const agentFiles = fs.readdirSync(agentsDir).filter(f => f.endsWith('.md'));

        for (const agentFile of agentFiles) {
            const agentName = agentFile.replace('.md', '');
            const playbookContent = fs.readFileSync(path.join(agentsDir, agentFile), 'utf-8');
            
            manager.registerPlugin({
                name: `external:caveman:${agentName}`,
                description: `High-efficiency caveman agent: ${agentName}`,
                execute: async (context: any) => {
                    console.log(`🪨 [CAVEMAN WORKFORCE] Activating high-efficiency agent "${agentName}"...`);
                    return { 
                        status: "success", 
                        action: "caveman_swarm_delegation",
                        playbook: playbookContent.substring(0, 500) + "..."
                    };
                }
            });
        }
    }
}
