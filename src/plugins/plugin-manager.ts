import { ARGBrain } from '../arg-brain';

export interface ARGPlugin {
    name: string;
    description: string;
    execute(context: any): Promise<any>;
}

export class PluginManager {
    private plugins: Map<string, ARGPlugin> = new Map();

    constructor(private brain: ARGBrain) {}

    public registerPlugin(plugin: ARGPlugin) {
        console.log(`🔌 [PLUGIN MANAGER] Registering: ${plugin.name}`);
        this.plugins.set(plugin.name, plugin);
    }

    public async runPlugin(name: string, context: any): Promise<any> {
        const plugin = this.plugins.get(name);
        if (!plugin) throw new Error(`Plugin ${name} not found.`);
        
        console.log(`🚀 [PLUGIN EXECUTION] Starting ${name}...`);
        return await plugin.execute({ ...context, brain: this.brain });
    }

    public listPlugins() {
        return Array.from(this.plugins.values()).map(p => ({
            name: p.name,
            description: p.description
        }));
    }
}
