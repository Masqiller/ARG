---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 3
location: "L16"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _raise_recursion_limit()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_raise_recursion_limit[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_extract_single_file["_extract_single_file[]"]
    center -->|"calls"| N_graphify_extract_extract["extract[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_extract_single_file()]] - `calls` [EXTRACTED]
- [[extract()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_raise_recursion_limit()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None