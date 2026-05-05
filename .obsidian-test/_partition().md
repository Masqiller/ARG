---
source_file: "vendor/graphify/graphify/cluster.py"
type: "code"
community: "Community None"
degree: 5
location: "L21"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _partition()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["_partition[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_cluster_py["cluster.py"]
    center -->|"calls"| N_graphify_cluster_suppress_output["_suppress_output[]"]
    center -->|"calls"| N_graphify_cluster_cluster["cluster[]"]
    center -->|"calls"| N_graphify_cluster_split_community["_split_community[]"]
    center -->|"rationale_for"| N_graphify_cluster_rationale_22["Run community detection. Returns {node_id: community_id}.      Tries Leiden [gra"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Run community detection. Returns {node_id community_id}.      Tries Leiden (gra]] - `rationale_for` [EXTRACTED]
- [[_split_community()]] - `calls` [EXTRACTED]
- [[_suppress_output()]] - `calls` [EXTRACTED]
- [[cluster()]] - `calls` [EXTRACTED]
- [[cluster.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_partition()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None