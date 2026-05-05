---
source_file: "vendor/graphify/worked/mixed-corpus/raw/build.py"
type: "code"
community: "Community None"
degree: 3
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# build_from_json()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["build_from_json[]"]:::centerNode
    center -->|"calls"| N_graphify_validate_validate_extraction["validate_extraction[]"]
    center -->|"contains"| N_vendor_graphify_worked_mixed_corpus_raw_build_py["build.py"]
    center -->|"calls"| N_raw_build_build["build[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[build()_1]] - `calls` [EXTRACTED]
- [[build.py_1]] - `contains` [EXTRACTED]
- [[validate_extraction()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[build_from_json()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None