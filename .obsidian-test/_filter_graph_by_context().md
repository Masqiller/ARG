---
source_file: "vendor/graphify/graphify/serve.py"
type: "code"
community: "Community None"
degree: 4
location: "L111"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _filter_graph_by_context()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["_filter_graph_by_context[]"]:::centerNode
    center -->|"calls"| N_tests_test_serve_test_filter_graph_by_context_limits_traversal["test_filter_graph_by_context_limits_traversal[]"]
    center -->|"contains"| N_vendor_graphify_graphify_serve_py["serve.py"]
    center -->|"calls"| N_graphify_serve_normalize_context_filters["_normalize_context_filters[]"]
    center -->|"calls"| N_graphify_serve_query_graph_text["_query_graph_text[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_normalize_context_filters()]] - `calls` [EXTRACTED]
- [[_query_graph_text()]] - `calls` [EXTRACTED]
- [[serve.py]] - `contains` [EXTRACTED]
- [[test_filter_graph_by_context_limits_traversal()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_filter_graph_by_context()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None