---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 13
location: "L3790"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# extract_elixir()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["extract_elixir[]"]:::centerNode
    center -->|"calls"| N_tests_test_languages_test_elixir_finds_module["test_elixir_finds_module[]"]
    center -->|"calls"| N_tests_test_languages_test_elixir_finds_functions["test_elixir_finds_functions[]"]
    center -->|"calls"| N_tests_test_languages_test_elixir_finds_imports["test_elixir_finds_imports[]"]
    center -->|"calls"| N_tests_test_languages_test_elixir_import_edges_have_import_context["test_elixir_import_edges_have_import_context[]"]
    center -->|"calls"| N_tests_test_languages_test_elixir_finds_calls["test_elixir_finds_calls[]"]
    center -->|"calls"| N_tests_test_languages_test_elixir_call_edges_have_call_context["test_elixir_call_edges_have_call_context[]"]
    center -->|"calls"| N_tests_test_languages_test_elixir_method_edges["test_elixir_method_edges[]"]
    center -->|"calls"| N_fixtures_sample_graph_add_node[".add_node[]"]
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_make_id["_make_id[]"]
    center -->|"calls"| N_graphify_extract_file_stem["_file_stem[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_3791["Extract modules, functions, imports, and calls from a .ex/.exs file."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.add_node()]] - `calls` [INFERRED]
- [[Extract modules, functions, imports, and calls from a .ex.exs file.]] - `rationale_for` [EXTRACTED]
- [[_file_stem()]] - `calls` [EXTRACTED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[test_elixir_call_edges_have_call_context()]] - `calls` [INFERRED]
- [[test_elixir_finds_calls()]] - `calls` [INFERRED]
- [[test_elixir_finds_functions()]] - `calls` [INFERRED]
- [[test_elixir_finds_imports()]] - `calls` [INFERRED]
- [[test_elixir_finds_module()]] - `calls` [INFERRED]
- [[test_elixir_import_edges_have_import_context()]] - `calls` [INFERRED]
- [[test_elixir_method_edges()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_elixir()]]
```

#graphify/code #graphify/INFERRED #community/Community_None