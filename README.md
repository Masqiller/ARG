# 🧠 ARG — Autonomous Recursive Graphify

**A knowledge-graph-driven context pruning and skill routing system for AI coding agents.**

![Status](https://img.shields.io/badge/Status-Beta-yellow?style=for-the-badge)
![Skills](https://img.shields.io/badge/Skills-5,000%2B_Indexed-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-black?style=for-the-badge)
![Node](https://img.shields.io/badge/Node-%3E%3D18-green?style=for-the-badge)

---

## Overview

ARG is an MCP (Model Context Protocol) server that reduces LLM token consumption by using **graph topology** to select only the relevant files and skills for a given task.

Instead of feeding an entire codebase into an LLM, ARG:

1. **Builds a knowledge graph** of your project using [Graphify](https://github.com/safishamsi/graphify)
2. **Prunes context** using TF-IDF vectors and community-based clustering — typically reducing input tokens by 70-90%
3. **Routes expert skills** from a 5,000+ skill library to match your project's tech stack
4. **Persists session memory** across IDE restarts via [Claude-Mem](https://github.com/thedotmack/claude-mem)

---

## Installation

### Prerequisites

- **Node.js** >= 18
- **Python 3** (for Graphify and the Python skill bridge)
- **Git**

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/Masqiller/ARG.git
cd awwesome-ruflo-graphify

# 2. Install dependencies
npm install

# 3. Build
npm run build

# 4. Full setup (installs Graphify, Claude-Mem, and initializes the database)
npm run setup
```

### Manual Setup

If you prefer step-by-step control:

```bash
# Install Node dependencies
npm install

# Build TypeScript
npm run build

# Initialize the skill database (requires graphify-out/ with vectors)
python3 scripts/arg_import_skills_to_db.py

# Make the vibe CLI executable
chmod +x bin/vibe
```

---

## Deployment as MCP Server

ARG integrates with any IDE that supports the Model Context Protocol.

### Claude Code

```bash
# Add the main MCP server (TypeScript, includes all tools)
claude mcp add awwesome-ruflo-graphify -- node /absolute/path/to/awwesome-ruflo-graphify/dist/mcp-server.js

# Or add the Python bridge for skill search
claude mcp add arg-python-bridge -- python3 /absolute/path/to/awwesome-ruflo-graphify/scripts/arg_skill_server.py
```

### Cursor / Windsurf

Add a new MCP server in your IDE settings:

| Field | Value |
|:---|:---|
| **Type** | `command` |
| **Command** | `node` |
| **Args** | `/absolute/path/to/awwesome-ruflo-graphify/dist/mcp-server.js` |

---

## Available MCP Tools

| Tool | Description |
|:---|:---|
| `graphify_update` | Refresh the knowledge graph for the current directory |
| `read_god_nodes` | Read the structural core (highest-degree files) of the codebase |
| `get_node_neighbors` | Find files connected to a specific node in the graph |
| `recommend_skills_for_task` | Get ranked skill recommendations for a natural-language task |
| `read_skill` | Read the full content of a specific expert playbook |
| `generate_agent_briefing` | Generate a complete briefing combining graph context + skills |
| `arg_session_init` | Initialize a persistent memory session |
| `arg_memory_save` | Save key-value context to session memory |
| `arg_memory_retrieve` | Retrieve context using semantic similarity pruning |
| `arg_cost_audit` | Analyze token usage via CodeBurn |
| `vibe_execute` | Run the full orchestration pipeline for a task |
| `n8n_arg_fusion` | Bridge ARG context with n8n automation workflows |

---

## CLI Commands

```bash
# Run a task through the orchestrator
./bin/vibe run "refactor the authentication module"

# Print system status and active workforce
./bin/vibe discover

# Analyze token savings
./bin/vibe burn
```

---

## Architecture

### Context Pruning (ARG Brain)

The core algorithm in `src/arg-brain.ts`:

1. **TF-IDF Vectorization** — Every node in the graph gets a sparse TF-IDF vector
2. **Community Centroids** — Nodes are grouped by Graphify's community detection; each community gets a centroid vector
3. **Two-Phase Search** — First searches community centroids (O(C)), then deep-searches only the winning communities (O(k)) — avoiding full O(N) scans

### Skill Routing

`src/skill-mapper.ts` uses weighted heuristics to match skills to your codebase:

- File extensions in the graph → language skills
- Framework keywords → framework-specific playbooks
- Graph complexity → meta-skills (batch refactoring, debugging)
- Category budgets prevent any single domain from dominating

### Plugin System

The `VibeRouter` registers internal plugins for specialized domains:

- **Security Council** — Multi-perspective security audit
- **Humanization Council** — AI writing pattern detection
- **N8N Bridge** — Workflow automation integration
- **Adaptive Learning** — Evolves skill weights based on usage

---

## Project Structure

```
awwesome-ruflo-graphify/
├── bin/              # CLI entry points (vibe, arg-mcp.js)
├── src/              # TypeScript source
│   ├── mcp-server.ts     # MCP server (main entry)
│   ├── arg-brain.ts      # TF-IDF pruning engine
│   ├── skill-mapper.ts   # Weighted skill recommender
│   ├── vibe-router.ts    # Orchestration pipeline
│   ├── config.ts         # Central path configuration
│   └── plugins/          # Domain-specific plugins
├── scripts/          # Python utilities and TS tooling
├── vendor/           # Cloned dependencies (Graphify, Claude-Mem)
├── init.sh           # Full setup script
└── package.json
```

---

## Known Limitations

> [!NOTE]
> This project is in **beta**. The following are known gaps:

- **No automated tests** — Test framework has not been set up yet
- **No CI/CD pipeline** — Builds are manual
- **Swarm execution is simulated** — The orchestrator logs agent assignments but does not spawn real subprocesses or make LLM calls
- **Cost metrics use estimates** — Token savings ratios are calculated from graph pruning, but dollar amounts use approximations

---

## Credits

- **[Graphify](https://github.com/safishamsi/graphify)** — Graph topology engine
- **[Ruflo](https://github.com/ruvnet/ruflo)** — Agent execution framework
- **[Claude-Mem](https://github.com/thedotmack/claude-mem)** — Persistent semantic memory
- **[Antigravity Skills](https://github.com/sickn33/antigravity-awesome-skills)** — 5,000+ expert playbooks

---

## License

MIT