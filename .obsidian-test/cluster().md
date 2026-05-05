---
source_file: "vendor/graphify/graphify/cluster.py"
type: "code"
community: "Community None"
degree: 5
location: "L61"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cluster()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["cluster[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_cluster_py["cluster.py"]
    center -->|"calls"| N_graphify_cluster_partition["_partition[]"]
    center -->|"calls"| N_graphify_cluster_split_community["_split_community[]"]
    center -->|"calls"| N_graphify_cluster_cohesion_score["cohesion_score[]"]
    center -->|"rationale_for"| N_graphify_cluster_rationale_62["Run Leiden community detection. Returns {community_id: [node_ids]}.      Communi"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Run Leiden community detection. Returns {community_id node_ids}.      Communi]] - `rationale_for` [EXTRACTED]
- [[_partition()]] - `calls` [EXTRACTED]
- [[_split_community()]] - `calls` [EXTRACTED]
- [[cluster.py]] - `contains` [EXTRACTED]
- [[cohesion_score()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cluster()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None