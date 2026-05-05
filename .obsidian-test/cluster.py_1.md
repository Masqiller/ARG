---
source_file: "vendor/graphify/worked/mixed-corpus/raw/cluster.py"
type: "code"
community: "Community None"
degree: 6
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
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["cluster.py"]:::centerNode
    center -->|"contains"| N_raw_cluster_build_graph["build_graph[]"]
    center -->|"contains"| N_raw_cluster_cluster["cluster[]"]
    center -->|"contains"| N_raw_cluster_split_community["_split_community[]"]
    center -->|"contains"| N_raw_cluster_cohesion_score["cohesion_score[]"]
    center -->|"contains"| N_raw_cluster_score_all["score_all[]"]
    center -->|"rationale_for"| N_raw_cluster_rationale_1["Leiden community detection on NetworkX graphs. Splits oversized communities. Ret"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Leiden community detection on NetworkX graphs. Splits oversized communities. Ret]] - `rationale_for` [EXTRACTED]
- [[_split_community()_1]] - `contains` [EXTRACTED]
- [[build_graph()_1]] - `contains` [EXTRACTED]
- [[cluster()_1]] - `contains` [EXTRACTED]
- [[cohesion_score()_1]] - `contains` [EXTRACTED]
- [[score_all()_1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cluster.py_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None