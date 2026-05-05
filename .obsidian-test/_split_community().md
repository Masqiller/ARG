---
source_file: "vendor/graphify/graphify/cluster.py"
type: "code"
community: "Community None"
degree: 4
location: "L120"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _split_community()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["_split_community[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_cluster_py["cluster.py"]
    center -->|"calls"| N_graphify_cluster_partition["_partition[]"]
    center -->|"calls"| N_graphify_cluster_cluster["cluster[]"]
    center -->|"rationale_for"| N_graphify_cluster_rationale_121["Run a second Leiden pass on a community subgraph to split it further."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Run a second Leiden pass on a community subgraph to split it further.]] - `rationale_for` [EXTRACTED]
- [[_partition()]] - `calls` [EXTRACTED]
- [[cluster()]] - `calls` [EXTRACTED]
- [[cluster.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_split_community()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None