---
source_file: "vendor/graphify/tests/test_serve.py"
type: "code"
community: "Community None"
degree: 2
location: "L45"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_communities_from_graph_no_community_attr()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_communities_from_graph_no_community_attr[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_serve_py["test_serve.py"]
    center -->|"calls"| N_graphify_serve_communities_from_graph["_communities_from_graph[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_communities_from_graph()]] - `calls` [INFERRED]
- [[test_serve.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_communities_from_graph_no_community_attr()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None