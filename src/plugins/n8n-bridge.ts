import { ARGPlugin } from './plugin-manager';
import { ARGBrain } from '../arg-brain';
import { N8NDocumentationMCPServer } from 'n8n-mcp';

/**
 * 🌉 [N8N BRIDGE PLUGIN] v2.0
 * Connects the ARG Swarm to the n8n-mcp backbone for real automation discovery.
 */
export class N8NBridgePlugin implements ARGPlugin {
    name = "n8n-bridge";
    description = "Bridges structural intelligence to n8n automation.";
    private n8nServer: N8NDocumentationMCPServer | null = null;

    constructor(private brain: ARGBrain) {}

    async execute(context: any): Promise<any> {
        const { prompt } = context;
        console.log(`\n🌉 [N8N BRIDGE] Analyzing task for automation potential: "${prompt}"`);

        if (!this.n8nServer) {
            this.n8nServer = new N8NDocumentationMCPServer();
            // Wait for internal initialization (database, etc.)
            await (this.n8nServer as any).initialized;
        }

        // Discovery Phase: Real template and node search
        console.log(`🔍 [N8N] Searching for relevant templates and nodes...`);
        
        const nodes = await (this.n8nServer as any).searchNodes(prompt, 5);
        const templates = await (this.n8nServer as any).searchTemplates(prompt, 3);
        
        console.log(`✅ [N8N] Found ${nodes.length} nodes and ${templates.length} templates.`);

        return {
            status: "success",
            recommendation: "Injecting n8n_arg_fusion context into the automation pipeline.",
            nodes,
            templates
        };
    }
}
