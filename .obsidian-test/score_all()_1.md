---
source_file: "vendor/graphify/worked/mixed-corpus/raw/cluster.py"
type: "code"
community: "Community None"
degree: 2
location: "L103"
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
    center -->|"contains"| N_vendor_graphify_worked_mixed_corpus_raw_cluster_py["cluster.py"]
    center -->|"calls"| N_raw_cluster_cohesion_score["cohesion_score[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cluster.py_1]] - `contains` [EXTRACTED]
- [[cohesion_score()_1]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[score_all()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None