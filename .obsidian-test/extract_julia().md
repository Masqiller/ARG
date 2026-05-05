---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 17
location: "L2200"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# extract_julia()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 17

## Architecture Graph
```mermaid
graph LR
    center["extract_julia[]"]:::centerNode
    center -->|"calls"| N_tests_test_languages_test_julia_finds_module["test_julia_finds_module[]"]
    center -->|"calls"| N_tests_test_languages_test_julia_finds_structs["test_julia_finds_structs[]"]
    center -->|"calls"| N_tests_test_languages_test_julia_finds_abstract_type["test_julia_finds_abstract_type[]"]
    center -->|"calls"| N_tests_test_languages_test_julia_finds_functions["test_julia_finds_functions[]"]
    center -->|"calls"| N_tests_test_languages_test_julia_finds_short_function["test_julia_finds_short_function[]"]
    center -->|"calls"| N_tests_test_languages_test_julia_finds_imports["test_julia_finds_imports[]"]
    center -->|"calls"| N_tests_test_languages_test_julia_import_edges_have_import_context["test_julia_import_edges_have_import_context[]"]
    center -->|"calls"| N_tests_test_languages_test_julia_finds_inherits["test_julia_finds_inherits[]"]
    center -->|"calls"| N_tests_test_languages_test_julia_finds_calls["test_julia_finds_calls[]"]
    center -->|"calls"| N_tests_test_languages_test_julia_call_edges_have_call_context["test_julia_call_edges_have_call_context[]"]
    center -->|"calls"| N_tests_test_languages_test_julia_no_dangling_edges["test_julia_no_dangling_edges[]"]
    center -->|"calls"| N_fixtures_sample_graph_add_node[".add_node[]"]
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_make_id["_make_id[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.add_node()]] - `calls` [INFERRED]
- [[Extract modules, structs, functions, imports, and calls from a .jl file.]] - `rationale_for` [EXTRACTED]
- [[_file_stem()]] - `calls` [EXTRACTED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[test_julia_call_edges_have_call_context()]] - `calls` [INFERRED]
- [[test_julia_finds_abstract_type()]] - `calls` [INFERRED]
- [[test_julia_finds_calls()]] - `calls` [INFERRED]
- [[test_julia_finds_functions()]] - `calls` [INFERRED]
- [[test_julia_finds_imports()]] - `calls` [INFERRED]
- [[test_julia_finds_inherits()]] - `calls` [INFERRED]
- [[test_julia_finds_module()]] - `calls` [INFERRED]
- [[test_julia_finds_short_function()]] - `calls` [INFERRED]
- [[test_julia_finds_structs()]] - `calls` [INFERRED]
- [[test_julia_import_edges_have_import_context()]] - `calls` [INFERRED]
- [[test_julia_no_dangling_edges()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_julia()]]
```

#graphify/code #graphify/INFERRED #community/Community_None