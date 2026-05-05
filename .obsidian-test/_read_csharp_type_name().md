---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 3
location: "L895"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _read_csharp_type_name()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_read_csharp_type_name[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_read_text["_read_text[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_896["Resolve a readable C# type name from a field/type node."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Resolve a readable C type name from a fieldtype node.]] - `rationale_for` [EXTRACTED]
- [[_read_text()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_read_csharp_type_name()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None