---
source_file: "vendor/graphify/tests/test_query_cli.py"
type: "code"
community: "Community None"
degree: 3
location: "L39"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_query_cli_heuristic_context_filter()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_query_cli_heuristic_context_filter[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_query_cli_py["test_query_cli.py"]
    center -->|"calls"| N_tests_test_query_cli_write_graph["_write_graph[]"]
    center -->|"calls"| N_str["str"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_write_graph()_1]] - `calls` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[test_query_cli.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_query_cli_heuristic_context_filter()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None