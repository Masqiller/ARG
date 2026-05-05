---
source_file: "vendor/graphify/graphify/detect.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L409"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Walk upward from start; return the first directory containing a VCS marker.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Walk upward from start; return the first directory containing a VCS marker."]:::centerNode
    center -->|"rationale_for"| N_graphify_detect_find_vcs_root["_find_vcs_root[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_find_vcs_root()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Walk upward from start; return the first directory containing a VCS marker.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None