---
source_file: "vendor/graphify/graphify/build.py"
type: "code"
community: "Community None"
degree: 8
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
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["build.py"]:::centerNode
    center -->|"imports_from"| N_vendor_graphify_graphify_validate_py["validate.py"]
    center -->|"contains"| N_graphify_build_normalize_id["_normalize_id[]"]
    center -->|"contains"| N_graphify_build_norm_source_file["_norm_source_file[]"]
    center -->|"contains"| N_graphify_build_build_from_json["build_from_json[]"]
    center -->|"contains"| N_graphify_build_build["build[]"]
    center -->|"contains"| N_graphify_build_norm_label["_norm_label[]"]
    center -->|"contains"| N_graphify_build_deduplicate_by_label["deduplicate_by_label[]"]
    center -->|"contains"| N_graphify_build_build_merge["build_merge[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_norm_label()]] - `contains` [EXTRACTED]
- [[_norm_source_file()]] - `contains` [EXTRACTED]
- [[_normalize_id()]] - `contains` [EXTRACTED]
- [[build()]] - `contains` [EXTRACTED]
- [[build_from_json()]] - `contains` [EXTRACTED]
- [[build_merge()]] - `contains` [EXTRACTED]
- [[deduplicate_by_label()]] - `contains` [EXTRACTED]
- [[validate.py]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[build.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None