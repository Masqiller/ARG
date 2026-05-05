---
source_file: "src/auto-graph.ts"
type: "code"
community: "Community None"
degree: 5
location: "L9"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# AutoGraph

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["AutoGraph"]:::centerNode
    center -->|"contains"| N_src_auto_graph_ts["auto-graph.ts"]
    center -->|"method"| N_src_auto_graph_autograph_constructor[".constructor[]"]
    center -->|"method"| N_src_auto_graph_autograph_startwatching[".startWatching[]"]
    center -->|"method"| N_src_auto_graph_autograph_checkandrefresh[".checkAndRefresh[]"]
    center -->|"method"| N_src_auto_graph_autograph_triggerupdate[".triggerUpdate[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.checkAndRefresh()]] - `method` [EXTRACTED]
- [[.constructor()_53]] - `method` [EXTRACTED]
- [[.startWatching()]] - `method` [EXTRACTED]
- [[.triggerUpdate()]] - `method` [EXTRACTED]
- [[auto-graph.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[AutoGraph]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None