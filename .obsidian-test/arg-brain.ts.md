---
source_file: "src/arg-brain.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# arg-brain.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["arg-brain.ts"]:::centerNode
    center -->|"imports_from"| N_src_mcp_server_ts["mcp-server.ts"]
    center -->|"contains"| N_src_arg_brain_argbrain["ARGBrain"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ARGBrain]] - `contains` [EXTRACTED]
- [[mcp-server.ts_1]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[arg-brain.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None