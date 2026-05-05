---
source_file: "vendor/graphify/graphify/serve.py"
type: "code"
community: "Community None"
degree: 5
location: "L101"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _resolve_context_filters()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["_resolve_context_filters[]"]:::centerNode
    center -->|"calls"| N_tests_test_serve_test_resolve_context_filters_explicit_overrides_heuristic["test_resolve_context_filters_explicit_overrides_heuristic[]"]
    center -->|"contains"| N_vendor_graphify_graphify_serve_py["serve.py"]
    center -->|"calls"| N_graphify_serve_normalize_context_filters["_normalize_context_filters[]"]
    center -->|"calls"| N_graphify_serve_infer_context_filters["_infer_context_filters[]"]
    center -->|"calls"| N_graphify_serve_query_graph_text["_query_graph_text[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_infer_context_filters()]] - `calls` [EXTRACTED]
- [[_normalize_context_filters()]] - `calls` [EXTRACTED]
- [[_query_graph_text()]] - `calls` [EXTRACTED]
- [[serve.py]] - `contains` [EXTRACTED]
- [[test_resolve_context_filters_explicit_overrides_heuristic()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_resolve_context_filters()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None