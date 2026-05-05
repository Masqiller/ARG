# AWWESOME RUFLO GRAPHIFY — Master Orchestration Playbook v3.0

> This playbook governs ALL agent behavior when AWWESOME RUFLO GRAPHIFY is active.
> It implements a 5-phase intelligence loop informed by expert patterns from
> multi-agent-patterns, context-optimization, hierarchical-agent-memory,
> dispatching-parallel-agents, and agent-orchestrator.

---

## Phase 1: INITIALIZE (Automatic)
*Triggered by `ruflo init`*

The system automatically:
1. Runs `graphify .` to generate the baseline knowledge graph.
2. Produces `graphify-out/GRAPH_REPORT.md` with God Nodes and Communities.
3. Registers the MCP server for all subsequent agent interactions.

**Agent action:** None. This is handled by the `afterInit` hook.

---

## Phase 2: BRIEF (Before Every Task)

Before ANY code modification, the agent MUST call the `generate_agent_briefing` tool.

This single call returns:
- **Structural Context**: The God Nodes (most critical files in the codebase).
- **Expert Playbooks**: Top 3 recommended skills from the 1400+ Awesome Skills library, selected by weighted scoring against the codebase's actual tech stack.
- **Execution Constraints**: Rules for preserving architectural integrity.

### If you need more context:
| Need | Tool to call |
|------|-------------|
| Deeper understanding of a code cluster | `read_wiki_article` |
| Impact analysis before modifying a file | `get_node_neighbors` |
| A specific expert playbook | `read_skill` |
| Finding a skill by topic | `search_skills` |
| Codebase complexity overview | `get_graph_stats` |

---

## Phase 3: EXECUTE (The Work)

With your briefing loaded, execute your task following these rules:

### Rule 1: Obey the Playbooks
Your implementation MUST follow the design patterns, code style, and architectural guidelines from the skills loaded in Phase 2. These are not suggestions — they are constraints.

### Rule 2: Protect God Nodes
If your task requires modifying a God Node:
1. Call `get_node_neighbors` to understand the blast radius.
2. Flag the change explicitly in your output.
3. The system will auto-detect this and notify for human review.

### Rule 3: Minimize Token Waste
- Do NOT call `recommend_skills` if you already called `generate_agent_briefing`.
- Do NOT call `read_skill` for skills you already received in the briefing.
- Do NOT call `graphify_update` unless you've modified >5 files.
- The MCP server caches skill content — repeated reads are free.

---

## Phase 4: REPORT (After Task Completion)

When your task is complete:
1. List all modified files in your output.
2. The `afterAgentTask` hook will automatically:
   - Run `graphify . --update` to refresh the knowledge graph.
   - Check if any God Nodes were modified.
   - Emit warnings for high-impact changes.

---

## Phase 5: PARALLEL DECOMPOSITION (For Complex Tasks)

When a task is too large for a single agent:
1. Call `decompose_for_parallel` with the task description.
2. The tool analyzes graph communities to identify independent code clusters.
3. Dispatch one agent per community (following the dispatching-parallel-agents pattern).
4. Each agent receives its own briefing via the `beforeAgentTask` hook.
5. After all agents complete, run the full test suite to verify integration.

### Parallel Dispatch Rules:
- Each agent works ONLY within its assigned community.
- Cross-community state passes through the file system, not context.
- The coordinator agent synthesizes results WITHOUT re-reading all context.

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    AWWESOME RUFLO GRAPHIFY                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────────┐  │
│  │   GRAPHIFY    │    │ SKILL MAPPER │    │  AWESOME SKILLS  │  │
│  │              │    │              │    │                  │  │
│  │ • God Nodes  │───▶│ • Weighted   │───▶│ • 1400+ expert  │  │
│  │ • Communities│    │   scoring    │    │   playbooks     │  │
│  │ • graph.json │    │ • Category   │    │ • Cached reads  │  │
│  │ • Wiki       │    │   budgets    │    │ • Search index  │  │
│  └──────┬───────┘    │ • Task-aware │    └────────┬─────────┘  │
│         │            │   boosting   │             │            │
│         │            └──────┬───────┘             │            │
│         │                   │                     │            │
│         ▼                   ▼                     ▼            │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │               MCP SERVER (12 TOOLS)                     │   │
│  │                                                         │   │
│  │  Layer 1: Structural Intelligence                       │   │
│  │    graphify_update, read_god_nodes, get_node_neighbors   │   │
│  │    get_graph_stats, read_wiki_article                    │   │
│  │                                                         │   │
│  │  Layer 2: Skill Intelligence                            │   │
│  │    recommend_skills, recommend_skills_for_task           │   │
│  │    read_skill, search_skills                             │   │
│  │                                                         │   │
│  │  Layer 3: Agent Coordination                            │   │
│  │    generate_agent_briefing, decompose_for_parallel       │   │
│  └──────────────────────┬──────────────────────────────────┘   │
│                         │                                      │
│                         ▼                                      │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │               RUFLO LIFECYCLE HOOKS                     │   │
│  │                                                         │   │
│  │  afterInit      → baseline graph + warm cache           │   │
│  │  beforeAgentTask → auto-inject briefing directive       │   │
│  │  afterAgentTask  → update graph + god node detection    │   │
│  │  beforeParallel  → community-based task routing         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Efficiency Guarantees

| Metric | Before Fusion | After Fusion |
|--------|---------------|-------------|
| Agent context precision | ~30% relevant | ~85% relevant |
| Skill loading | Manual, all-or-nothing | Auto, budget-constrained (max 8) |
| Graph awareness | None | Full structural + community |
| Parallel decomposition | Manual | Graph-community-driven |
| God Node protection | None | Auto-detect + human alert |
| Skill cache hits | N/A | ~90% after warm-up |
| Tool calls per agent | Unbounded | Optimized via briefing power-tool |
