---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 13
location: "L3588"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# extract_objc()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["extract_objc[]"]:::centerNode
    center -->|"calls"| N_tests_test_languages_test_objc_finds_interface["test_objc_finds_interface[]"]
    center -->|"calls"| N_tests_test_languages_test_objc_finds_subclass["test_objc_finds_subclass[]"]
    center -->|"calls"| N_tests_test_languages_test_objc_finds_methods["test_objc_finds_methods[]"]
    center -->|"calls"| N_tests_test_languages_test_objc_finds_imports["test_objc_finds_imports[]"]
    center -->|"calls"| N_tests_test_languages_test_objc_import_edges_have_import_context["test_objc_import_edges_have_import_context[]"]
    center -->|"calls"| N_tests_test_languages_test_objc_inherits_edge["test_objc_inherits_edge[]"]
    center -->|"calls"| N_tests_test_languages_test_objc_no_dangling_edges["test_objc_no_dangling_edges[]"]
    center -->|"calls"| N_fixtures_sample_graph_add_node[".add_node[]"]
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_make_id["_make_id[]"]
    center -->|"calls"| N_graphify_extract_file_stem["_file_stem[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_3589["Extract interfaces, implementations, protocols, methods, and imports from .m/.mm"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.add_node()]] - `calls` [INFERRED]
- [[Extract interfaces, implementations, protocols, methods, and imports from .m.mm]] - `rationale_for` [EXTRACTED]
- [[_file_stem()]] - `calls` [EXTRACTED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[test_objc_finds_imports()]] - `calls` [INFERRED]
- [[test_objc_finds_interface()]] - `calls` [INFERRED]
- [[test_objc_finds_methods()]] - `calls` [INFERRED]
- [[test_objc_finds_subclass()]] - `calls` [INFERRED]
- [[test_objc_import_edges_have_import_context()]] - `calls` [INFERRED]
- [[test_objc_inherits_edge()]] - `calls` [INFERRED]
- [[test_objc_no_dangling_edges()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_objc()]]
```

#graphify/code #graphify/INFERRED #community/Community_None