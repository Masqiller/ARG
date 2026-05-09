#!/usr/bin/env node
const path = require('path');
const fs = require('fs');

// Resolve the path to the compiled MCP server
const mcpServerPath = path.join(__dirname, '../dist/mcp-server.js');

if (!fs.existsSync(mcpServerPath)) {
  console.error("Error: dist/mcp-server.js not found. Please run 'npm run build' first.");
  process.exit(1);
}

// Execute the MCP server
require(mcpServerPath);
