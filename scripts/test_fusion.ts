import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { CallToolRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { spawn } from "child_process";
import * as path from 'path';

/**
 * 🧪 [FUSION TEST]
 * This script starts the MCP server and calls the n8n_arg_fusion tool.
 */
async function testFusion() {
    console.log("🧪 Testing n8n_arg_fusion tool...");
    
    const serverPath = path.join(__dirname, '../src/mcp-server.js');
    const child = spawn('node', [serverPath], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    let output = '';
    child.stdout.on('data', (data) => {
        const str = data.toString();
        try {
            const json = JSON.parse(str);
            if (json.method === 'notifications/initialized') return;
            output += str;
        } catch (e) {}
    });

    // Wait for server to start
    await new Promise(resolve => setTimeout(resolve, 3000));

    const request = {
        jsonrpc: "2.0",
        id: 1,
        method: "tools/call",
        params: {
            name: "n8n_arg_fusion",
            arguments: {
                prompt: "Create a security dashboard for the ARG swarm",
                directory: path.join(__dirname, '..')
            }
        }
    };

    child.stdin.write(JSON.stringify(request) + "\n");

    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("\n💎 [FUSION RESULT]:");
    console.log(output);
    
    child.kill();
}

testFusion().catch(console.error);
