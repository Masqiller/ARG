---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 4
location: "L3986"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _check_tree_sitter_version()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["_check_tree_sitter_version[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_extract["extract[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_3987["Raise a clear error if tree-sitter is too old for the new Language API."]
    center -->|"calls"| N_runtimeerror["RuntimeError"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Raise a clear error if tree-sitter is too old for the new Language API.]] - `rationale_for` [EXTRACTED]
- [[RuntimeError]] - `calls` [INFERRED]
- [[extract()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_check_tree_sitter_version()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None