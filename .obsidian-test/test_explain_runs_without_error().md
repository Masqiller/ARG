---
source_file: "vendor/graphify/tests/test_cli_export.py"
type: "code"
community: "Community None"
degree: 3
location: "L184"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_explain_runs_without_error()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_explain_runs_without_error[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_cli_export_py["test_cli_export.py"]
    center -->|"calls"| N_tests_test_cli_export_run["_run[]"]
    center -->|"calls"| N_tests_test_cli_export_make_graph["_make_graph[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_make_graph()_3]] - `calls` [EXTRACTED]
- [[_run()]] - `calls` [EXTRACTED]
- [[test_cli_export.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_explain_runs_without_error()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None