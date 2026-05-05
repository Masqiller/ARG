---
source_file: "vendor/graphify/tests/test_semantic_similarity.py"
type: "code"
community: "Community None"
degree: 13
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_semantic_similarity.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["test_semantic_similarity.py"]:::centerNode
    center -->|"contains"| N_tests_test_semantic_similarity_make_extraction_with_semantic_edge["_make_extraction_with_semantic_edge[]"]
    center -->|"contains"| N_tests_test_semantic_similarity_make_graph_with_semantic_edge["_make_graph_with_semantic_edge[]"]
    center -->|"contains"| N_tests_test_semantic_similarity_make_two_edge_graph["_make_two_edge_graph[]"]
    center -->|"contains"| N_tests_test_semantic_similarity_test_semantic_edge_survives_build_from_json["test_semantic_edge_survives_build_from_json[]"]
    center -->|"contains"| N_tests_test_semantic_similarity_test_semantic_edge_nodes_present["test_semantic_edge_nodes_present[]"]
    center -->|"contains"| N_tests_test_semantic_similarity_test_semantic_edge_confidence_score_preserved["test_semantic_edge_confidence_score_preserved[]"]
    center -->|"contains"| N_tests_test_semantic_similarity_test_semantic_edge_scores_higher_than_references["test_semantic_edge_scores_higher_than_references[]"]
    center -->|"contains"| N_tests_test_semantic_similarity_test_semantic_edge_reason_mentions_similarity["test_semantic_edge_reason_mentions_similarity[]"]
    center -->|"contains"| N_tests_test_semantic_similarity_make_report_with_semantic_surprise["_make_report_with_semantic_surprise[]"]
    center -->|"contains"| N_tests_test_semantic_similarity_test_report_renders_semantically_similar_tag["test_report_renders_semantically_similar_tag[]"]
    center -->|"contains"| N_tests_test_semantic_similarity_test_report_semantic_tag_on_correct_line["test_report_semantic_tag_on_correct_line[]"]
    center -->|"contains"| N_tests_test_semantic_similarity_test_report_no_semantic_tag_for_other_relations["test_report_no_semantic_tag_for_other_relations[]"]
    center -->|"rationale_for"| N_tests_test_semantic_similarity_rationale_1["Tests for semantically_similar_to edge support."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Tests for semantically_similar_to edge support.]] - `rationale_for` [EXTRACTED]
- [[_make_extraction_with_semantic_edge()]] - `contains` [EXTRACTED]
- [[_make_graph_with_semantic_edge()]] - `contains` [EXTRACTED]
- [[_make_report_with_semantic_surprise()]] - `contains` [EXTRACTED]
- [[_make_two_edge_graph()]] - `contains` [EXTRACTED]
- [[test_report_no_semantic_tag_for_other_relations()]] - `contains` [EXTRACTED]
- [[test_report_renders_semantically_similar_tag()]] - `contains` [EXTRACTED]
- [[test_report_semantic_tag_on_correct_line()]] - `contains` [EXTRACTED]
- [[test_semantic_edge_confidence_score_preserved()]] - `contains` [EXTRACTED]
- [[test_semantic_edge_nodes_present()]] - `contains` [EXTRACTED]
- [[test_semantic_edge_reason_mentions_similarity()]] - `contains` [EXTRACTED]
- [[test_semantic_edge_scores_higher_than_references()]] - `contains` [EXTRACTED]
- [[test_semantic_edge_survives_build_from_json()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_semantic_similarity.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None