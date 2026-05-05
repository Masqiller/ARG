---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 4
location: "L2417"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _cpp_preprocess()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["_cpp_preprocess[]"]:::centerNode
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_extract_fortran["extract_fortran[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_2418["Run cpp -w -P on a capital-F Fortran file and return preprocessed bytes.      Fa"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Run cpp -w -P on a capital-F Fortran file and return preprocessed bytes.      Fa]] - `rationale_for` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[extract_fortran()]] - `calls` [EXTRACTED]
- [[str]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_cpp_preprocess()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None