---
source_file: "vendor/graphify/graphify/benchmark.py"
type: "code"
community: "Community None"
degree: 7
location: "L16"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _query_subgraph_tokens()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["_query_subgraph_tokens[]"]:::centerNode
    center -->|"calls"| N_tests_test_benchmark_test_query_returns_positive_for_matching_question["test_query_returns_positive_for_matching_question[]"]
    center -->|"calls"| N_tests_test_benchmark_test_query_returns_zero_for_no_match["test_query_returns_zero_for_no_match[]"]
    center -->|"calls"| N_tests_test_benchmark_test_query_bfs_expands_neighbors["test_query_bfs_expands_neighbors[]"]
    center -->|"contains"| N_vendor_graphify_graphify_benchmark_py["benchmark.py"]
    center -->|"calls"| N_graphify_benchmark_estimate_tokens["_estimate_tokens[]"]
    center -->|"calls"| N_graphify_benchmark_run_benchmark["run_benchmark[]"]
    center -->|"rationale_for"| N_graphify_benchmark_rationale_17["Run BFS from best-matching nodes and return estimated tokens in the subgraph con"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Run BFS from best-matching nodes and return estimated tokens in the subgraph con]] - `rationale_for` [EXTRACTED]
- [[_estimate_tokens()]] - `calls` [EXTRACTED]
- [[benchmark.py]] - `contains` [EXTRACTED]
- [[run_benchmark()]] - `calls` [EXTRACTED]
- [[test_query_bfs_expands_neighbors()]] - `calls` [INFERRED]
- [[test_query_returns_positive_for_matching_question()]] - `calls` [INFERRED]
- [[test_query_returns_zero_for_no_match()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_query_subgraph_tokens()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None