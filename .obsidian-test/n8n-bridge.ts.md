---
source_file: "src/n8n-bridge.ts"
type: "code"
community: "Community None"
degree: 1
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# n8n-bridge.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["n8n-bridge.ts"]:::centerNode
    center -->|"contains"| N_src_n8n_bridge_n8nbridge["N8NBridge"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[N8NBridge]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[n8n-bridge.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None