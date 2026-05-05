---
source_file: "vendor/graphify/graphify/serve.py"
type: "code"
community: "Community None"
degree: 7
location: "L128"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# _bfs()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["_bfs[]"]:::centerNode
    center -->|"calls"| N_tests_test_serve_test_bfs_depth_1["test_bfs_depth_1[]"]
    center -->|"calls"| N_tests_test_serve_test_bfs_depth_2["test_bfs_depth_2[]"]
    center -->|"calls"| N_tests_test_serve_test_bfs_disconnected["test_bfs_disconnected[]"]
    center -->|"calls"| N_tests_test_serve_test_bfs_returns_edges["test_bfs_returns_edges[]"]
    center -->|"calls"| N_tests_test_serve_test_filter_graph_by_context_limits_traversal["test_filter_graph_by_context_limits_traversal[]"]
    center -->|"contains"| N_vendor_graphify_graphify_serve_py["serve.py"]
    center -->|"calls"| N_graphify_serve_query_graph_text["_query_graph_text[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_query_graph_text()]] - `calls` [EXTRACTED]
- [[serve.py]] - `contains` [EXTRACTED]
- [[test_bfs_depth_1()]] - `calls` [INFERRED]
- [[test_bfs_depth_2()]] - `calls` [INFERRED]
- [[test_bfs_disconnected()]] - `calls` [INFERRED]
- [[test_bfs_returns_edges()]] - `calls` [INFERRED]
- [[test_filter_graph_by_context_limits_traversal()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_bfs()]]
```

#graphify/code #graphify/INFERRED #community/Community_None