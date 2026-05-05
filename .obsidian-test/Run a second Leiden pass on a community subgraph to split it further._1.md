---
source_file: "vendor/graphify/worked/mixed-corpus/raw/cluster.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L73"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Run a second Leiden pass on a community subgraph to split it further.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Run a second Leiden pass on a community subgraph to split it further."]:::centerNode
    center -->|"rationale_for"| N_raw_cluster_split_community["_split_community[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_split_community()_1]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Run a second Leiden pass on a community subgraph to split it further._1]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None