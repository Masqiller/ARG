---
source_file: "src/n8n-bridge.ts"
type: "code"
community: "Community None"
degree: 4
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# N8NBridge

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["N8NBridge"]:::centerNode
    center -->|"contains"| N_src_n8n_bridge_ts["n8n-bridge.ts"]
    center -->|"method"| N_src_n8n_bridge_n8nbridge_constructor[".constructor[]"]
    center -->|"method"| N_src_n8n_bridge_n8nbridge_init[".init[]"]
    center -->|"method"| N_src_n8n_bridge_n8nbridge_gettools[".getTools[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_49]] - `method` [EXTRACTED]
- [[.getTools()]] - `method` [EXTRACTED]
- [[.init()_1]] - `method` [EXTRACTED]
- [[n8n-bridge.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[N8NBridge]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None