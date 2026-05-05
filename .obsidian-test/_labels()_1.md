---
source_file: "vendor/graphify/tests/test_multilang.py"
type: "code"
community: "Community None"
degree: 10
location: "L13"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _labels()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["_labels[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_multilang_py["test_multilang.py"]
    center -->|"calls"| N_tests_test_multilang_test_ts_finds_class["test_ts_finds_class[]"]
    center -->|"calls"| N_tests_test_multilang_test_ts_finds_methods["test_ts_finds_methods[]"]
    center -->|"calls"| N_tests_test_multilang_test_ts_finds_function["test_ts_finds_function[]"]
    center -->|"calls"| N_tests_test_multilang_test_go_finds_struct["test_go_finds_struct[]"]
    center -->|"calls"| N_tests_test_multilang_test_go_finds_methods["test_go_finds_methods[]"]
    center -->|"calls"| N_tests_test_multilang_test_go_finds_constructor["test_go_finds_constructor[]"]
    center -->|"calls"| N_tests_test_multilang_test_rust_finds_struct["test_rust_finds_struct[]"]
    center -->|"calls"| N_tests_test_multilang_test_rust_finds_impl_methods["test_rust_finds_impl_methods[]"]
    center -->|"calls"| N_tests_test_multilang_test_rust_finds_function["test_rust_finds_function[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_go_finds_constructor()]] - `calls` [EXTRACTED]
- [[test_go_finds_methods()]] - `calls` [EXTRACTED]
- [[test_go_finds_struct()]] - `calls` [EXTRACTED]
- [[test_multilang.py]] - `contains` [EXTRACTED]
- [[test_rust_finds_function()]] - `calls` [EXTRACTED]
- [[test_rust_finds_impl_methods()]] - `calls` [EXTRACTED]
- [[test_rust_finds_struct()]] - `calls` [EXTRACTED]
- [[test_ts_finds_class()]] - `calls` [EXTRACTED]
- [[test_ts_finds_function()]] - `calls` [EXTRACTED]
- [[test_ts_finds_methods()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_labels()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None