---
source_file: "vendor/graphify/graphify/security.py"
type: "code"
community: "Community None"
degree: 2
location: "L113"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _build_opener()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["_build_opener[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_security_py["security.py"]
    center -->|"calls"| N_graphify_security_safe_fetch["safe_fetch[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[safe_fetch()]] - `calls` [EXTRACTED]
- [[security.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_build_opener()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None