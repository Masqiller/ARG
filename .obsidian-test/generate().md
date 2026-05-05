---
source_file: "vendor/graphify/graphify/report.py"
type: "code"
community: "Community None"
degree: 2
location: "L15"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# generate()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["generate[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_report_py["report.py"]
    center -->|"calls"| N_graphify_report_safe_community_name["_safe_community_name[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_safe_community_name()]] - `calls` [EXTRACTED]
- [[report.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[generate()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None