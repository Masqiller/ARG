---
source_file: "src/arg-session-manager.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# arg-session-manager.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["arg-session-manager.ts"]:::centerNode
    center -->|"contains"| N_src_arg_session_manager_argsessionmanager["ARGSessionManager"]
    center -->|"imports_from"| N_src_mcp_server_ts["mcp-server.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ARGSessionManager]] - `contains` [EXTRACTED]
- [[mcp-server.ts_1]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[arg-session-manager.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None