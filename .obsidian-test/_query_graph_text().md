---
source_file: "vendor/graphify/graphify/serve.py"
type: "code"
community: "Community None"
degree: 10
location: "L193"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _query_graph_text()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["_query_graph_text[]"]:::centerNode
    center -->|"calls"| N_tests_test_serve_test_query_graph_text_explicit_context_filter_changes_traversal["test_query_graph_text_explicit_context_filter_changes_traversal[]"]
    center -->|"calls"| N_tests_test_serve_test_query_graph_text_heuristic_context_filter_changes_traversal["test_query_graph_text_heuristic_context_filter_changes_traversal[]"]
    center -->|"calls"| N_graphify_main_main["main[]"]
    center -->|"contains"| N_vendor_graphify_graphify_serve_py["serve.py"]
    center -->|"calls"| N_graphify_serve_score_nodes["_score_nodes[]"]
    center -->|"calls"| N_graphify_serve_resolve_context_filters["_resolve_context_filters[]"]
    center -->|"calls"| N_graphify_serve_filter_graph_by_context["_filter_graph_by_context[]"]
    center -->|"calls"| N_graphify_serve_bfs["_bfs[]"]
    center -->|"calls"| N_graphify_serve_dfs["_dfs[]"]
    center -->|"calls"| N_graphify_serve_subgraph_to_text["_subgraph_to_text[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_bfs()]] - `calls` [EXTRACTED]
- [[_dfs()]] - `calls` [EXTRACTED]
- [[_filter_graph_by_context()]] - `calls` [EXTRACTED]
- [[_resolve_context_filters()]] - `calls` [EXTRACTED]
- [[_score_nodes()]] - `calls` [EXTRACTED]
- [[_subgraph_to_text()]] - `calls` [EXTRACTED]
- [[main()_2]] - `calls` [INFERRED]
- [[serve.py]] - `contains` [EXTRACTED]
- [[test_query_graph_text_explicit_context_filter_changes_traversal()]] - `calls` [INFERRED]
- [[test_query_graph_text_heuristic_context_filter_changes_traversal()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_query_graph_text()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None