---
source_file: "src/vibe-router.ts"
type: "code"
community: "Community None"
degree: 10
location: "L12"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# VibeRouter

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["VibeRouter"]:::centerNode
    center -->|"imports"| N_src_mcp_server_ts["mcp-server.ts"]
    center -->|"contains"| N_src_vibe_router_ts["vibe-router.ts"]
    center -->|"method"| N_src_vibe_router_viberouter_constructor[".constructor[]"]
    center -->|"method"| N_src_vibe_router_viberouter_executevibe[".executeVibe[]"]
    center -->|"method"| N_src_vibe_router_viberouter_triggerrufloexecution[".triggerRufloExecution[]"]
    center -->|"imports"| N_scripts_recursive_audit_ts["recursive_audit.ts"]
    center -->|"imports"| N_scripts_vibe_benchmark_trigger_ts["vibe_benchmark_trigger.ts"]
    center -->|"imports"| N_scripts_brutal_debug_arg_ts["brutal_debug_arg.ts"]
    center -->|"imports"| N_scripts_test_n8n_fusion_ts["test_n8n_fusion.ts"]
    center -->|"imports"| N_scripts_infinite_arg_loop_ts["infinite_arg_loop.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_51]] - `method` [EXTRACTED]
- [[.executeVibe()]] - `method` [EXTRACTED]
- [[.triggerRufloExecution()]] - `method` [EXTRACTED]
- [[brutal_debug_arg.ts]] - `imports` [EXTRACTED]
- [[infinite_arg_loop.ts]] - `imports` [EXTRACTED]
- [[mcp-server.ts_1]] - `imports` [EXTRACTED]
- [[recursive_audit.ts]] - `imports` [EXTRACTED]
- [[test_n8n_fusion.ts]] - `imports` [EXTRACTED]
- [[vibe-router.ts]] - `contains` [EXTRACTED]
- [[vibe_benchmark_trigger.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[VibeRouter]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None