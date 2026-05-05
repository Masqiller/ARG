---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 4
location: "L636"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _csharp_extra_walk()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["_csharp_extra_walk[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_make_id["_make_id[]"]
    center -->|"calls"| N_graphify_extract_read_text["_read_text[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_640["Handle namespace_declaration for C#. Returns True if handled."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Handle namespace_declaration for C. Returns True if handled.]] - `rationale_for` [EXTRACTED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[_read_text()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_csharp_extra_walk()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None