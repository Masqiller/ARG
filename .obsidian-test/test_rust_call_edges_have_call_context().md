---
source_file: "vendor/graphify/tests/test_multilang.py"
type: "code"
community: "Community None"
degree: 3
location: "L166"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_rust_call_edges_have_call_context()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_rust_call_edges_have_call_context[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_multilang_py["test_multilang.py"]
    center -->|"calls"| N_tests_test_multilang_edges_with_relation["_edges_with_relation[]"]
    center -->|"calls"| N_graphify_extract_extract_rust["extract_rust[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_edges_with_relation()_1]] - `calls` [EXTRACTED]
- [[extract_rust()]] - `calls` [INFERRED]
- [[test_multilang.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_rust_call_edges_have_call_context()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None