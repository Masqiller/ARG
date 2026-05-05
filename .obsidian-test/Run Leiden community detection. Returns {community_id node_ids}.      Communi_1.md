---
source_file: "vendor/graphify/worked/mixed-corpus/raw/cluster.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L28"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Run Leiden community detection. Returns {community_id: [node_ids]}.      Communi

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Run Leiden community detection. Returns {community_id: [node_ids]}.      Communi"]:::centerNode
    center -->|"rationale_for"| N_raw_cluster_cluster["cluster[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cluster()_1]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Run Leiden community detection. Returns {community_id node_ids}.      Communi_1]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None