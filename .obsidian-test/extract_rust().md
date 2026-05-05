---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 14
location: "L2834"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# extract_rust()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 14

## Architecture Graph
```mermaid
graph LR
    center["extract_rust[]"]:::centerNode
    center -->|"calls"| N_tests_test_multilang_test_rust_finds_struct["test_rust_finds_struct[]"]
    center -->|"calls"| N_tests_test_multilang_test_rust_finds_impl_methods["test_rust_finds_impl_methods[]"]
    center -->|"calls"| N_tests_test_multilang_test_rust_finds_function["test_rust_finds_function[]"]
    center -->|"calls"| N_tests_test_multilang_test_rust_emits_calls["test_rust_emits_calls[]"]
    center -->|"calls"| N_tests_test_multilang_test_rust_calls_are_extracted["test_rust_calls_are_extracted[]"]
    center -->|"calls"| N_tests_test_multilang_test_rust_import_edges_have_import_context["test_rust_import_edges_have_import_context[]"]
    center -->|"calls"| N_tests_test_multilang_test_rust_call_edges_have_call_context["test_rust_call_edges_have_call_context[]"]
    center -->|"calls"| N_tests_test_multilang_test_rust_no_dangling_edges["test_rust_no_dangling_edges[]"]
    center -->|"calls"| N_fixtures_sample_graph_add_node[".add_node[]"]
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_make_id["_make_id[]"]
    center -->|"calls"| N_graphify_extract_file_stem["_file_stem[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_2835["Extract functions, structs, enums, traits, impl methods, and use declarations fr"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.add_node()]] - `calls` [INFERRED]
- [[Extract functions, structs, enums, traits, impl methods, and use declarations fr]] - `rationale_for` [EXTRACTED]
- [[_file_stem()]] - `calls` [EXTRACTED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[test_rust_call_edges_have_call_context()]] - `calls` [INFERRED]
- [[test_rust_calls_are_extracted()]] - `calls` [INFERRED]
- [[test_rust_emits_calls()]] - `calls` [INFERRED]
- [[test_rust_finds_function()]] - `calls` [INFERRED]
- [[test_rust_finds_impl_methods()]] - `calls` [INFERRED]
- [[test_rust_finds_struct()]] - `calls` [INFERRED]
- [[test_rust_import_edges_have_import_context()]] - `calls` [INFERRED]
- [[test_rust_no_dangling_edges()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_rust()]]
```

#graphify/code #graphify/INFERRED #community/Community_None