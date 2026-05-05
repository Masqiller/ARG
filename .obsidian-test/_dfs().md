---
source_file: "vendor/graphify/graphify/serve.py"
type: "code"
community: "Community None"
degree: 4
location: "L144"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# _dfs()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["_dfs[]"]:::centerNode
    center -->|"calls"| N_tests_test_serve_test_dfs_depth_1["test_dfs_depth_1[]"]
    center -->|"calls"| N_tests_test_serve_test_dfs_full_chain["test_dfs_full_chain[]"]
    center -->|"contains"| N_vendor_graphify_graphify_serve_py["serve.py"]
    center -->|"calls"| N_graphify_serve_query_graph_text["_query_graph_text[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_query_graph_text()]] - `calls` [EXTRACTED]
- [[serve.py]] - `contains` [EXTRACTED]
- [[test_dfs_depth_1()]] - `calls` [INFERRED]
- [[test_dfs_full_chain()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_dfs()]]
```

#graphify/code #graphify/INFERRED #community/Community_None