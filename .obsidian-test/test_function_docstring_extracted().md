---
source_file: "vendor/graphify/tests/test_rationale.py"
type: "code"
community: "Community None"
degree: 3
location: "L25"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_function_docstring_extracted()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_function_docstring_extracted[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_rationale_py["test_rationale.py"]
    center -->|"calls"| N_tests_test_rationale_write_py["_write_py[]"]
    center -->|"calls"| N_graphify_extract_extract_python["extract_python[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_write_py()]] - `calls` [EXTRACTED]
- [[extract_python()]] - `calls` [INFERRED]
- [[test_rationale.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_function_docstring_extracted()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None