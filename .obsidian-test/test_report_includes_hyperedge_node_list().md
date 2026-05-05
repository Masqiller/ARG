---
source_file: "vendor/graphify/tests/test_hypergraph.py"
type: "code"
community: "Community None"
degree: 2
location: "L182"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_report_includes_hyperedge_node_list()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_report_includes_hyperedge_node_list[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_hypergraph_py["test_hypergraph.py"]
    center -->|"calls"| N_tests_test_hypergraph_make_report["_make_report[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_make_report()]] - `calls` [EXTRACTED]
- [[test_hypergraph.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_report_includes_hyperedge_node_list()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None