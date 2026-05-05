---
source_file: "src/arg-brain.ts"
type: "code"
community: "Community None"
degree: 19
location: "L11"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ARGBrain

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 19

## Architecture Graph
```mermaid
graph LR
    center["ARGBrain"]:::centerNode
    center -->|"imports"| N_src_mcp_server_ts["mcp-server.ts"]
    center -->|"imports"| N_src_vibe_router_ts["vibe-router.ts"]
    center -->|"contains"| N_src_arg_brain_ts["arg-brain.ts"]
    center -->|"method"| N_src_arg_brain_argbrain_constructor[".constructor[]"]
    center -->|"method"| N_src_arg_brain_argbrain_loadstate[".loadState[]"]
    center -->|"method"| N_src_arg_brain_argbrain_savestate[".saveState[]"]
    center -->|"method"| N_src_arg_brain_argbrain_loadgraph[".loadGraph[]"]
    center -->|"method"| N_src_arg_brain_argbrain_tokenize[".tokenize[]"]
    center -->|"method"| N_src_arg_brain_argbrain_buildhybridindex[".buildHybridIndex[]"]
    center -->|"method"| N_src_arg_brain_argbrain_calculatecosinesimilarity[".calculateCosineSimilarity[]"]
    center -->|"method"| N_src_arg_brain_argbrain_prunecontext[".pruneContext[]"]
    center -->|"method"| N_src_arg_brain_argbrain_updatestate[".updateState[]"]
    center -->|"method"| N_src_arg_brain_argbrain_getstate[".getState[]"]
    center -->|"imports"| N_src_plugins_security_council_ts["security-council.ts"]
    center -->|"imports"| N_src_plugins_n8n_bridge_ts["n8n-bridge.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.buildHybridIndex()]] - `method` [EXTRACTED]
- [[.calculateCosineSimilarity()]] - `method` [EXTRACTED]
- [[.constructor()_52]] - `method` [EXTRACTED]
- [[.getState()]] - `method` [EXTRACTED]
- [[.loadGraph()]] - `method` [EXTRACTED]
- [[.loadState()]] - `method` [EXTRACTED]
- [[.pruneContext()]] - `method` [EXTRACTED]
- [[.saveState()]] - `method` [EXTRACTED]
- [[.tokenize()]] - `method` [EXTRACTED]
- [[.updateState()]] - `method` [EXTRACTED]
- [[arg-brain.ts]] - `contains` [EXTRACTED]
- [[audit_n8n_backbone.ts]] - `imports` [EXTRACTED]
- [[mcp-server.ts_1]] - `imports` [EXTRACTED]
- [[n8n-bridge.ts_1]] - `imports` [EXTRACTED]
- [[plugin-manager.ts]] - `imports` [EXTRACTED]
- [[recursive_audit.ts]] - `imports` [EXTRACTED]
- [[security-council.ts]] - `imports` [EXTRACTED]
- [[vibe-harden.ts]] - `imports` [EXTRACTED]
- [[vibe-router.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ARGBrain]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None