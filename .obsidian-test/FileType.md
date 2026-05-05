---
source_file: "vendor/graphify/graphify/detect.py"
type: "code"
community: "Community None"
degree: 3
location: "L11"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# FileType

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["FileType"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_detect_py["detect.py"]
    center -->|"inherits"| N_str["str"]
    center -->|"inherits"| N_enum["Enum"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Enum]] - `inherits` [EXTRACTED]
- [[detect.py]] - `contains` [EXTRACTED]
- [[str]] - `inherits` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[FileType]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None