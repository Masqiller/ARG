---
source_file: "vendor/graphify/tests/test_multilang.py"
type: "code"
community: "Community None"
degree: 38
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_multilang.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 38

## Architecture Graph
```mermaid
graph LR
    center["test_multilang.py"]:::centerNode
    center -->|"contains"| N_tests_test_multilang_labels["_labels[]"]
    center -->|"contains"| N_tests_test_multilang_call_pairs["_call_pairs[]"]
    center -->|"contains"| N_tests_test_multilang_confidences["_confidences[]"]
    center -->|"contains"| N_tests_test_multilang_edges_with_relation["_edges_with_relation[]"]
    center -->|"contains"| N_tests_test_multilang_test_ts_finds_class["test_ts_finds_class[]"]
    center -->|"contains"| N_tests_test_multilang_test_ts_finds_methods["test_ts_finds_methods[]"]
    center -->|"contains"| N_tests_test_multilang_test_ts_finds_function["test_ts_finds_function[]"]
    center -->|"contains"| N_tests_test_multilang_test_ts_emits_calls["test_ts_emits_calls[]"]
    center -->|"contains"| N_tests_test_multilang_test_ts_calls_are_extracted["test_ts_calls_are_extracted[]"]
    center -->|"contains"| N_tests_test_multilang_test_ts_import_edges_have_import_context["test_ts_import_edges_have_import_context[]"]
    center -->|"contains"| N_tests_test_multilang_test_ts_call_edges_have_call_context["test_ts_call_edges_have_call_context[]"]
    center -->|"contains"| N_tests_test_multilang_test_ts_no_dangling_edges["test_ts_no_dangling_edges[]"]
    center -->|"contains"| N_tests_test_multilang_test_go_finds_struct["test_go_finds_struct[]"]
    center -->|"contains"| N_tests_test_multilang_test_go_finds_methods["test_go_finds_methods[]"]
    center -->|"contains"| N_tests_test_multilang_test_go_finds_constructor["test_go_finds_constructor[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Tests for multi-language AST extraction JSTS, Go, Rust, SQL.]] - `rationale_for` [EXTRACTED]
- [[_call_pairs()]] - `contains` [EXTRACTED]
- [[_confidences()]] - `contains` [EXTRACTED]
- [[_edges_with_relation()_1]] - `contains` [EXTRACTED]
- [[_labels()_1]] - `contains` [EXTRACTED]
- [[test_cache_hit_returns_same_result()]] - `contains` [EXTRACTED]
- [[test_cache_miss_after_file_change()]] - `contains` [EXTRACTED]
- [[test_extract_dispatches_all_languages()]] - `contains` [EXTRACTED]
- [[test_go_call_edges_have_call_context()]] - `contains` [EXTRACTED]
- [[test_go_emits_calls()]] - `contains` [EXTRACTED]
- [[test_go_finds_constructor()]] - `contains` [EXTRACTED]
- [[test_go_finds_methods()]] - `contains` [EXTRACTED]
- [[test_go_finds_struct()]] - `contains` [EXTRACTED]
- [[test_go_has_extracted_calls()]] - `contains` [EXTRACTED]
- [[test_go_import_edges_have_import_context()]] - `contains` [EXTRACTED]
- [[test_go_no_dangling_edges()]] - `contains` [EXTRACTED]
- [[test_rust_call_edges_have_call_context()]] - `contains` [EXTRACTED]
- [[test_rust_calls_are_extracted()]] - `contains` [EXTRACTED]
- [[test_rust_emits_calls()]] - `contains` [EXTRACTED]
- [[test_rust_finds_function()]] - `contains` [EXTRACTED]
- [[test_rust_finds_impl_methods()]] - `contains` [EXTRACTED]
- [[test_rust_finds_struct()]] - `contains` [EXTRACTED]
- [[test_rust_import_edges_have_import_context()]] - `contains` [EXTRACTED]
- [[test_rust_no_dangling_edges()]] - `contains` [EXTRACTED]
- [[test_sql_emits_foreign_key_edge()]] - `contains` [EXTRACTED]
- [[test_sql_emits_reads_from_edge()]] - `contains` [EXTRACTED]
- [[test_sql_finds_function()]] - `contains` [EXTRACTED]
- [[test_sql_finds_tables()]] - `contains` [EXTRACTED]
- [[test_sql_finds_view()]] - `contains` [EXTRACTED]
- [[test_sql_no_dangling_edges()]] - `contains` [EXTRACTED]
- [[test_ts_call_edges_have_call_context()]] - `contains` [EXTRACTED]
- [[test_ts_calls_are_extracted()]] - `contains` [EXTRACTED]
- [[test_ts_emits_calls()]] - `contains` [EXTRACTED]
- [[test_ts_finds_class()]] - `contains` [EXTRACTED]
- [[test_ts_finds_function()]] - `contains` [EXTRACTED]
- [[test_ts_finds_methods()]] - `contains` [EXTRACTED]
- [[test_ts_import_edges_have_import_context()]] - `contains` [EXTRACTED]
- [[test_ts_no_dangling_edges()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_multilang.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None