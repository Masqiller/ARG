---
source_file: "vendor/graphify/tests/test_languages.py"
type: "code"
community: "Community None"
degree: 3
location: "L20"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _calls()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_calls[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_languages_py["test_languages.py"]
    center -->|"calls"| N_tests_test_languages_test_kotlin_emits_in_file_calls["test_kotlin_emits_in_file_calls[]"]
    center -->|"calls"| N_tests_test_languages_test_swift_emits_calls["test_swift_emits_calls[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_kotlin_emits_in_file_calls()]] - `calls` [EXTRACTED]
- [[test_languages.py]] - `contains` [EXTRACTED]
- [[test_swift_emits_calls()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_calls()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None