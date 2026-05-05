---
source_file: "vendor/graphify/tests/test_cluster.py"
type: "code"
community: "Community None"
degree: 7
location: "L10"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# make_graph()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["make_graph[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_cluster_py["test_cluster.py"]
    center -->|"calls"| N_tests_test_cluster_test_cluster_returns_dict["test_cluster_returns_dict[]"]
    center -->|"calls"| N_tests_test_cluster_test_cluster_covers_all_nodes["test_cluster_covers_all_nodes[]"]
    center -->|"calls"| N_tests_test_cluster_test_cohesion_score_range["test_cohesion_score_range[]"]
    center -->|"calls"| N_tests_test_cluster_test_score_all_keys_match_communities["test_score_all_keys_match_communities[]"]
    center -->|"calls"| N_tests_test_cluster_test_cluster_does_not_write_to_stdout["test_cluster_does_not_write_to_stdout[]"]
    center -->|"calls"| N_tests_test_cluster_test_cluster_does_not_write_to_stderr["test_cluster_does_not_write_to_stderr[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_cluster.py]] - `contains` [EXTRACTED]
- [[test_cluster_covers_all_nodes()]] - `calls` [EXTRACTED]
- [[test_cluster_does_not_write_to_stderr()]] - `calls` [EXTRACTED]
- [[test_cluster_does_not_write_to_stdout()]] - `calls` [EXTRACTED]
- [[test_cluster_returns_dict()]] - `calls` [EXTRACTED]
- [[test_cohesion_score_range()]] - `calls` [EXTRACTED]
- [[test_score_all_keys_match_communities()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[make_graph()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None