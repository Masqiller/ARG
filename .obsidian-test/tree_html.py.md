---
source_file: "vendor/graphify/graphify/tree_html.py"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# tree_html.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["tree_html.py"]:::centerNode
    center -->|"contains"| N_graphify_tree_html_common_root["_common_root[]"]
    center -->|"contains"| N_graphify_tree_html_make_truncation_leaf["_make_truncation_leaf[]"]
    center -->|"contains"| N_graphify_tree_html_build_tree["build_tree[]"]
    center -->|"contains"| N_graphify_tree_html_emit_html["emit_html[]"]
    center -->|"contains"| N_graphify_tree_html_write_tree_html["write_tree_html[]"]
    center -->|"rationale_for"| N_graphify_tree_html_rationale_1["tree_html — emit a D3 v7 collapsible-tree HTML view of a graph.  A self-containe"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_common_root()]] - `contains` [EXTRACTED]
- [[_make_truncation_leaf()]] - `contains` [EXTRACTED]
- [[build_tree()]] - `contains` [EXTRACTED]
- [[emit_html()]] - `contains` [EXTRACTED]
- [[tree_html — emit a D3 v7 collapsible-tree HTML view of a graph.  A self-containe]] - `rationale_for` [EXTRACTED]
- [[write_tree_html()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[tree_html.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None