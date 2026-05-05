---
source_file: "vendor/graphify/tests/test_multilang.py"
type: "code"
community: "Community None"
degree: 4
location: "L16"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _call_pairs()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["_call_pairs[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_multilang_py["test_multilang.py"]
    center -->|"calls"| N_tests_test_multilang_test_ts_emits_calls["test_ts_emits_calls[]"]
    center -->|"calls"| N_tests_test_multilang_test_go_emits_calls["test_go_emits_calls[]"]
    center -->|"calls"| N_tests_test_multilang_test_rust_emits_calls["test_rust_emits_calls[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_go_emits_calls()]] - `calls` [EXTRACTED]
- [[test_multilang.py]] - `contains` [EXTRACTED]
- [[test_rust_emits_calls()]] - `calls` [EXTRACTED]
- [[test_ts_emits_calls()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_call_pairs()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None