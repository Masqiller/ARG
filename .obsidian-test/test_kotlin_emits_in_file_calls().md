---
source_file: "vendor/graphify/tests/test_languages.py"
type: "code"
community: "Community None"
degree: 4
location: "L262"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_kotlin_emits_in_file_calls()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["test_kotlin_emits_in_file_calls[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_languages_py["test_languages.py"]
    center -->|"calls"| N_tests_test_languages_calls["_calls[]"]
    center -->|"rationale_for"| N_tests_test_languages_rationale_263["Regression test for the call-walker `simple_identifier` /     `identifier` renam"]
    center -->|"calls"| N_graphify_extract_extract_kotlin["extract_kotlin[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Regression test for the call-walker `simple_identifier`      `identifier` renam]] - `rationale_for` [EXTRACTED]
- [[_calls()]] - `calls` [EXTRACTED]
- [[extract_kotlin()]] - `calls` [INFERRED]
- [[test_languages.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_kotlin_emits_in_file_calls()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None