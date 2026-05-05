---
source_file: "vendor/graphify/tests/test_extract.py"
type: "code"
community: "Community None"
degree: 2
location: "L29"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_extract_python_finds_methods()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_extract_python_finds_methods[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_extract_py["test_extract.py"]
    center -->|"calls"| N_graphify_extract_extract_python["extract_python[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[extract_python()]] - `calls` [INFERRED]
- [[test_extract.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_extract_python_finds_methods()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None