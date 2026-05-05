---
source_file: "vendor/graphify/graphify/report.py"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# report.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["report.py"]:::centerNode
    center -->|"contains"| N_graphify_report_safe_community_name["_safe_community_name[]"]
    center -->|"contains"| N_graphify_report_generate["generate[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_safe_community_name()]] - `contains` [EXTRACTED]
- [[generate()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[report.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None