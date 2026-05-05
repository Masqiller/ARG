---
source_file: "vendor/graphify/graphify/tree_html.py"
type: "code"
community: "Community None"
degree: 7
location: "L68"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# build_tree()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["build_tree[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_tree_html_py["tree_html.py"]
    center -->|"calls"| N_graphify_tree_html_common_root["_common_root[]"]
    center -->|"calls"| N_graphify_tree_html_make_truncation_leaf["_make_truncation_leaf[]"]
    center -->|"calls"| N_graphify_tree_html_write_tree_html["write_tree_html[]"]
    center -->|"rationale_for"| N_graphify_tree_html_rationale_75["Build a ``{name, total_count, children}`` hierarchy.      Each leaf is either a"]
    center -->|"calls"| N_knowledge_corpusstore_corpusstore_list[".list[]"]
    center -->|"calls"| N_str["str"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.list()]] - `calls` [INFERRED]
- [[Build a ``{name, total_count, children}`` hierarchy.      Each leaf is either a]] - `rationale_for` [EXTRACTED]
- [[_common_root()]] - `calls` [EXTRACTED]
- [[_make_truncation_leaf()]] - `calls` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[tree_html.py]] - `contains` [EXTRACTED]
- [[write_tree_html()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[build_tree()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None