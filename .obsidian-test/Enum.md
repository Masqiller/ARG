---
source_file: ""
type: "code"
community: "Community None"
degree: 2
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Enum

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["Enum"]:::centerNode
    center -->|"imports_from"| N_vendor_graphify_graphify_detect_py["detect.py"]
    center -->|"inherits"| N_graphify_detect_filetype["FileType"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[FileType]] - `inherits` [EXTRACTED]
- [[detect.py]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Enum]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None