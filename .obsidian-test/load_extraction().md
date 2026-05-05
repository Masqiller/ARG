---
source_file: "vendor/graphify/tests/test_build.py"
type: "code"
community: "Community None"
degree: 6
location: "L7"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# load_extraction()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["load_extraction[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_build_py["test_build.py"]
    center -->|"calls"| N_tests_test_build_test_build_from_json_node_count["test_build_from_json_node_count[]"]
    center -->|"calls"| N_tests_test_build_test_build_from_json_edge_count["test_build_from_json_edge_count[]"]
    center -->|"calls"| N_tests_test_build_test_nodes_have_label["test_nodes_have_label[]"]
    center -->|"calls"| N_tests_test_build_test_edges_have_confidence["test_edges_have_confidence[]"]
    center -->|"calls"| N_tests_test_build_test_ambiguous_edge_preserved["test_ambiguous_edge_preserved[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_ambiguous_edge_preserved()]] - `calls` [EXTRACTED]
- [[test_build.py]] - `contains` [EXTRACTED]
- [[test_build_from_json_edge_count()]] - `calls` [EXTRACTED]
- [[test_build_from_json_node_count()]] - `calls` [EXTRACTED]
- [[test_edges_have_confidence()]] - `calls` [EXTRACTED]
- [[test_nodes_have_label()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[load_extraction()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None