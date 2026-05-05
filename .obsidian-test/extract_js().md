---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 18
location: "L1734"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# extract_js()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 18

## Architecture Graph
```mermaid
graph LR
    center["extract_js[]"]:::centerNode
    center -->|"calls"| N_tests_test_languages_test_ts_dynamic_import_no_error["test_ts_dynamic_import_no_error[]"]
    center -->|"calls"| N_tests_test_languages_test_ts_dynamic_import_extracts_edges["test_ts_dynamic_import_extracts_edges[]"]
    center -->|"calls"| N_tests_test_languages_test_ts_dynamic_import_confidence["test_ts_dynamic_import_confidence[]"]
    center -->|"calls"| N_tests_test_languages_test_ts_dynamic_import_source_is_function["test_ts_dynamic_import_source_is_function[]"]
    center -->|"calls"| N_tests_test_languages_test_ts_no_dynamic_import_in_sync_fn["test_ts_no_dynamic_import_in_sync_fn[]"]
    center -->|"calls"| N_tests_test_languages_test_ts_dynamic_template_literal_skipped["test_ts_dynamic_template_literal_skipped[]"]
    center -->|"calls"| N_tests_test_languages_test_ts_static_template_literal_resolved["test_ts_static_template_literal_resolved[]"]
    center -->|"calls"| N_tests_test_multilang_test_ts_finds_class["test_ts_finds_class[]"]
    center -->|"calls"| N_tests_test_multilang_test_ts_finds_methods["test_ts_finds_methods[]"]
    center -->|"calls"| N_tests_test_multilang_test_ts_finds_function["test_ts_finds_function[]"]
    center -->|"calls"| N_tests_test_multilang_test_ts_emits_calls["test_ts_emits_calls[]"]
    center -->|"calls"| N_tests_test_multilang_test_ts_calls_are_extracted["test_ts_calls_are_extracted[]"]
    center -->|"calls"| N_tests_test_multilang_test_ts_import_edges_have_import_context["test_ts_import_edges_have_import_context[]"]
    center -->|"calls"| N_tests_test_multilang_test_ts_call_edges_have_call_context["test_ts_call_edges_have_call_context[]"]
    center -->|"calls"| N_tests_test_multilang_test_ts_no_dangling_edges["test_ts_no_dangling_edges[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Extract classes, functions, arrow functions, and imports from a .js.ts.tsx fil]] - `rationale_for` [EXTRACTED]
- [[_extract_generic()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[test_ts_call_edges_have_call_context()]] - `calls` [INFERRED]
- [[test_ts_calls_are_extracted()]] - `calls` [INFERRED]
- [[test_ts_dynamic_import_confidence()]] - `calls` [INFERRED]
- [[test_ts_dynamic_import_extracts_edges()]] - `calls` [INFERRED]
- [[test_ts_dynamic_import_no_error()]] - `calls` [INFERRED]
- [[test_ts_dynamic_import_source_is_function()]] - `calls` [INFERRED]
- [[test_ts_dynamic_template_literal_skipped()]] - `calls` [INFERRED]
- [[test_ts_emits_calls()]] - `calls` [INFERRED]
- [[test_ts_finds_class()]] - `calls` [INFERRED]
- [[test_ts_finds_function()]] - `calls` [INFERRED]
- [[test_ts_finds_methods()]] - `calls` [INFERRED]
- [[test_ts_import_edges_have_import_context()]] - `calls` [INFERRED]
- [[test_ts_no_dangling_edges()]] - `calls` [INFERRED]
- [[test_ts_no_dynamic_import_in_sync_fn()]] - `calls` [INFERRED]
- [[test_ts_static_template_literal_resolved()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_js()]]
```

#graphify/code #graphify/INFERRED #community/Community_None