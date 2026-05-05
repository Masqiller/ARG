---
source_file: "vendor/graphify/worked/mixed-corpus/raw/cluster.py"
type: "code"
community: "Community None"
degree: 3
location: "L72"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _split_community()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_split_community[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_mixed_corpus_raw_cluster_py["cluster.py"]
    center -->|"calls"| N_raw_cluster_cluster["cluster[]"]
    center -->|"rationale_for"| N_raw_cluster_rationale_73["Run a second Leiden pass on a community subgraph to split it further."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Run a second Leiden pass on a community subgraph to split it further._1]] - `rationale_for` [EXTRACTED]
- [[cluster()_1]] - `calls` [EXTRACTED]
- [[cluster.py_1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_split_community()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None