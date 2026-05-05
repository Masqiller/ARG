---
source_file: "vendor/graphify/tests/test_validate.py"
type: "code"
community: "Community None"
degree: 2
location: "L38"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_invalid_confidence()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_invalid_confidence[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_validate_py["test_validate.py"]
    center -->|"calls"| N_graphify_validate_validate_extraction["validate_extraction[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_validate.py]] - `contains` [EXTRACTED]
- [[validate_extraction()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_invalid_confidence()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None