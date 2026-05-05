---
source_file: "vendor/graphify/tests/test_cluster.py"
type: "code"
community: "Community None"
degree: 10
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_cluster.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["test_cluster.py"]:::centerNode
    center -->|"contains"| N_tests_test_cluster_make_graph["make_graph[]"]
    center -->|"contains"| N_tests_test_cluster_test_cluster_returns_dict["test_cluster_returns_dict[]"]
    center -->|"contains"| N_tests_test_cluster_test_cluster_covers_all_nodes["test_cluster_covers_all_nodes[]"]
    center -->|"contains"| N_tests_test_cluster_test_cohesion_score_complete_graph["test_cohesion_score_complete_graph[]"]
    center -->|"contains"| N_tests_test_cluster_test_cohesion_score_single_node["test_cohesion_score_single_node[]"]
    center -->|"contains"| N_tests_test_cluster_test_cohesion_score_disconnected["test_cohesion_score_disconnected[]"]
    center -->|"contains"| N_tests_test_cluster_test_cohesion_score_range["test_cohesion_score_range[]"]
    center -->|"contains"| N_tests_test_cluster_test_score_all_keys_match_communities["test_score_all_keys_match_communities[]"]
    center -->|"contains"| N_tests_test_cluster_test_cluster_does_not_write_to_stdout["test_cluster_does_not_write_to_stdout[]"]
    center -->|"contains"| N_tests_test_cluster_test_cluster_does_not_write_to_stderr["test_cluster_does_not_write_to_stderr[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[make_graph()_1]] - `contains` [EXTRACTED]
- [[test_cluster_covers_all_nodes()]] - `contains` [EXTRACTED]
- [[test_cluster_does_not_write_to_stderr()]] - `contains` [EXTRACTED]
- [[test_cluster_does_not_write_to_stdout()]] - `contains` [EXTRACTED]
- [[test_cluster_returns_dict()]] - `contains` [EXTRACTED]
- [[test_cohesion_score_complete_graph()]] - `contains` [EXTRACTED]
- [[test_cohesion_score_disconnected()]] - `contains` [EXTRACTED]
- [[test_cohesion_score_range()]] - `contains` [EXTRACTED]
- [[test_cohesion_score_single_node()]] - `contains` [EXTRACTED]
- [[test_score_all_keys_match_communities()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_cluster.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None