---
source_file: "vendor/graphify/tests/test_multilang.py"
type: "code"
community: "Community None"
degree: 7
location: "L27"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _edges_with_relation()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["_edges_with_relation[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_multilang_py["test_multilang.py"]
    center -->|"calls"| N_tests_test_multilang_test_ts_import_edges_have_import_context["test_ts_import_edges_have_import_context[]"]
    center -->|"calls"| N_tests_test_multilang_test_ts_call_edges_have_call_context["test_ts_call_edges_have_call_context[]"]
    center -->|"calls"| N_tests_test_multilang_test_go_import_edges_have_import_context["test_go_import_edges_have_import_context[]"]
    center -->|"calls"| N_tests_test_multilang_test_go_call_edges_have_call_context["test_go_call_edges_have_call_context[]"]
    center -->|"calls"| N_tests_test_multilang_test_rust_import_edges_have_import_context["test_rust_import_edges_have_import_context[]"]
    center -->|"calls"| N_tests_test_multilang_test_rust_call_edges_have_call_context["test_rust_call_edges_have_call_context[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_go_call_edges_have_call_context()]] - `calls` [EXTRACTED]
- [[test_go_import_edges_have_import_context()]] - `calls` [EXTRACTED]
- [[test_multilang.py]] - `contains` [EXTRACTED]
- [[test_rust_call_edges_have_call_context()]] - `calls` [EXTRACTED]
- [[test_rust_import_edges_have_import_context()]] - `calls` [EXTRACTED]
- [[test_ts_call_edges_have_call_context()]] - `calls` [EXTRACTED]
- [[test_ts_import_edges_have_import_context()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_edges_with_relation()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None