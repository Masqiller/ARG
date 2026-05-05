---
source_file: "vendor/graphify/graphify/watch.py"
type: "code"
community: "Community None"
degree: 2
location: "L204"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _has_non_code()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["_has_non_code[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_watch_py["watch.py"]
    center -->|"calls"| N_graphify_watch_watch["watch[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[watch()]] - `calls` [EXTRACTED]
- [[watch.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_has_non_code()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None