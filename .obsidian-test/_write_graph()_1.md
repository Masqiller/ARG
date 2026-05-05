---
source_file: "vendor/graphify/tests/test_query_cli.py"
type: "code"
community: "Community None"
degree: 3
location: "L12"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _write_graph()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_write_graph[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_query_cli_py["test_query_cli.py"]
    center -->|"calls"| N_tests_test_query_cli_test_query_cli_explicit_context_filter["test_query_cli_explicit_context_filter[]"]
    center -->|"calls"| N_tests_test_query_cli_test_query_cli_heuristic_context_filter["test_query_cli_heuristic_context_filter[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_query_cli.py]] - `contains` [EXTRACTED]
- [[test_query_cli_explicit_context_filter()]] - `calls` [EXTRACTED]
- [[test_query_cli_heuristic_context_filter()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_write_graph()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None