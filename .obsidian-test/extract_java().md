---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 10
location: "L1813"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# extract_java()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["extract_java[]"]:::centerNode
    center -->|"calls"| N_tests_test_languages_test_java_no_error["test_java_no_error[]"]
    center -->|"calls"| N_tests_test_languages_test_java_finds_class["test_java_finds_class[]"]
    center -->|"calls"| N_tests_test_languages_test_java_finds_interface["test_java_finds_interface[]"]
    center -->|"calls"| N_tests_test_languages_test_java_finds_methods["test_java_finds_methods[]"]
    center -->|"calls"| N_tests_test_languages_test_java_finds_imports["test_java_finds_imports[]"]
    center -->|"calls"| N_tests_test_languages_test_java_import_edges_have_import_context["test_java_import_edges_have_import_context[]"]
    center -->|"calls"| N_tests_test_languages_test_java_no_dangling_edges["test_java_no_dangling_edges[]"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_extract_generic["_extract_generic[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_1814["Extract classes, interfaces, methods, constructors, and imports from a .java fil"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Extract classes, interfaces, methods, constructors, and imports from a .java fil]] - `rationale_for` [EXTRACTED]
- [[_extract_generic()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[test_java_finds_class()]] - `calls` [INFERRED]
- [[test_java_finds_imports()]] - `calls` [INFERRED]
- [[test_java_finds_interface()]] - `calls` [INFERRED]
- [[test_java_finds_methods()]] - `calls` [INFERRED]
- [[test_java_import_edges_have_import_context()]] - `calls` [INFERRED]
- [[test_java_no_dangling_edges()]] - `calls` [INFERRED]
- [[test_java_no_error()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_java()]]
```

#graphify/code #graphify/INFERRED #community/Community_None