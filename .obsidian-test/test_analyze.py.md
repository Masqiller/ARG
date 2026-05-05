---
source_file: "vendor/graphify/tests/test_analyze.py"
type: "code"
community: "Community None"
degree: 20
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_analyze.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 20

## Architecture Graph
```mermaid
graph LR
    center["test_analyze.py"]:::centerNode
    center -->|"contains"| N_tests_test_analyze_make_graph["make_graph[]"]
    center -->|"contains"| N_tests_test_analyze_test_god_nodes_returns_list["test_god_nodes_returns_list[]"]
    center -->|"contains"| N_tests_test_analyze_test_god_nodes_sorted_by_degree["test_god_nodes_sorted_by_degree[]"]
    center -->|"contains"| N_tests_test_analyze_test_god_nodes_have_required_keys["test_god_nodes_have_required_keys[]"]
    center -->|"contains"| N_tests_test_analyze_test_surprising_connections_cross_source_multi_file["test_surprising_connections_cross_source_multi_file[]"]
    center -->|"contains"| N_tests_test_analyze_test_surprising_connections_excludes_concept_nodes["test_surprising_connections_excludes_concept_nodes[]"]
    center -->|"contains"| N_tests_test_analyze_test_surprising_connections_single_file_uses_community_bridges["test_surprising_connections_single_file_uses_community_bridges[]"]
    center -->|"contains"| N_tests_test_analyze_test_surprising_connections_ambiguous_scores_higher_than_extracted["test_surprising_connections_ambiguous_scores_higher_than_extracted[]"]
    center -->|"contains"| N_tests_test_analyze_test_surprising_connections_cross_type_scores_higher["test_surprising_connections_cross_type_scores_higher[]"]
    center -->|"contains"| N_tests_test_analyze_test_surprising_connections_have_why_field["test_surprising_connections_have_why_field[]"]
    center -->|"contains"| N_tests_test_analyze_test_file_category["test_file_category[]"]
    center -->|"contains"| N_tests_test_analyze_test_is_concept_node_empty_source["test_is_concept_node_empty_source[]"]
    center -->|"contains"| N_tests_test_analyze_test_is_concept_node_real_file["test_is_concept_node_real_file[]"]
    center -->|"contains"| N_tests_test_analyze_test_surprising_connections_have_required_keys["test_surprising_connections_have_required_keys[]"]
    center -->|"contains"| N_tests_test_analyze_make_simple_graph["_make_simple_graph[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Tests for analyze.py.]] - `rationale_for` [EXTRACTED]
- [[_make_simple_graph()]] - `contains` [EXTRACTED]
- [[make_graph()_2]] - `contains` [EXTRACTED]
- [[test_file_category()]] - `contains` [EXTRACTED]
- [[test_god_nodes_have_required_keys()]] - `contains` [EXTRACTED]
- [[test_god_nodes_returns_list()]] - `contains` [EXTRACTED]
- [[test_god_nodes_sorted_by_degree()]] - `contains` [EXTRACTED]
- [[test_graph_diff_empty_diff()]] - `contains` [EXTRACTED]
- [[test_graph_diff_new_edges()]] - `contains` [EXTRACTED]
- [[test_graph_diff_new_nodes()]] - `contains` [EXTRACTED]
- [[test_graph_diff_removed_nodes()]] - `contains` [EXTRACTED]
- [[test_is_concept_node_empty_source()]] - `contains` [EXTRACTED]
- [[test_is_concept_node_real_file()]] - `contains` [EXTRACTED]
- [[test_surprising_connections_ambiguous_scores_higher_than_extracted()]] - `contains` [EXTRACTED]
- [[test_surprising_connections_cross_source_multi_file()]] - `contains` [EXTRACTED]
- [[test_surprising_connections_cross_type_scores_higher()]] - `contains` [EXTRACTED]
- [[test_surprising_connections_excludes_concept_nodes()]] - `contains` [EXTRACTED]
- [[test_surprising_connections_have_required_keys()]] - `contains` [EXTRACTED]
- [[test_surprising_connections_have_why_field()]] - `contains` [EXTRACTED]
- [[test_surprising_connections_single_file_uses_community_bridges()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_analyze.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None