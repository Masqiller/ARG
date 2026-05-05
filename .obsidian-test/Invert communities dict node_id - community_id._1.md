---
source_file: "vendor/graphify/worked/mixed-corpus/raw/analyze.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L7"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Invert communities dict: node_id -> community_id.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Invert communities dict: node_id -> community_id."]:::centerNode
    center -->|"rationale_for"| N_raw_analyze_node_community_map["_node_community_map[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_node_community_map()_1]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Invert communities dict node_id - community_id._1]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None