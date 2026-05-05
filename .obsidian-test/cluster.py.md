---
source_file: "vendor/graphify/graphify/cluster.py"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cluster.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["cluster.py"]:::centerNode
    center -->|"contains"| N_graphify_cluster_suppress_output["_suppress_output[]"]
    center -->|"contains"| N_graphify_cluster_partition["_partition[]"]
    center -->|"contains"| N_graphify_cluster_cluster["cluster[]"]
    center -->|"contains"| N_graphify_cluster_split_community["_split_community[]"]
    center -->|"contains"| N_graphify_cluster_cohesion_score["cohesion_score[]"]
    center -->|"contains"| N_graphify_cluster_score_all["score_all[]"]
    center -->|"rationale_for"| N_graphify_cluster_rationale_1["Community detection on NetworkX graphs. Uses Leiden [graspologic] if available,"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Community detection on NetworkX graphs. Uses Leiden (graspologic) if available,]] - `rationale_for` [EXTRACTED]
- [[_partition()]] - `contains` [EXTRACTED]
- [[_split_community()]] - `contains` [EXTRACTED]
- [[_suppress_output()]] - `contains` [EXTRACTED]
- [[cluster()]] - `contains` [EXTRACTED]
- [[cohesion_score()]] - `contains` [EXTRACTED]
- [[score_all()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cluster.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None