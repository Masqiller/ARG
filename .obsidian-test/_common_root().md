---
source_file: "vendor/graphify/graphify/tree_html.py"
type: "code"
community: "Community None"
degree: 3
location: "L49"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _common_root()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_common_root[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_tree_html_py["tree_html.py"]
    center -->|"calls"| N_graphify_tree_html_build_tree["build_tree[]"]
    center -->|"calls"| N_str["str"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[build_tree()]] - `calls` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[tree_html.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_common_root()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None