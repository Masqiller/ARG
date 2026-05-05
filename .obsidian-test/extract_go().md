---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 16
location: "L2613"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# extract_go()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 16

## Architecture Graph
```mermaid
graph LR
    center["extract_go[]"]:::centerNode
    center -->|"calls"| N_tests_test_languages_test_go_receiver_methods_share_type_node["test_go_receiver_methods_share_type_node[]"]
    center -->|"calls"| N_tests_test_languages_test_go_receiver_uses_pkg_scope["test_go_receiver_uses_pkg_scope[]"]
    center -->|"calls"| N_tests_test_multilang_test_go_finds_struct["test_go_finds_struct[]"]
    center -->|"calls"| N_tests_test_multilang_test_go_finds_methods["test_go_finds_methods[]"]
    center -->|"calls"| N_tests_test_multilang_test_go_finds_constructor["test_go_finds_constructor[]"]
    center -->|"calls"| N_tests_test_multilang_test_go_emits_calls["test_go_emits_calls[]"]
    center -->|"calls"| N_tests_test_multilang_test_go_has_extracted_calls["test_go_has_extracted_calls[]"]
    center -->|"calls"| N_tests_test_multilang_test_go_import_edges_have_import_context["test_go_import_edges_have_import_context[]"]
    center -->|"calls"| N_tests_test_multilang_test_go_call_edges_have_call_context["test_go_call_edges_have_call_context[]"]
    center -->|"calls"| N_tests_test_multilang_test_go_no_dangling_edges["test_go_no_dangling_edges[]"]
    center -->|"calls"| N_fixtures_sample_graph_add_node[".add_node[]"]
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_make_id["_make_id[]"]
    center -->|"calls"| N_graphify_extract_file_stem["_file_stem[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.add_node()]] - `calls` [INFERRED]
- [[Extract functions, methods, type declarations, and imports from a .go file.]] - `rationale_for` [EXTRACTED]
- [[_file_stem()]] - `calls` [EXTRACTED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[test_go_call_edges_have_call_context()]] - `calls` [INFERRED]
- [[test_go_emits_calls()]] - `calls` [INFERRED]
- [[test_go_finds_constructor()]] - `calls` [INFERRED]
- [[test_go_finds_methods()]] - `calls` [INFERRED]
- [[test_go_finds_struct()]] - `calls` [INFERRED]
- [[test_go_has_extracted_calls()]] - `calls` [INFERRED]
- [[test_go_import_edges_have_import_context()]] - `calls` [INFERRED]
- [[test_go_no_dangling_edges()]] - `calls` [INFERRED]
- [[test_go_receiver_methods_share_type_node()]] - `calls` [INFERRED]
- [[test_go_receiver_uses_pkg_scope()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_go()]]
```

#graphify/code #graphify/INFERRED #community/Community_None