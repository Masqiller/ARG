---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 8
location: "L1823"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# extract_cpp()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["extract_cpp[]"]:::centerNode
    center -->|"calls"| N_tests_test_languages_test_cpp_no_error["test_cpp_no_error[]"]
    center -->|"calls"| N_tests_test_languages_test_cpp_finds_class["test_cpp_finds_class[]"]
    center -->|"calls"| N_tests_test_languages_test_cpp_finds_methods["test_cpp_finds_methods[]"]
    center -->|"calls"| N_tests_test_languages_test_cpp_finds_includes["test_cpp_finds_includes[]"]
    center -->|"calls"| N_tests_test_languages_test_cpp_import_edges_have_import_context["test_cpp_import_edges_have_import_context[]"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_extract_generic["_extract_generic[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_1824["Extract functions, classes, and includes from a .cpp/.cc/.cxx/.hpp file."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Extract functions, classes, and includes from a .cpp.cc.cxx.hpp file.]] - `rationale_for` [EXTRACTED]
- [[_extract_generic()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[test_cpp_finds_class()]] - `calls` [INFERRED]
- [[test_cpp_finds_includes()]] - `calls` [INFERRED]
- [[test_cpp_finds_methods()]] - `calls` [INFERRED]
- [[test_cpp_import_edges_have_import_context()]] - `calls` [INFERRED]
- [[test_cpp_no_error()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_cpp()]]
```

#graphify/code #graphify/INFERRED #community/Community_None