---
source_file: "vendor/graphify/tests/test_serve.py"
type: "code"
community: "Community None"
degree: 3
location: "L72"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_score_nodes_source_file_partial()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_score_nodes_source_file_partial[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_serve_py["test_serve.py"]
    center -->|"calls"| N_tests_test_serve_make_graph["_make_graph[]"]
    center -->|"calls"| N_graphify_serve_score_nodes["_score_nodes[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_make_graph()_1]] - `calls` [EXTRACTED]
- [[_score_nodes()]] - `calls` [INFERRED]
- [[test_serve.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_score_nodes_source_file_partial()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None