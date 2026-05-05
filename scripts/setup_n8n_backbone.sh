#!/bin/bash
# ARG n8n Backbone Setup - Zero-Config Automation
# Mandate: Talk Less, Do More.

set -e

echo "🌊 [ARG] Injecting n8n-mcp Backbone..."

# 1. Global Install
echo "📦 [1/3] Installing n8n-mcp globally..."
npm install -g n8n-mcp --quiet

# 2. Path Resolution
GLOBAL_ROOT=$(npm root -g)
N8N_MCP_PATH="$GLOBAL_ROOT/n8n-mcp/dist/mcp/index.js"

if [ ! -f "$N8N_MCP_PATH" ]; then
    echo "❌ Error: n8n-mcp not found at $N8N_MCP_PATH"
    exit 1
fi

# 3. Config Injection (Antigravity)
CONFIG_PATH="$HOME/.gemini/antigravity/mcp_config.json"
echo "🛠️ [2/3] Updating Antigravity MCP Config..."

# Ensure directory exists
mkdir -p "$(dirname "$CONFIG_PATH")"

# If config is empty or doesn't exist, create it
if [ ! -s "$CONFIG_PATH" ]; then
    echo '{"mcpServers": {}}' > "$CONFIG_PATH"
fi

# Inject using jq (if available) or a simple python script
python3 -c "
import json, os
path = '$CONFIG_PATH'
with open(path, 'r') as f:
    config = json.load(f)
if 'mcpServers' not in config: config['mcpServers'] = {}
config['mcpServers']['n8n-mcp'] = {
    'command': 'node',
    'args': ['$N8N_MCP_PATH'],
    'env': {
        'MCP_MODE': 'stdio',
        'LOG_LEVEL': 'error',
        'DISABLE_CONSOLE_OUTPUT': 'true',
        'N8N_API_URL': 'http://localhost:5678',
        'N8N_BASE_URL': 'http://localhost:5678',
        'N8N_API_KEY': ''
    }
}
with open(path, 'w') as f:
    json.dump(config, f, indent=2)
"

# 4. Agent Instruction Layer
echo "🧠 [3/3] Deploying AGENTS.md instruction layer..."
cat << 'EOF' > AGENTS.md
You are an expert in n8n automation software using n8n-MCP tools integrated via the ARG Swarm. Your role is to design, build, and validate n8n workflows with maximum accuracy and efficiency.

## Core Principles

### 1. Silent Execution
CRITICAL: Execute tools without commentary. Only respond AFTER all tools complete.

### 2. Parallel Execution
When operations are independent, execute them in parallel for maximum performance.

### 3. Templates First
ALWAYS check templates before building from scratch (2,709 available).

### 4. Multi-Level Validation
Use validate_node(mode='minimal') → validate_node(mode='full') → validate_workflow pattern.

### 5. Never Trust Defaults
⚠️ CRITICAL: Default parameter values are the #1 source of runtime failures.
ALWAYS explicitly configure ALL parameters that control node behavior.

## Workflow Process

1. **Start**: Call `tools_documentation()` for best practices
2. **Template Discovery Phase**: Call `search_templates` (parallel search by task/metadata/nodes)
3. **Node Discovery**: Call `search_nodes` (if no template found)
4. **Configuration Phase**: Call `get_node` (detail: standard/full)
5. **Validation Phase**: Call `validate_node` (minimal → full)
6. **Building Phase**: Construct workflow connection by connection
7. **Workflow Validation**: Call `validate_workflow` before deployment
8. **Deployment**: Call `n8n_create_workflow` (requires N8N_API_KEY)

---
**Build the future with the ARG-n8n Hybrid Backbone.**
EOF

echo "✅ [ARG] Backbone Integrated. Restart Antigravity to activate."
