---
source_file: "vendor/graphify/graphify/watch.py"
type: "code"
community: "Community None"
degree: 3
location: "L28"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _report_root_label()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_report_root_label[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_watch_py["watch.py"]
    center -->|"calls"| N_graphify_watch_rebuild_code["_rebuild_code[]"]
    center -->|"calls"| N_str["str"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_rebuild_code()]] - `calls` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[watch.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_report_root_label()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None