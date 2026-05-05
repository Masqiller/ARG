---
source_file: "vendor/graphify/graphify/serve.py"
type: "code"
community: "Community None"
degree: 7
location: "L51"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# _score_nodes()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["_score_nodes[]"]:::centerNode
    center -->|"calls"| N_tests_test_serve_test_score_nodes_exact_label_match["test_score_nodes_exact_label_match[]"]
    center -->|"calls"| N_tests_test_serve_test_score_nodes_no_match["test_score_nodes_no_match[]"]
    center -->|"calls"| N_tests_test_serve_test_score_nodes_source_file_partial["test_score_nodes_source_file_partial[]"]
    center -->|"calls"| N_graphify_main_main["main[]"]
    center -->|"contains"| N_vendor_graphify_graphify_serve_py["serve.py"]
    center -->|"calls"| N_graphify_serve_strip_diacritics["_strip_diacritics[]"]
    center -->|"calls"| N_graphify_serve_query_graph_text["_query_graph_text[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_query_graph_text()]] - `calls` [EXTRACTED]
- [[_strip_diacritics()_1]] - `calls` [EXTRACTED]
- [[main()_2]] - `calls` [INFERRED]
- [[serve.py]] - `contains` [EXTRACTED]
- [[test_score_nodes_exact_label_match()]] - `calls` [INFERRED]
- [[test_score_nodes_no_match()]] - `calls` [INFERRED]
- [[test_score_nodes_source_file_partial()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_score_nodes()]]
```

#graphify/code #graphify/INFERRED #community/Community_None