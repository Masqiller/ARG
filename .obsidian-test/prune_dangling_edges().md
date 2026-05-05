---
source_file: "vendor/graphify/graphify/export.py"
type: "code"
community: "Community None"
degree: 2
location: "L413"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# prune_dangling_edges()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["prune_dangling_edges[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_export_py["export.py"]
    center -->|"rationale_for"| N_graphify_export_rationale_414["Remove edges whose source or target node is not in the node set.      Returns th"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Remove edges whose source or target node is not in the node set.      Returns th]] - `rationale_for` [EXTRACTED]
- [[export.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[prune_dangling_edges()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None