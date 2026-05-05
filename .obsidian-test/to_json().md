---
source_file: "vendor/graphify/graphify/export.py"
type: "code"
community: "Community None"
degree: 15
location: "L362"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# to_json()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 15

## Architecture Graph
```mermaid
graph LR
    center["to_json[]"]:::centerNode
    center -->|"calls"| N_tests_test_export_test_to_json_creates_file["test_to_json_creates_file[]"]
    center -->|"calls"| N_tests_test_export_test_to_json_valid_json["test_to_json_valid_json[]"]
    center -->|"calls"| N_tests_test_export_test_to_json_nodes_have_community["test_to_json_nodes_have_community[]"]
    center -->|"calls"| N_tests_test_pipeline_run_pipeline["run_pipeline[]"]
    center -->|"calls"| N_tests_test_hypergraph_test_to_json_includes_hyperedges["test_to_json_includes_hyperedges[]"]
    center -->|"calls"| N_tests_test_hypergraph_test_to_json_hyperedges_empty_when_none["test_to_json_hyperedges_empty_when_none[]"]
    center -->|"calls"| N_tests_test_hypergraph_test_hyperedges_roundtrip_via_json_file["test_hyperedges_roundtrip_via_json_file[]"]
    center -->|"calls"| N_tests_test_cli_export_make_graph["_make_graph[]"]
    center -->|"calls"| N_tests_test_confidence_test_confidence_score_round_trip["test_confidence_score_round_trip[]"]
    center -->|"calls"| N_tests_test_confidence_test_to_json_defaults_missing_confidence_score["test_to_json_defaults_missing_confidence_score[]"]
    center -->|"contains"| N_vendor_graphify_graphify_export_py["export.py"]
    center -->|"calls"| N_graphify_export_strip_diacritics["_strip_diacritics[]"]
    center -->|"calls"| N_graphify_export_git_head["_git_head[]"]
    center -->|"calls"| N_graphify_watch_rebuild_code["_rebuild_code[]"]
    center -->|"calls"| N_graphify_main_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_git_head()]] - `calls` [EXTRACTED]
- [[_make_graph()_3]] - `calls` [INFERRED]
- [[_rebuild_code()]] - `calls` [INFERRED]
- [[_strip_diacritics()]] - `calls` [EXTRACTED]
- [[export.py]] - `contains` [EXTRACTED]
- [[main()_2]] - `calls` [INFERRED]
- [[run_pipeline()]] - `calls` [INFERRED]
- [[test_confidence_score_round_trip()]] - `calls` [INFERRED]
- [[test_hyperedges_roundtrip_via_json_file()]] - `calls` [INFERRED]
- [[test_to_json_creates_file()]] - `calls` [INFERRED]
- [[test_to_json_defaults_missing_confidence_score()]] - `calls` [INFERRED]
- [[test_to_json_hyperedges_empty_when_none()]] - `calls` [INFERRED]
- [[test_to_json_includes_hyperedges()]] - `calls` [INFERRED]
- [[test_to_json_nodes_have_community()]] - `calls` [INFERRED]
- [[test_to_json_valid_json()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[to_json()]]
```

#graphify/code #graphify/INFERRED #community/Community_None