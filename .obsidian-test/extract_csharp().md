---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 13
location: "L1833"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# extract_csharp()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["extract_csharp[]"]:::centerNode
    center -->|"calls"| N_tests_test_languages_test_csharp_no_error["test_csharp_no_error[]"]
    center -->|"calls"| N_tests_test_languages_test_csharp_finds_class["test_csharp_finds_class[]"]
    center -->|"calls"| N_tests_test_languages_test_csharp_finds_interface["test_csharp_finds_interface[]"]
    center -->|"calls"| N_tests_test_languages_test_csharp_finds_methods["test_csharp_finds_methods[]"]
    center -->|"calls"| N_tests_test_languages_test_csharp_finds_usings["test_csharp_finds_usings[]"]
    center -->|"calls"| N_tests_test_languages_test_csharp_inherits_edge["test_csharp_inherits_edge[]"]
    center -->|"calls"| N_tests_test_languages_test_csharp_inherits_iprocessor["test_csharp_inherits_iprocessor[]"]
    center -->|"calls"| N_tests_test_languages_test_csharp_field_type_references_have_field_context["test_csharp_field_type_references_have_field_context[]"]
    center -->|"calls"| N_tests_test_languages_test_csharp_call_edges_have_call_context["test_csharp_call_edges_have_call_context[]"]
    center -->|"calls"| N_tests_test_languages_test_csharp_import_edges_have_import_context["test_csharp_import_edges_have_import_context[]"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_extract_generic["_extract_generic[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_1834["Extract classes, interfaces, methods, namespaces, and usings from a .cs file."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Extract classes, interfaces, methods, namespaces, and usings from a .cs file.]] - `rationale_for` [EXTRACTED]
- [[_extract_generic()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[test_csharp_call_edges_have_call_context()]] - `calls` [INFERRED]
- [[test_csharp_field_type_references_have_field_context()]] - `calls` [INFERRED]
- [[test_csharp_finds_class()]] - `calls` [INFERRED]
- [[test_csharp_finds_interface()]] - `calls` [INFERRED]
- [[test_csharp_finds_methods()]] - `calls` [INFERRED]
- [[test_csharp_finds_usings()]] - `calls` [INFERRED]
- [[test_csharp_import_edges_have_import_context()]] - `calls` [INFERRED]
- [[test_csharp_inherits_edge()]] - `calls` [INFERRED]
- [[test_csharp_inherits_iprocessor()]] - `calls` [INFERRED]
- [[test_csharp_no_error()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_csharp()]]
```

#graphify/code #graphify/INFERRED #community/Community_None