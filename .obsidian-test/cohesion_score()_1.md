---
source_file: "vendor/graphify/worked/mixed-corpus/raw/cluster.py"
type: "code"
community: "Community None"
degree: 3
location: "L92"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cohesion_score()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["cohesion_score[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_mixed_corpus_raw_cluster_py["cluster.py"]
    center -->|"calls"| N_raw_cluster_score_all["score_all[]"]
    center -->|"rationale_for"| N_raw_cluster_rationale_93["Ratio of actual intra-community edges to maximum possible."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Ratio of actual intra-community edges to maximum possible._1]] - `rationale_for` [EXTRACTED]
- [[cluster.py_1]] - `contains` [EXTRACTED]
- [[score_all()_1]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cohesion_score()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None