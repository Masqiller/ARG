---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 9
location: "L1843"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# extract_scala()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["extract_scala[]"]:::centerNode
    center -->|"calls"| N_tests_test_languages_test_scala_no_error["test_scala_no_error[]"]
    center -->|"calls"| N_tests_test_languages_test_scala_finds_class["test_scala_finds_class[]"]
    center -->|"calls"| N_tests_test_languages_test_scala_finds_object["test_scala_finds_object[]"]
    center -->|"calls"| N_tests_test_languages_test_scala_finds_methods["test_scala_finds_methods[]"]
    center -->|"calls"| N_tests_test_languages_test_scala_import_edges_have_import_context["test_scala_import_edges_have_import_context[]"]
    center -->|"calls"| N_tests_test_languages_test_scala_call_edges_have_call_context["test_scala_call_edges_have_call_context[]"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_extract_generic["_extract_generic[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_1844["Extract classes, objects, functions, and imports from a .scala file."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Extract classes, objects, functions, and imports from a .scala file.]] - `rationale_for` [EXTRACTED]
- [[_extract_generic()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[test_scala_call_edges_have_call_context()]] - `calls` [INFERRED]
- [[test_scala_finds_class()]] - `calls` [INFERRED]
- [[test_scala_finds_methods()]] - `calls` [INFERRED]
- [[test_scala_finds_object()]] - `calls` [INFERRED]
- [[test_scala_import_edges_have_import_context()]] - `calls` [INFERRED]
- [[test_scala_no_error()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_scala()]]
```

#graphify/code #graphify/INFERRED #community/Community_None