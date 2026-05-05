---
source_file: "vendor/graphify/worked/mixed-corpus/raw/cluster.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L93"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Ratio of actual intra-community edges to maximum possible.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Ratio of actual intra-community edges to maximum possible."]:::centerNode
    center -->|"rationale_for"| N_raw_cluster_cohesion_score["cohesion_score[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cohesion_score()_1]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Ratio of actual intra-community edges to maximum possible._1]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None