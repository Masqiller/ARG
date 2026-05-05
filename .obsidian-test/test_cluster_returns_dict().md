---
source_file: "vendor/graphify/tests/test_cluster.py"
type: "code"
community: "Community None"
degree: 2
location: "L13"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_cluster_returns_dict()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_cluster_returns_dict[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_cluster_py["test_cluster.py"]
    center -->|"calls"| N_tests_test_cluster_make_graph["make_graph[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[make_graph()_1]] - `calls` [EXTRACTED]
- [[test_cluster.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_cluster_returns_dict()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None