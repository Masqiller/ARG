---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 3
location: "L2188"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# extract_lua()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["extract_lua[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_extract_generic["_extract_generic[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_2189["Extract functions, methods, require[] imports, and calls from a .lua file."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Extract functions, methods, require() imports, and calls from a .lua file.]] - `rationale_for` [EXTRACTED]
- [[_extract_generic()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_lua()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None