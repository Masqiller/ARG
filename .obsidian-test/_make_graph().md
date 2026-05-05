---
source_file: "vendor/graphify/tests/test_benchmark.py"
type: "code"
community: "Community None"
degree: 10
location: "L11"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _make_graph()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["_make_graph[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_benchmark_py["test_benchmark.py"]
    center -->|"calls"| N_tests_test_benchmark_test_query_returns_positive_for_matching_question["test_query_returns_positive_for_matching_question[]"]
    center -->|"calls"| N_tests_test_benchmark_test_query_returns_zero_for_no_match["test_query_returns_zero_for_no_match[]"]
    center -->|"calls"| N_tests_test_benchmark_test_query_bfs_expands_neighbors["test_query_bfs_expands_neighbors[]"]
    center -->|"calls"| N_tests_test_benchmark_test_run_benchmark_returns_reduction["test_run_benchmark_returns_reduction[]"]
    center -->|"calls"| N_tests_test_benchmark_test_run_benchmark_corpus_tokens_proportional["test_run_benchmark_corpus_tokens_proportional[]"]
    center -->|"calls"| N_tests_test_benchmark_test_run_benchmark_per_question_list["test_run_benchmark_per_question_list[]"]
    center -->|"calls"| N_tests_test_benchmark_test_run_benchmark_estimates_corpus_if_no_words["test_run_benchmark_estimates_corpus_if_no_words[]"]
    center -->|"calls"| N_tests_test_benchmark_test_run_benchmark_includes_node_edge_counts["test_run_benchmark_includes_node_edge_counts[]"]
    center -->|"calls"| N_tests_test_benchmark_test_print_benchmark_no_crash["test_print_benchmark_no_crash[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_benchmark.py]] - `contains` [EXTRACTED]
- [[test_print_benchmark_no_crash()]] - `calls` [EXTRACTED]
- [[test_query_bfs_expands_neighbors()]] - `calls` [EXTRACTED]
- [[test_query_returns_positive_for_matching_question()]] - `calls` [EXTRACTED]
- [[test_query_returns_zero_for_no_match()]] - `calls` [EXTRACTED]
- [[test_run_benchmark_corpus_tokens_proportional()]] - `calls` [EXTRACTED]
- [[test_run_benchmark_estimates_corpus_if_no_words()]] - `calls` [EXTRACTED]
- [[test_run_benchmark_includes_node_edge_counts()]] - `calls` [EXTRACTED]
- [[test_run_benchmark_per_question_list()]] - `calls` [EXTRACTED]
- [[test_run_benchmark_returns_reduction()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_make_graph()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None