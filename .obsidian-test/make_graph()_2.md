---
source_file: "vendor/graphify/tests/test_analyze.py"
type: "code"
community: "Community None"
degree: 8
location: "L12"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# make_graph()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["make_graph[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_analyze_py["test_analyze.py"]
    center -->|"calls"| N_tests_test_analyze_test_god_nodes_returns_list["test_god_nodes_returns_list[]"]
    center -->|"calls"| N_tests_test_analyze_test_god_nodes_sorted_by_degree["test_god_nodes_sorted_by_degree[]"]
    center -->|"calls"| N_tests_test_analyze_test_god_nodes_have_required_keys["test_god_nodes_have_required_keys[]"]
    center -->|"calls"| N_tests_test_analyze_test_surprising_connections_cross_source_multi_file["test_surprising_connections_cross_source_multi_file[]"]
    center -->|"calls"| N_tests_test_analyze_test_surprising_connections_excludes_concept_nodes["test_surprising_connections_excludes_concept_nodes[]"]
    center -->|"calls"| N_tests_test_analyze_test_surprising_connections_have_why_field["test_surprising_connections_have_why_field[]"]
    center -->|"calls"| N_tests_test_analyze_test_surprising_connections_have_required_keys["test_surprising_connections_have_required_keys[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_analyze.py]] - `contains` [EXTRACTED]
- [[test_god_nodes_have_required_keys()]] - `calls` [EXTRACTED]
- [[test_god_nodes_returns_list()]] - `calls` [EXTRACTED]
- [[test_god_nodes_sorted_by_degree()]] - `calls` [EXTRACTED]
- [[test_surprising_connections_cross_source_multi_file()]] - `calls` [EXTRACTED]
- [[test_surprising_connections_excludes_concept_nodes()]] - `calls` [EXTRACTED]
- [[test_surprising_connections_have_required_keys()]] - `calls` [EXTRACTED]
- [[test_surprising_connections_have_why_field()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[make_graph()_2]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None