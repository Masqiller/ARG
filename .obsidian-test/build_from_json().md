---
source_file: "vendor/graphify/graphify/build.py"
type: "code"
community: "Community None"
degree: 6
location: "L48"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# build_from_json()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["build_from_json[]"]:::centerNode
    center -->|"calls"| N_graphify_validate_validate_extraction["validate_extraction[]"]
    center -->|"contains"| N_vendor_graphify_graphify_build_py["build.py"]
    center -->|"calls"| N_graphify_build_normalize_id["_normalize_id[]"]
    center -->|"calls"| N_graphify_build_norm_source_file["_norm_source_file[]"]
    center -->|"calls"| N_graphify_build_build["build[]"]
    center -->|"rationale_for"| N_graphify_build_rationale_49["Build a NetworkX graph from an extraction dict.      directed=True produces a Di"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Build a NetworkX graph from an extraction dict.      directed=True produces a Di]] - `rationale_for` [EXTRACTED]
- [[_norm_source_file()]] - `calls` [EXTRACTED]
- [[_normalize_id()]] - `calls` [EXTRACTED]
- [[build()]] - `calls` [EXTRACTED]
- [[build.py]] - `contains` [EXTRACTED]
- [[validate_extraction()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[build_from_json()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None