---
source_file: "vendor/graphify/tests/test_build.py"
type: "code"
community: "Community None"
degree: 10
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_build.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["test_build.py"]:::centerNode
    center -->|"contains"| N_tests_test_build_load_extraction["load_extraction[]"]
    center -->|"contains"| N_tests_test_build_test_build_from_json_node_count["test_build_from_json_node_count[]"]
    center -->|"contains"| N_tests_test_build_test_build_from_json_edge_count["test_build_from_json_edge_count[]"]
    center -->|"contains"| N_tests_test_build_test_nodes_have_label["test_nodes_have_label[]"]
    center -->|"contains"| N_tests_test_build_test_edges_have_confidence["test_edges_have_confidence[]"]
    center -->|"contains"| N_tests_test_build_test_ambiguous_edge_preserved["test_ambiguous_edge_preserved[]"]
    center -->|"contains"| N_tests_test_build_test_legacy_node_source_canonicalized["test_legacy_node_source_canonicalized[]"]
    center -->|"contains"| N_tests_test_build_test_legacy_edge_from_to_canonicalized["test_legacy_edge_from_to_canonicalized[]"]
    center -->|"contains"| N_tests_test_build_test_source_file_backslash_normalized["test_source_file_backslash_normalized[]"]
    center -->|"contains"| N_tests_test_build_test_build_merges_multiple_extractions["test_build_merges_multiple_extractions[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[load_extraction()]] - `contains` [EXTRACTED]
- [[test_ambiguous_edge_preserved()]] - `contains` [EXTRACTED]
- [[test_build_from_json_edge_count()]] - `contains` [EXTRACTED]
- [[test_build_from_json_node_count()]] - `contains` [EXTRACTED]
- [[test_build_merges_multiple_extractions()]] - `contains` [EXTRACTED]
- [[test_edges_have_confidence()]] - `contains` [EXTRACTED]
- [[test_legacy_edge_from_to_canonicalized()]] - `contains` [EXTRACTED]
- [[test_legacy_node_source_canonicalized()]] - `contains` [EXTRACTED]
- [[test_nodes_have_label()]] - `contains` [EXTRACTED]
- [[test_source_file_backslash_normalized()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_build.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None