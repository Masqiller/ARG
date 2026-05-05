---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 23
location: "L1726"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# extract_python()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 23

## Architecture Graph
```mermaid
graph LR
    center["extract_python[]"]:::centerNode
    center -->|"calls"| N_tests_test_extract_test_extract_python_finds_class["test_extract_python_finds_class[]"]
    center -->|"calls"| N_tests_test_extract_test_extract_python_finds_methods["test_extract_python_finds_methods[]"]
    center -->|"calls"| N_tests_test_extract_test_extract_python_no_dangling_edges["test_extract_python_no_dangling_edges[]"]
    center -->|"calls"| N_tests_test_extract_test_structural_edges_are_extracted["test_structural_edges_are_extracted[]"]
    center -->|"calls"| N_tests_test_extract_test_calls_edges_emitted["test_calls_edges_emitted[]"]
    center -->|"calls"| N_tests_test_extract_test_calls_edges_are_extracted["test_calls_edges_are_extracted[]"]
    center -->|"calls"| N_tests_test_extract_test_python_call_edges_have_call_context["test_python_call_edges_have_call_context[]"]
    center -->|"calls"| N_tests_test_extract_test_calls_no_self_loops["test_calls_no_self_loops[]"]
    center -->|"calls"| N_tests_test_extract_test_run_analysis_calls_compute_score["test_run_analysis_calls_compute_score[]"]
    center -->|"calls"| N_tests_test_extract_test_run_analysis_calls_normalize["test_run_analysis_calls_normalize[]"]
    center -->|"calls"| N_tests_test_extract_test_method_calls_module_function["test_method_calls_module_function[]"]
    center -->|"calls"| N_tests_test_extract_test_calls_deduplication["test_calls_deduplication[]"]
    center -->|"calls"| N_tests_test_rationale_test_module_docstring_extracted["test_module_docstring_extracted[]"]
    center -->|"calls"| N_tests_test_rationale_test_function_docstring_extracted["test_function_docstring_extracted[]"]
    center -->|"calls"| N_tests_test_rationale_test_class_docstring_extracted["test_class_docstring_extracted[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Extract classes, functions, and imports from a .py file via tree-sitter AST.]] - `rationale_for` [EXTRACTED]
- [[_extract_generic()]] - `calls` [EXTRACTED]
- [[_extract_python_rationale()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[test_calls_deduplication()]] - `calls` [INFERRED]
- [[test_calls_edges_are_extracted()]] - `calls` [INFERRED]
- [[test_calls_edges_emitted()]] - `calls` [INFERRED]
- [[test_calls_no_self_loops()]] - `calls` [INFERRED]
- [[test_class_docstring_extracted()]] - `calls` [INFERRED]
- [[test_extract_python_finds_class()]] - `calls` [INFERRED]
- [[test_extract_python_finds_methods()]] - `calls` [INFERRED]
- [[test_extract_python_no_dangling_edges()]] - `calls` [INFERRED]
- [[test_function_docstring_extracted()]] - `calls` [INFERRED]
- [[test_method_calls_module_function()]] - `calls` [INFERRED]
- [[test_module_docstring_extracted()]] - `calls` [INFERRED]
- [[test_python_call_edges_have_call_context()]] - `calls` [INFERRED]
- [[test_rationale_comment_extracted()]] - `calls` [INFERRED]
- [[test_rationale_confidence_is_extracted()]] - `calls` [INFERRED]
- [[test_rationale_for_edges_present()]] - `calls` [INFERRED]
- [[test_run_analysis_calls_compute_score()]] - `calls` [INFERRED]
- [[test_run_analysis_calls_normalize()]] - `calls` [INFERRED]
- [[test_short_docstring_ignored()]] - `calls` [INFERRED]
- [[test_structural_edges_are_extracted()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_python()]]
```

#graphify/code #graphify/INFERRED #community/Community_None