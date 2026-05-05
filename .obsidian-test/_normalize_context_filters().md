---
source_file: "vendor/graphify/graphify/serve.py"
type: "code"
community: "Community None"
degree: 5
location: "L76"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _normalize_context_filters()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["_normalize_context_filters[]"]:::centerNode
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_serve_py["serve.py"]
    center -->|"calls"| N_graphify_serve_strip_diacritics["_strip_diacritics[]"]
    center -->|"calls"| N_graphify_serve_resolve_context_filters["_resolve_context_filters[]"]
    center -->|"calls"| N_graphify_serve_filter_graph_by_context["_filter_graph_by_context[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_filter_graph_by_context()]] - `calls` [EXTRACTED]
- [[_resolve_context_filters()]] - `calls` [EXTRACTED]
- [[_strip_diacritics()_1]] - `calls` [EXTRACTED]
- [[serve.py]] - `contains` [EXTRACTED]
- [[str]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_normalize_context_filters()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None