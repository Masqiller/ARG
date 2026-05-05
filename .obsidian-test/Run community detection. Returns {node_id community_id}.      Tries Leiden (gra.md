---
source_file: "vendor/graphify/graphify/cluster.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L22"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Run community detection. Returns {node_id: community_id}.      Tries Leiden (gra

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Run community detection. Returns {node_id: community_id}.      Tries Leiden [gra"]:::centerNode
    center -->|"rationale_for"| N_graphify_cluster_partition["_partition[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_partition()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Run community detection. Returns {node_id community_id}.      Tries Leiden (gra]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None