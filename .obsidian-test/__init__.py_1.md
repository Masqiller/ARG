---
source_file: "vendor/graphify/graphify/__init__.py"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# __init__.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["__init__.py"]:::centerNode
    center -->|"contains"| N_graphify_init_getattr["__getattr__[]"]
    center -->|"rationale_for"| N_graphify_init_rationale_1["graphify - extract · build · cluster · analyze · report."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[__getattr__()]] - `contains` [EXTRACTED]
- [[graphify - extract · build · cluster · analyze · report.]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[__init__.py_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None