---
source_file: "vendor/graphify/worked/mixed-corpus/raw/build.py"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# build.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["build.py"]:::centerNode
    center -->|"contains"| N_raw_build_build_from_json["build_from_json[]"]
    center -->|"contains"| N_raw_build_build["build[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[build()_1]] - `contains` [EXTRACTED]
- [[build_from_json()_1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[build.py_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None