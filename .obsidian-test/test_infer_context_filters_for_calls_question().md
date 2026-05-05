---
source_file: "vendor/graphify/tests/test_serve.py"
type: "code"
community: "Community None"
degree: 2
location: "L80"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_infer_context_filters_for_calls_question()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_infer_context_filters_for_calls_question[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_serve_py["test_serve.py"]
    center -->|"calls"| N_graphify_serve_infer_context_filters["_infer_context_filters[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_infer_context_filters()]] - `calls` [INFERRED]
- [[test_serve.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_infer_context_filters_for_calls_question()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None