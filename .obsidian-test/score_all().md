---
source_file: "vendor/graphify/graphify/cluster.py"
type: "code"
community: "Community None"
degree: 2
location: "L149"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# score_all()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["score_all[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_cluster_py["cluster.py"]
    center -->|"calls"| N_graphify_cluster_cohesion_score["cohesion_score[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cluster.py]] - `contains` [EXTRACTED]
- [[cohesion_score()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[score_all()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None