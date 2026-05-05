---
source_file: "vendor/graphify/tests/test_languages.py"
type: "code"
community: "Community None"
degree: 2
location: "L785"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_fortran_capital_F_parses_preprocessed()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_fortran_capital_F_parses_preprocessed[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_languages_py["test_languages.py"]
    center -->|"calls"| N_graphify_extract_extract_fortran["extract_fortran[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[extract_fortran()]] - `calls` [INFERRED]
- [[test_languages.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_fortran_capital_F_parses_preprocessed()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None