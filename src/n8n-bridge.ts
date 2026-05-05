import { N8NDocumentationMCPServer } from "n8n-mcp";
import { ListToolsRequestSchema, CallToolRequestSchema } from "@modelcontextprotocol/sdk/types.js";

/**
 * ARG n8n Hybrid Bridge
 * Fuses the n8n-mcp toolkit into the ARG Swarm.
 */
export class N8NBridge {
    private n8nServer: N8NDocumentationMCPServer;
    private initialized = false;

    constructor() {
        // Initialize with default instance context (uses env vars if present)
        this.n8nServer = new N8NDocumentationMCPServer();
    }

    async init() {
        if (this.initialized) return;
        // The n8nServer.run() would start a standalone server on stdio.
        // We want to extract the handlers instead.
        // However, the handlers are private in the library.
        // Workaround: We will use a Mock Transport to capture the tools.
        this.initialized = true;
    }

    async getTools() {
        // Since we can't easily extract private handlers, 
        // we'll implement a fallback: run n8n-mcp as a separate process 
        // or monkey-patch the server.
        // For ARG, we'll take the cleaner route: 
        // We'll define the core n8n tools here and proxy the execution.
        return [
            {
                name: "n8n_list_nodes",
                description: "List all available n8n nodes.",
                inputSchema: { type: "object", properties: {} }
            },
            {
                name: "n8n_search_nodes",
                description: "Search for n8n nodes by name or functionality.",
                inputSchema: {
                    type: "object",
                    properties: {
                        query: { type: "string" }
                    },
                    required: ["query"]
                }
            },
            {
                name: "n8n_get_template",
                description: "Get a specific n8n workflow template.",
                inputSchema: {
                    type: "object",
                    properties: {
                        template_id: { type: "string" }
                    },
                    required: ["template_id"]
                }
            }
        ];
    }
}
