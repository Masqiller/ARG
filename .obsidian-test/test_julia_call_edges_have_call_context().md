---
source_file: "vendor/graphify/tests/test_languages.py"
type: "code"
community: "Community None"
degree: 3
location: "L710"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_julia_call_edges_have_call_context()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_julia_call_edges_have_call_context[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_languages_py["test_languages.py"]
    center -->|"calls"| N_tests_test_languages_edges_with_relation["_edges_with_relation[]"]
    center -->|"calls"| N_graphify_extract_extract_julia["extract_julia[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_edges_with_relation()]] - `calls` [EXTRACTED]
- [[extract_julia()]] - `calls` [INFERRED]
- [[test_languages.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_julia_call_edges_have_call_context()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None