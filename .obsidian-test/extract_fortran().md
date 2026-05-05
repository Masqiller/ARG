---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 17
location: "L2441"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# extract_fortran()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 17

## Architecture Graph
```mermaid
graph LR
    center["extract_fortran[]"]:::centerNode
    center -->|"calls"| N_tests_test_languages_test_fortran_finds_module["test_fortran_finds_module[]"]
    center -->|"calls"| N_tests_test_languages_test_fortran_finds_subroutines["test_fortran_finds_subroutines[]"]
    center -->|"calls"| N_tests_test_languages_test_fortran_finds_function["test_fortran_finds_function[]"]
    center -->|"calls"| N_tests_test_languages_test_fortran_finds_program["test_fortran_finds_program[]"]
    center -->|"calls"| N_tests_test_languages_test_fortran_finds_use_imports["test_fortran_finds_use_imports[]"]
    center -->|"calls"| N_tests_test_languages_test_fortran_use_edges_have_use_context["test_fortran_use_edges_have_use_context[]"]
    center -->|"calls"| N_tests_test_languages_test_fortran_finds_calls["test_fortran_finds_calls[]"]
    center -->|"calls"| N_tests_test_languages_test_fortran_case_insensitive_names["test_fortran_case_insensitive_names[]"]
    center -->|"calls"| N_tests_test_languages_test_fortran_no_dangling_edges["test_fortran_no_dangling_edges[]"]
    center -->|"calls"| N_tests_test_languages_test_fortran_capital_f_parses_preprocessed["test_fortran_capital_F_parses_preprocessed[]"]
    center -->|"calls"| N_fixtures_sample_graph_add_node[".add_node[]"]
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_make_id["_make_id[]"]
    center -->|"calls"| N_graphify_extract_file_stem["_file_stem[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.add_node()]] - `calls` [INFERRED]
- [[Extract programs, modules, subroutines, functions, use statements, and calls fro]] - `rationale_for` [EXTRACTED]
- [[_cpp_preprocess()]] - `calls` [EXTRACTED]
- [[_file_stem()]] - `calls` [EXTRACTED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[test_fortran_capital_F_parses_preprocessed()]] - `calls` [INFERRED]
- [[test_fortran_case_insensitive_names()]] - `calls` [INFERRED]
- [[test_fortran_finds_calls()]] - `calls` [INFERRED]
- [[test_fortran_finds_function()]] - `calls` [INFERRED]
- [[test_fortran_finds_module()]] - `calls` [INFERRED]
- [[test_fortran_finds_program()]] - `calls` [INFERRED]
- [[test_fortran_finds_subroutines()]] - `calls` [INFERRED]
- [[test_fortran_finds_use_imports()]] - `calls` [INFERRED]
- [[test_fortran_no_dangling_edges()]] - `calls` [INFERRED]
- [[test_fortran_use_edges_have_use_context()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_fortran()]]
```

#graphify/code #graphify/INFERRED #community/Community_None