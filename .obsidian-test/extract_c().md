---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 10
location: "L1818"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# extract_c()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["extract_c[]"]:::centerNode
    center -->|"calls"| N_tests_test_languages_test_c_no_error["test_c_no_error[]"]
    center -->|"calls"| N_tests_test_languages_test_c_finds_functions["test_c_finds_functions[]"]
    center -->|"calls"| N_tests_test_languages_test_c_finds_includes["test_c_finds_includes[]"]
    center -->|"calls"| N_tests_test_languages_test_c_emits_calls["test_c_emits_calls[]"]
    center -->|"calls"| N_tests_test_languages_test_c_calls_are_extracted["test_c_calls_are_extracted[]"]
    center -->|"calls"| N_tests_test_languages_test_c_import_edges_have_import_context["test_c_import_edges_have_import_context[]"]
    center -->|"calls"| N_tests_test_languages_test_c_call_edges_have_call_context["test_c_call_edges_have_call_context[]"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_extract_generic["_extract_generic[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_1819["Extract functions and includes from a .c/.h file."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Extract functions and includes from a .c.h file.]] - `rationale_for` [EXTRACTED]
- [[_extract_generic()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[test_c_call_edges_have_call_context()]] - `calls` [INFERRED]
- [[test_c_calls_are_extracted()]] - `calls` [INFERRED]
- [[test_c_emits_calls()]] - `calls` [INFERRED]
- [[test_c_finds_functions()]] - `calls` [INFERRED]
- [[test_c_finds_includes()]] - `calls` [INFERRED]
- [[test_c_import_edges_have_import_context()]] - `calls` [INFERRED]
- [[test_c_no_error()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_c()]]
```

#graphify/code #graphify/INFERRED #community/Community_None