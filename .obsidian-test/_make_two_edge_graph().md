---
source_file: "vendor/graphify/tests/test_semantic_similarity.py"
type: "code"
community: "Community None"
degree: 4
location: "L43"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _make_two_edge_graph()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["_make_two_edge_graph[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_semantic_similarity_py["test_semantic_similarity.py"]
    center -->|"calls"| N_tests_test_semantic_similarity_test_semantic_edge_scores_higher_than_references["test_semantic_edge_scores_higher_than_references[]"]
    center -->|"calls"| N_tests_test_semantic_similarity_test_semantic_edge_reason_mentions_similarity["test_semantic_edge_reason_mentions_similarity[]"]
    center -->|"rationale_for"| N_tests_test_semantic_similarity_rationale_44["Graph with one semantically_similar_to edge and one references edge, both cross-"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Graph with one semantically_similar_to edge and one references edge, both cross-]] - `rationale_for` [EXTRACTED]
- [[test_semantic_edge_reason_mentions_similarity()]] - `calls` [EXTRACTED]
- [[test_semantic_edge_scores_higher_than_references()]] - `calls` [EXTRACTED]
- [[test_semantic_similarity.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_make_two_edge_graph()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None