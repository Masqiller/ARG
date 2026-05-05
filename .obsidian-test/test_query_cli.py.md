---
source_file: "vendor/graphify/tests/test_query_cli.py"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_query_cli.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["test_query_cli.py"]:::centerNode
    center -->|"contains"| N_tests_test_query_cli_write_graph["_write_graph[]"]
    center -->|"contains"| N_tests_test_query_cli_test_query_cli_explicit_context_filter["test_query_cli_explicit_context_filter[]"]
    center -->|"contains"| N_tests_test_query_cli_test_query_cli_heuristic_context_filter["test_query_cli_heuristic_context_filter[]"]
    center -->|"rationale_for"| N_tests_test_query_cli_rationale_1["Tests for graphify query CLI context filtering."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Tests for graphify query CLI context filtering.]] - `rationale_for` [EXTRACTED]
- [[_write_graph()_1]] - `contains` [EXTRACTED]
- [[test_query_cli_explicit_context_filter()]] - `contains` [EXTRACTED]
- [[test_query_cli_heuristic_context_filter()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_query_cli.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None