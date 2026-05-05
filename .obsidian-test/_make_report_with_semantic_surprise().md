---
source_file: "vendor/graphify/tests/test_semantic_similarity.py"
type: "code"
community: "Community None"
degree: 4
location: "L129"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _make_report_with_semantic_surprise()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["_make_report_with_semantic_surprise[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_semantic_similarity_py["test_semantic_similarity.py"]
    center -->|"calls"| N_tests_test_semantic_similarity_make_graph_with_semantic_edge["_make_graph_with_semantic_edge[]"]
    center -->|"calls"| N_tests_test_semantic_similarity_test_report_renders_semantically_similar_tag["test_report_renders_semantically_similar_tag[]"]
    center -->|"calls"| N_tests_test_semantic_similarity_test_report_semantic_tag_on_correct_line["test_report_semantic_tag_on_correct_line[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_make_graph_with_semantic_edge()]] - `calls` [EXTRACTED]
- [[test_report_renders_semantically_similar_tag()]] - `calls` [EXTRACTED]
- [[test_report_semantic_tag_on_correct_line()]] - `calls` [EXTRACTED]
- [[test_semantic_similarity.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_make_report_with_semantic_surprise()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None