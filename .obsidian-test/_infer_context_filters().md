---
source_file: "vendor/graphify/graphify/serve.py"
type: "code"
community: "Community None"
degree: 4
location: "L89"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _infer_context_filters()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["_infer_context_filters[]"]:::centerNode
    center -->|"calls"| N_tests_test_serve_test_infer_context_filters_for_calls_question["test_infer_context_filters_for_calls_question[]"]
    center -->|"contains"| N_vendor_graphify_graphify_serve_py["serve.py"]
    center -->|"calls"| N_graphify_serve_strip_diacritics["_strip_diacritics[]"]
    center -->|"calls"| N_graphify_serve_resolve_context_filters["_resolve_context_filters[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_resolve_context_filters()]] - `calls` [EXTRACTED]
- [[_strip_diacritics()_1]] - `calls` [EXTRACTED]
- [[serve.py]] - `contains` [EXTRACTED]
- [[test_infer_context_filters_for_calls_question()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_infer_context_filters()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None