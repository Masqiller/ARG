---
source_file: "vendor/graphify/graphify/validate.py"
type: "code"
community: "Community None"
degree: 14
location: "L10"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# validate_extraction()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 14

## Architecture Graph
```mermaid
graph LR
    center["validate_extraction[]"]:::centerNode
    center -->|"calls"| N_tests_test_validate_test_valid_passes["test_valid_passes[]"]
    center -->|"calls"| N_tests_test_validate_test_missing_nodes_key["test_missing_nodes_key[]"]
    center -->|"calls"| N_tests_test_validate_test_missing_edges_key["test_missing_edges_key[]"]
    center -->|"calls"| N_tests_test_validate_test_not_a_dict["test_not_a_dict[]"]
    center -->|"calls"| N_tests_test_validate_test_invalid_file_type["test_invalid_file_type[]"]
    center -->|"calls"| N_tests_test_validate_test_invalid_confidence["test_invalid_confidence[]"]
    center -->|"calls"| N_tests_test_validate_test_dangling_edge_source["test_dangling_edge_source[]"]
    center -->|"calls"| N_tests_test_validate_test_dangling_edge_target["test_dangling_edge_target[]"]
    center -->|"calls"| N_tests_test_validate_test_missing_node_field["test_missing_node_field[]"]
    center -->|"contains"| N_vendor_graphify_graphify_validate_py["validate.py"]
    center -->|"calls"| N_graphify_validate_assert_valid["assert_valid[]"]
    center -->|"rationale_for"| N_graphify_validate_rationale_11["Validate an extraction JSON dict against the graphify schema.     Returns a list"]
    center -->|"calls"| N_graphify_build_build_from_json["build_from_json[]"]
    center -->|"calls"| N_raw_build_build_from_json["build_from_json[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Validate an extraction JSON dict against the graphify schema.     Returns a list]] - `rationale_for` [EXTRACTED]
- [[assert_valid()]] - `calls` [EXTRACTED]
- [[build_from_json()]] - `calls` [INFERRED]
- [[build_from_json()_1]] - `calls` [INFERRED]
- [[test_dangling_edge_source()]] - `calls` [INFERRED]
- [[test_dangling_edge_target()]] - `calls` [INFERRED]
- [[test_invalid_confidence()]] - `calls` [INFERRED]
- [[test_invalid_file_type()]] - `calls` [INFERRED]
- [[test_missing_edges_key()]] - `calls` [INFERRED]
- [[test_missing_node_field()]] - `calls` [INFERRED]
- [[test_missing_nodes_key()]] - `calls` [INFERRED]
- [[test_not_a_dict()]] - `calls` [INFERRED]
- [[test_valid_passes()]] - `calls` [INFERRED]
- [[validate.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[validate_extraction()]]
```

#graphify/code #graphify/INFERRED #community/Community_None