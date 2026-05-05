---
source_file: "vendor/graphify/tests/test_serve.py"
type: "code"
community: "Community None"
degree: 3
location: "L194"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# test_load_graph_missing_file()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_load_graph_missing_file[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_serve_py["test_serve.py"]
    center -->|"calls"| N_graphify_serve_load_graph["_load_graph[]"]
    center -->|"calls"| N_str["str"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_load_graph()]] - `calls` [INFERRED]
- [[str]] - `calls` [INFERRED]
- [[test_serve.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_load_graph_missing_file()]]
```

#graphify/code #graphify/INFERRED #community/Community_None