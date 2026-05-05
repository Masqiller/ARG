---
source_file: "vendor/graphify/tests/test_multilang.py"
type: "code"
community: "Community None"
degree: 3
location: "L99"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_go_emits_calls()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_go_emits_calls[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_multilang_py["test_multilang.py"]
    center -->|"calls"| N_tests_test_multilang_call_pairs["_call_pairs[]"]
    center -->|"calls"| N_graphify_extract_extract_go["extract_go[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_call_pairs()]] - `calls` [EXTRACTED]
- [[extract_go()]] - `calls` [INFERRED]
- [[test_multilang.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_go_emits_calls()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None