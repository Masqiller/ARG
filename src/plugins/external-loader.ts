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

    /**
     * Scans the superpowers/skills directory and registers each skill as an ARG Plugin.
     * Extracts deep metadata from SKILL.md for surgical swarm selection.
     */
    public loadSuperpowers(manager: any) {
        const skillsDir = path.join(this.externalRoot, 'superpowers/skills');
        if (!fs.existsSync(skillsDir)) return;

        const skillDirs = fs.readdirSync(skillsDir).filter(f => fs.statSync(path.join(skillsDir, f)).isDirectory());

        for (const dirName of skillDirs) {
            const skillPath = path.join(skillsDir, dirName, 'SKILL.md');
            if (fs.existsSync(skillPath)) {
                const content = fs.readFileSync(skillPath, 'utf-8');
                
                // Extract name/description from YAML frontmatter or first header
                const nameMatch = content.match(/name:\s*(.*)/i) || content.match(/^#\s*(.*)/m);
                const descMatch = content.match(/description:\s*(.*)/i) || content.match(/^#\s.*\n\n(.*)/m);
                
                const skillName = nameMatch ? nameMatch[1].trim() : dirName;
                const skillDesc = descMatch ? descMatch[1].trim() : `Superpower skill: ${dirName}`;
                
                manager.registerPlugin({
                    name: `external:superpowers:${dirName}`,
                    displayName: skillName,
                    description: skillDesc,
                    execute: async (context: any) => {
                        console.log(`🦸 [SUPERPOWERS] Activating high-leverage skill "${skillName}"...`);
                        return { 
                            status: "success", 
                            action: "superpower_delegation",
                            playbook: content.substring(0, 1000) // Increased playbook depth
                        };
                    }
                });
            }
        }
    }
}
