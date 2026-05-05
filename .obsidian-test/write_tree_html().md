---
source_file: "vendor/graphify/graphify/tree_html.py"
type: "code"
community: "Community None"
degree: 4
location: "L562"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# write_tree_html()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["write_tree_html[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_tree_html_py["tree_html.py"]
    center -->|"calls"| N_graphify_tree_html_build_tree["build_tree[]"]
    center -->|"calls"| N_graphify_tree_html_emit_html["emit_html[]"]
    center -->|"calls"| N_graphify_main_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[build_tree()]] - `calls` [EXTRACTED]
- [[emit_html()]] - `calls` [EXTRACTED]
- [[main()_2]] - `calls` [INFERRED]
- [[tree_html.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[write_tree_html()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None