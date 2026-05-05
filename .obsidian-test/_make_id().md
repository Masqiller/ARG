---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 36
location: "L32"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _make_id()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 36

## Architecture Graph
```mermaid
graph LR
    center["_make_id[]"]:::centerNode
    center -->|"calls"| N_tests_test_extract_test_make_id_strips_dots_and_underscores["test_make_id_strips_dots_and_underscores[]"]
    center -->|"calls"| N_tests_test_extract_test_make_id_consistent["test_make_id_consistent[]"]
    center -->|"calls"| N_tests_test_extract_test_make_id_no_leading_trailing_underscores["test_make_id_no_leading_trailing_underscores[]"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_import_python["_import_python[]"]
    center -->|"calls"| N_graphify_extract_import_js["_import_js[]"]
    center -->|"calls"| N_graphify_extract_dynamic_import_js["_dynamic_import_js[]"]
    center -->|"calls"| N_graphify_extract_import_java["_import_java[]"]
    center -->|"calls"| N_graphify_extract_import_c["_import_c[]"]
    center -->|"calls"| N_graphify_extract_import_csharp["_import_csharp[]"]
    center -->|"calls"| N_graphify_extract_import_kotlin["_import_kotlin[]"]
    center -->|"calls"| N_graphify_extract_import_scala["_import_scala[]"]
    center -->|"calls"| N_graphify_extract_import_php["_import_php[]"]
    center -->|"calls"| N_graphify_extract_js_extra_walk["_js_extra_walk[]"]
    center -->|"calls"| N_graphify_extract_csharp_extra_walk["_csharp_extra_walk[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Build a stable node ID from one or more name parts.]] - `rationale_for` [EXTRACTED]
- [[_csharp_extra_walk()]] - `calls` [EXTRACTED]
- [[_dynamic_import_js()]] - `calls` [EXTRACTED]
- [[_extract_generic()]] - `calls` [EXTRACTED]
- [[_extract_python_rationale()]] - `calls` [EXTRACTED]
- [[_import_c()]] - `calls` [EXTRACTED]
- [[_import_csharp()]] - `calls` [EXTRACTED]
- [[_import_java()]] - `calls` [EXTRACTED]
- [[_import_js()]] - `calls` [EXTRACTED]
- [[_import_kotlin()]] - `calls` [EXTRACTED]
- [[_import_php()]] - `calls` [EXTRACTED]
- [[_import_python()]] - `calls` [EXTRACTED]
- [[_import_scala()]] - `calls` [EXTRACTED]
- [[_import_swift()]] - `calls` [EXTRACTED]
- [[_js_extra_walk()]] - `calls` [EXTRACTED]
- [[_resolve_cross_file_imports()]] - `calls` [EXTRACTED]
- [[_resolve_cross_file_java_imports()]] - `calls` [EXTRACTED]
- [[_swift_extra_walk()]] - `calls` [EXTRACTED]
- [[extract()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[extract_blade()]] - `calls` [EXTRACTED]
- [[extract_dart()]] - `calls` [EXTRACTED]
- [[extract_elixir()]] - `calls` [EXTRACTED]
- [[extract_fortran()]] - `calls` [EXTRACTED]
- [[extract_go()]] - `calls` [EXTRACTED]
- [[extract_julia()]] - `calls` [EXTRACTED]
- [[extract_objc()]] - `calls` [EXTRACTED]
- [[extract_powershell()]] - `calls` [EXTRACTED]
- [[extract_rust()]] - `calls` [EXTRACTED]
- [[extract_sql()]] - `calls` [EXTRACTED]
- [[extract_svelte()]] - `calls` [EXTRACTED]
- [[extract_verilog()]] - `calls` [EXTRACTED]
- [[extract_zig()]] - `calls` [EXTRACTED]
- [[test_make_id_consistent()]] - `calls` [INFERRED]
- [[test_make_id_no_leading_trailing_underscores()]] - `calls` [INFERRED]
- [[test_make_id_strips_dots_and_underscores()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_make_id()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None