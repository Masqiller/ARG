---
source_file: "vendor/graphify/tests/test_benchmark.py"
type: "code"
community: "Community None"
degree: 14
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_benchmark.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 14

## Architecture Graph
```mermaid
graph LR
    center["test_benchmark.py"]:::centerNode
    center -->|"contains"| N_tests_test_benchmark_make_graph["_make_graph[]"]
    center -->|"contains"| N_tests_test_benchmark_write_graph["_write_graph[]"]
    center -->|"contains"| N_tests_test_benchmark_test_query_returns_positive_for_matching_question["test_query_returns_positive_for_matching_question[]"]
    center -->|"contains"| N_tests_test_benchmark_test_query_returns_zero_for_no_match["test_query_returns_zero_for_no_match[]"]
    center -->|"contains"| N_tests_test_benchmark_test_query_bfs_expands_neighbors["test_query_bfs_expands_neighbors[]"]
    center -->|"contains"| N_tests_test_benchmark_test_run_benchmark_returns_reduction["test_run_benchmark_returns_reduction[]"]
    center -->|"contains"| N_tests_test_benchmark_test_run_benchmark_corpus_tokens_proportional["test_run_benchmark_corpus_tokens_proportional[]"]
    center -->|"contains"| N_tests_test_benchmark_test_run_benchmark_per_question_list["test_run_benchmark_per_question_list[]"]
    center -->|"contains"| N_tests_test_benchmark_test_run_benchmark_estimates_corpus_if_no_words["test_run_benchmark_estimates_corpus_if_no_words[]"]
    center -->|"contains"| N_tests_test_benchmark_test_run_benchmark_error_on_empty_graph["test_run_benchmark_error_on_empty_graph[]"]
    center -->|"contains"| N_tests_test_benchmark_test_run_benchmark_includes_node_edge_counts["test_run_benchmark_includes_node_edge_counts[]"]
    center -->|"contains"| N_tests_test_benchmark_test_print_benchmark_no_crash["test_print_benchmark_no_crash[]"]
    center -->|"contains"| N_tests_test_benchmark_test_print_benchmark_error_message["test_print_benchmark_error_message[]"]
    center -->|"rationale_for"| N_tests_test_benchmark_rationale_1["Tests for graphify/benchmark.py."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Tests for graphifybenchmark.py.]] - `rationale_for` [EXTRACTED]
- [[_make_graph()]] - `contains` [EXTRACTED]
- [[_write_graph()]] - `contains` [EXTRACTED]
- [[test_print_benchmark_error_message()]] - `contains` [EXTRACTED]
- [[test_print_benchmark_no_crash()]] - `contains` [EXTRACTED]
- [[test_query_bfs_expands_neighbors()]] - `contains` [EXTRACTED]
- [[test_query_returns_positive_for_matching_question()]] - `contains` [EXTRACTED]
- [[test_query_returns_zero_for_no_match()]] - `contains` [EXTRACTED]
- [[test_run_benchmark_corpus_tokens_proportional()]] - `contains` [EXTRACTED]
- [[test_run_benchmark_error_on_empty_graph()]] - `contains` [EXTRACTED]
- [[test_run_benchmark_estimates_corpus_if_no_words()]] - `contains` [EXTRACTED]
- [[test_run_benchmark_includes_node_edge_counts()]] - `contains` [EXTRACTED]
- [[test_run_benchmark_per_question_list()]] - `contains` [EXTRACTED]
- [[test_run_benchmark_returns_reduction()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_benchmark.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None