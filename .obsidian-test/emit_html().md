---
source_file: "vendor/graphify/graphify/tree_html.py"
type: "code"
community: "Community None"
degree: 2
location: "L542"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# emit_html()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["emit_html[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_tree_html_py["tree_html.py"]
    center -->|"calls"| N_graphify_tree_html_write_tree_html["write_tree_html[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[tree_html.py]] - `contains` [EXTRACTED]
- [[write_tree_html()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[emit_html()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None