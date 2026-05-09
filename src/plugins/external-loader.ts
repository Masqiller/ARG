import * as fs from 'fs';
import * as path from 'path';
import { ARGPlugin } from './plugin-manager';
import { EXTERNAL_PLUGINS_DIR } from '../config.js';

/**
 * 🌍 [UNIVERSAL EXTERNAL LOADER] v2.5
 * Deep integration for Claude-Code, Superpowers, and Caveman workforce.
 */
export class ExternalPluginLoader {
    private externalRoot = EXTERNAL_PLUGINS_DIR;

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

    /**
     * Scans the base external_plugins directory for any generic skills or playbooks.
     */
    public loadCustomPlugins(manager: any) {
        if (!fs.existsSync(this.externalRoot)) return;

        const items = fs.readdirSync(this.externalRoot);
        for (const item of items) {
            const itemPath = path.join(this.externalRoot, item);
            if (!fs.statSync(itemPath).isDirectory()) continue;
            
            // Skip known directories already handled
            if (['claude-code', 'caveman', 'superpowers'].includes(item)) continue;

            const skillFile = path.join(itemPath, 'SKILL.md');
            const mdFiles = fs.readdirSync(itemPath).filter(f => f.endsWith('.md'));

            if (fs.existsSync(skillFile)) {
                this.registerSingleMdPlugin(manager, skillFile, `custom:${item}`, item);
            } else if (mdFiles.length > 0) {
                // If no SKILL.md, register the first .md as the playbook
                this.registerSingleMdPlugin(manager, path.join(itemPath, mdFiles[0]), `custom:${item}`, item);
            }
        }
    }

    private registerSingleMdPlugin(manager: any, filePath: string, prefix: string, dirName: string) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const nameMatch = content.match(/name:\s*(.*)/i) || content.match(/^#\s*(.*)/m);
        const descMatch = content.match(/description:\s*(.*)/i) || content.match(/^#\s.*\n\n(.*)/m);
        
        const skillName = nameMatch ? nameMatch[1].trim() : dirName;
        const skillDesc = descMatch ? descMatch[1].trim() : `Custom workforce plugin: ${dirName}`;
        
        manager.registerPlugin({
            name: `external:${prefix}`,
            displayName: skillName,
            description: skillDesc,
            execute: async (context: any) => {
                console.log(`🌀 [CUSTOM WORKFORCE] Activating "${skillName}"...`);
                return { 
                    status: "success", 
                    action: "custom_delegation",
                    playbook: content
                };
            }
        });
    }
}
