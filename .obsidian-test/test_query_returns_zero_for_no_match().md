---
source_file: "vendor/graphify/tests/test_benchmark.py"
type: "code"
community: "Community None"
degree: 3
location: "L37"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_query_returns_zero_for_no_match()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_query_returns_zero_for_no_match[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_benchmark_py["test_benchmark.py"]
    center -->|"calls"| N_tests_test_benchmark_make_graph["_make_graph[]"]
    center -->|"calls"| N_graphify_benchmark_query_subgraph_tokens["_query_subgraph_tokens[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_make_graph()]] - `calls` [EXTRACTED]
- [[_query_subgraph_tokens()]] - `calls` [INFERRED]
- [[test_benchmark.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_query_returns_zero_for_no_match()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None