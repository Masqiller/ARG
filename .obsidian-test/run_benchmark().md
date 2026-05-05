---
source_file: "vendor/graphify/graphify/benchmark.py"
type: "code"
community: "Community None"
degree: 11
location: "L64"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# run_benchmark()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 11

## Architecture Graph
```mermaid
graph LR
    center["run_benchmark[]"]:::centerNode
    center -->|"calls"| N_tests_test_benchmark_test_run_benchmark_returns_reduction["test_run_benchmark_returns_reduction[]"]
    center -->|"calls"| N_tests_test_benchmark_test_run_benchmark_corpus_tokens_proportional["test_run_benchmark_corpus_tokens_proportional[]"]
    center -->|"calls"| N_tests_test_benchmark_test_run_benchmark_per_question_list["test_run_benchmark_per_question_list[]"]
    center -->|"calls"| N_tests_test_benchmark_test_run_benchmark_estimates_corpus_if_no_words["test_run_benchmark_estimates_corpus_if_no_words[]"]
    center -->|"calls"| N_tests_test_benchmark_test_run_benchmark_error_on_empty_graph["test_run_benchmark_error_on_empty_graph[]"]
    center -->|"calls"| N_tests_test_benchmark_test_run_benchmark_includes_node_edge_counts["test_run_benchmark_includes_node_edge_counts[]"]
    center -->|"calls"| N_tests_test_benchmark_test_print_benchmark_no_crash["test_print_benchmark_no_crash[]"]
    center -->|"contains"| N_vendor_graphify_graphify_benchmark_py["benchmark.py"]
    center -->|"calls"| N_graphify_benchmark_query_subgraph_tokens["_query_subgraph_tokens[]"]
    center -->|"rationale_for"| N_graphify_benchmark_rationale_69["Measure token reduction: corpus tokens vs graphify query tokens.      Args:"]
    center -->|"calls"| N_graphify_main_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Measure token reduction corpus tokens vs graphify query tokens.      Args]] - `rationale_for` [EXTRACTED]
- [[_query_subgraph_tokens()]] - `calls` [EXTRACTED]
- [[benchmark.py]] - `contains` [EXTRACTED]
- [[main()_2]] - `calls` [INFERRED]
- [[test_print_benchmark_no_crash()]] - `calls` [INFERRED]
- [[test_run_benchmark_corpus_tokens_proportional()]] - `calls` [INFERRED]
- [[test_run_benchmark_error_on_empty_graph()]] - `calls` [INFERRED]
- [[test_run_benchmark_estimates_corpus_if_no_words()]] - `calls` [INFERRED]
- [[test_run_benchmark_includes_node_edge_counts()]] - `calls` [INFERRED]
- [[test_run_benchmark_per_question_list()]] - `calls` [INFERRED]
- [[test_run_benchmark_returns_reduction()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[run_benchmark()]]
```

#graphify/code #graphify/INFERRED #community/Community_None