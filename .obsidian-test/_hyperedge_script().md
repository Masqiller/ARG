---
source_file: "vendor/graphify/graphify/export.py"
type: "code"
community: "Community None"
degree: 2
location: "L94"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _hyperedge_script()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["_hyperedge_script[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_export_py["export.py"]
    center -->|"calls"| N_graphify_export_to_html["to_html[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[export.py]] - `contains` [EXTRACTED]
- [[to_html()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_hyperedge_script()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None