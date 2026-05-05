---
source_file: "vendor/graphify/graphify/cluster.py"
type: "code"
community: "Community None"
degree: 4
location: "L138"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cohesion_score()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["cohesion_score[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_cluster_py["cluster.py"]
    center -->|"calls"| N_graphify_cluster_cluster["cluster[]"]
    center -->|"calls"| N_graphify_cluster_score_all["score_all[]"]
    center -->|"rationale_for"| N_graphify_cluster_rationale_139["Ratio of actual intra-community edges to maximum possible."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Ratio of actual intra-community edges to maximum possible.]] - `rationale_for` [EXTRACTED]
- [[cluster()]] - `calls` [EXTRACTED]
- [[cluster.py]] - `contains` [EXTRACTED]
- [[score_all()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cohesion_score()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None