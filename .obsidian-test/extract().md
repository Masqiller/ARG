---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 21
location: "L4169"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# extract()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 21

## Architecture Graph
```mermaid
graph LR
    center["extract[]"]:::centerNode
    center -->|"calls"| N_tests_test_extract_test_extract_merges_multiple_files["test_extract_merges_multiple_files[]"]
    center -->|"calls"| N_tests_test_extract_test_no_dangling_edges_on_extract["test_no_dangling_edges_on_extract[]"]
    center -->|"calls"| N_tests_test_extract_test_cross_file_calls_skip_ambiguous_duplicate_labels["test_cross_file_calls_skip_ambiguous_duplicate_labels[]"]
    center -->|"calls"| N_tests_test_pipeline_run_pipeline["run_pipeline[]"]
    center -->|"calls"| N_tests_bench_extract_run_extraction["_run_extraction[]"]
    center -->|"calls"| N_tests_test_multilang_test_extract_dispatches_all_languages["test_extract_dispatches_all_languages[]"]
    center -->|"calls"| N_tests_test_multilang_test_cache_hit_returns_same_result["test_cache_hit_returns_same_result[]"]
    center -->|"calls"| N_tests_test_multilang_test_cache_miss_after_file_change["test_cache_miss_after_file_change[]"]
    center -->|"calls"| N_graphify_watch_rebuild_code["_rebuild_code[]"]
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_raise_recursion_limit["_raise_recursion_limit[]"]
    center -->|"calls"| N_graphify_extract_make_id["_make_id[]"]
    center -->|"calls"| N_graphify_extract_resolve_cross_file_imports["_resolve_cross_file_imports[]"]
    center -->|"calls"| N_graphify_extract_resolve_cross_file_java_imports["_resolve_cross_file_java_imports[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Extract AST nodes and edges from a list of code files.      Two-pass process]] - `rationale_for` [EXTRACTED]
- [[_check_tree_sitter_version()]] - `calls` [EXTRACTED]
- [[_extract_parallel()]] - `calls` [EXTRACTED]
- [[_extract_sequential()]] - `calls` [EXTRACTED]
- [[_get_extractor()]] - `calls` [EXTRACTED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[_raise_recursion_limit()]] - `calls` [EXTRACTED]
- [[_rebuild_code()]] - `calls` [INFERRED]
- [[_resolve_cross_file_imports()]] - `calls` [EXTRACTED]
- [[_resolve_cross_file_java_imports()]] - `calls` [EXTRACTED]
- [[_run_extraction()]] - `calls` [INFERRED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[load_cached()]] - `calls` [INFERRED]
- [[run_pipeline()]] - `calls` [INFERRED]
- [[str]] - `calls` [INFERRED]
- [[test_cache_hit_returns_same_result()]] - `calls` [INFERRED]
- [[test_cache_miss_after_file_change()]] - `calls` [INFERRED]
- [[test_cross_file_calls_skip_ambiguous_duplicate_labels()]] - `calls` [INFERRED]
- [[test_extract_dispatches_all_languages()]] - `calls` [INFERRED]
- [[test_extract_merges_multiple_files()]] - `calls` [INFERRED]
- [[test_no_dangling_edges_on_extract()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract()]]
```

#graphify/code #graphify/INFERRED #community/Community_None