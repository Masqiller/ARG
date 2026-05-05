---
source_file: "vendor/graphify/graphify/detect.py"
type: "code"
community: "Community None"
degree: 4
location: "L408"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _find_vcs_root()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["_find_vcs_root[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_detect_py["detect.py"]
    center -->|"calls"| N_graphify_detect_load_graphifyignore["_load_graphifyignore[]"]
    center -->|"calls"| N_graphify_detect_load_graphifyinclude["_load_graphifyinclude[]"]
    center -->|"rationale_for"| N_graphify_detect_rationale_409["Walk upward from start; return the first directory containing a VCS marker."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Walk upward from start; return the first directory containing a VCS marker.]] - `rationale_for` [EXTRACTED]
- [[_load_graphifyignore()]] - `calls` [EXTRACTED]
- [[_load_graphifyinclude()]] - `calls` [EXTRACTED]
- [[detect.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_find_vcs_root()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None