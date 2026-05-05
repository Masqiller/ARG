---
name: Graphify Orchestration Workflow
description: A workflow that leverages Graphify structural knowledge prior to executing code modifications.
version: 1.0.0
---

# Graphify Orchestration Workflow

This workflow ensures that Ruflo agents consult the structural knowledge graph (Graphify) before making modifications, particularly to understand architectural dependencies and "God Nodes".

## Phase 1: Structural Baseline Assessment
1. The agent invokes `graphify_query` to locate architectural "God Nodes".
2. The agent reads `GRAPH_REPORT.md` (if it exists) to understand surprising connections and suggested questions.
3. The agent identifies all downstream dependencies of the target files to be modified using `graphify_path`.

## Phase 2: Execution
1. The primary agent makes the necessary code modifications, guided by the dependency awareness obtained in Phase 1.
2. If any "God Node" is modified, the agent MUST flag the change for secondary review (e.g., Security or Architect agent).

## Phase 3: Verification
1. The agent saves all modifications.
2. The `afterAgentTask` hook will automatically trigger a `graphify --update` in the background.
3. The agent optionally triggers a final `graphify_query` to verify that no unintended architectural cycles were introduced.
