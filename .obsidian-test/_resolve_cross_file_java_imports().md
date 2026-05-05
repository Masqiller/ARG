---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 5
location: "L3503"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _resolve_cross_file_java_imports()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["_resolve_cross_file_java_imports[]"]:::centerNode
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_make_id["_make_id[]"]
    center -->|"calls"| N_graphify_extract_extract["extract[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_3507["Two-pass Java import resolution.      Pass 1: build a global index {ClassName: ["]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Two-pass Java import resolution.      Pass 1 build a global index {ClassName]] - `rationale_for` [EXTRACTED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[extract()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[str]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_resolve_cross_file_java_imports()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None