---
source_file: "vendor/graphify/graphify/build.py"
type: "code"
community: "Community None"
degree: 3
location: "L42"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _norm_source_file()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_norm_source_file[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_build_py["build.py"]
    center -->|"calls"| N_graphify_build_build_from_json["build_from_json[]"]
    center -->|"rationale_for"| N_graphify_build_rationale_43["Normalize path separators to forward slashes so Windows backslash paths     and"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Normalize path separators to forward slashes so Windows backslash paths     and]] - `rationale_for` [EXTRACTED]
- [[build.py]] - `contains` [EXTRACTED]
- [[build_from_json()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_norm_source_file()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None