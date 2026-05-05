---
source_file: "vendor/graphify/graphify/tree_html.py"
type: "code"
community: "Community None"
degree: 2
location: "L64"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _make_truncation_leaf()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["_make_truncation_leaf[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_tree_html_py["tree_html.py"]
    center -->|"calls"| N_graphify_tree_html_build_tree["build_tree[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[build_tree()]] - `calls` [EXTRACTED]
- [[tree_html.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_make_truncation_leaf()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None