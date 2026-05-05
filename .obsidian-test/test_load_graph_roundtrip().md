---
source_file: "vendor/graphify/tests/test_serve.py"
type: "code"
community: "Community None"
degree: 4
location: "L185"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_load_graph_roundtrip()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["test_load_graph_roundtrip[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_serve_py["test_serve.py"]
    center -->|"calls"| N_tests_test_serve_make_graph["_make_graph[]"]
    center -->|"calls"| N_graphify_serve_load_graph["_load_graph[]"]
    center -->|"calls"| N_str["str"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_load_graph()]] - `calls` [INFERRED]
- [[_make_graph()_1]] - `calls` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[test_serve.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_load_graph_roundtrip()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None