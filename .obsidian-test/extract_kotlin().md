---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 9
location: "L1838"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# extract_kotlin()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["extract_kotlin[]"]:::centerNode
    center -->|"calls"| N_tests_test_languages_test_kotlin_no_error["test_kotlin_no_error[]"]
    center -->|"calls"| N_tests_test_languages_test_kotlin_finds_class["test_kotlin_finds_class[]"]
    center -->|"calls"| N_tests_test_languages_test_kotlin_finds_data_class["test_kotlin_finds_data_class[]"]
    center -->|"calls"| N_tests_test_languages_test_kotlin_finds_methods["test_kotlin_finds_methods[]"]
    center -->|"calls"| N_tests_test_languages_test_kotlin_finds_function["test_kotlin_finds_function[]"]
    center -->|"calls"| N_tests_test_languages_test_kotlin_emits_in_file_calls["test_kotlin_emits_in_file_calls[]"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_extract_generic["_extract_generic[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_1839["Extract classes, objects, functions, and imports from a .kt/.kts file."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Extract classes, objects, functions, and imports from a .kt.kts file.]] - `rationale_for` [EXTRACTED]
- [[_extract_generic()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[test_kotlin_emits_in_file_calls()]] - `calls` [INFERRED]
- [[test_kotlin_finds_class()]] - `calls` [INFERRED]
- [[test_kotlin_finds_data_class()]] - `calls` [INFERRED]
- [[test_kotlin_finds_function()]] - `calls` [INFERRED]
- [[test_kotlin_finds_methods()]] - `calls` [INFERRED]
- [[test_kotlin_no_error()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_kotlin()]]
```

#graphify/code #graphify/INFERRED #community/Community_None