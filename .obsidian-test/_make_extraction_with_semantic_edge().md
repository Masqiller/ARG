---
source_file: "vendor/graphify/tests/test_semantic_similarity.py"
type: "code"
community: "Community None"
degree: 3
location: "L13"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _make_extraction_with_semantic_edge()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_make_extraction_with_semantic_edge[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_semantic_similarity_py["test_semantic_similarity.py"]
    center -->|"calls"| N_tests_test_semantic_similarity_make_graph_with_semantic_edge["_make_graph_with_semantic_edge[]"]
    center -->|"rationale_for"| N_tests_test_semantic_similarity_rationale_14["Two nodes in separate files connected by a semantically_similar_to edge."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Two nodes in separate files connected by a semantically_similar_to edge.]] - `rationale_for` [EXTRACTED]
- [[_make_graph_with_semantic_edge()]] - `calls` [EXTRACTED]
- [[test_semantic_similarity.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_make_extraction_with_semantic_edge()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None