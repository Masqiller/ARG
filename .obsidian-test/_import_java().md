---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 2
location: "L422"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _import_java()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["_import_java[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_make_id["_make_id[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_make_id()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_import_java()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None