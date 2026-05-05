---
source_file: "vendor/graphify/tests/test_semantic_similarity.py"
type: "code"
community: "Community None"
degree: 6
location: "L39"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _make_graph_with_semantic_edge()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["_make_graph_with_semantic_edge[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_semantic_similarity_py["test_semantic_similarity.py"]
    center -->|"calls"| N_tests_test_semantic_similarity_make_extraction_with_semantic_edge["_make_extraction_with_semantic_edge[]"]
    center -->|"calls"| N_tests_test_semantic_similarity_test_semantic_edge_survives_build_from_json["test_semantic_edge_survives_build_from_json[]"]
    center -->|"calls"| N_tests_test_semantic_similarity_test_semantic_edge_nodes_present["test_semantic_edge_nodes_present[]"]
    center -->|"calls"| N_tests_test_semantic_similarity_test_semantic_edge_confidence_score_preserved["test_semantic_edge_confidence_score_preserved[]"]
    center -->|"calls"| N_tests_test_semantic_similarity_make_report_with_semantic_surprise["_make_report_with_semantic_surprise[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_make_extraction_with_semantic_edge()]] - `calls` [EXTRACTED]
- [[_make_report_with_semantic_surprise()]] - `calls` [EXTRACTED]
- [[test_semantic_edge_confidence_score_preserved()]] - `calls` [EXTRACTED]
- [[test_semantic_edge_nodes_present()]] - `calls` [EXTRACTED]
- [[test_semantic_edge_survives_build_from_json()]] - `calls` [EXTRACTED]
- [[test_semantic_similarity.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_make_graph_with_semantic_edge()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None