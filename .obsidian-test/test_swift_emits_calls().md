---
source_file: "vendor/graphify/tests/test_languages.py"
type: "code"
community: "Community None"
degree: 3
location: "L521"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_swift_emits_calls()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_swift_emits_calls[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_languages_py["test_languages.py"]
    center -->|"calls"| N_tests_test_languages_calls["_calls[]"]
    center -->|"calls"| N_graphify_extract_extract_swift["extract_swift[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_calls()]] - `calls` [EXTRACTED]
- [[extract_swift()]] - `calls` [INFERRED]
- [[test_languages.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_swift_emits_calls()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None