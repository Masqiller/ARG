---
source_file: "vendor/graphify/tests/test_cli_export.py"
type: "code"
community: "Community None"
degree: 2
location: "L197"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_export_unknown_format_fails()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_export_unknown_format_fails[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_cli_export_py["test_cli_export.py"]
    center -->|"calls"| N_tests_test_cli_export_run["_run[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_run()]] - `calls` [EXTRACTED]
- [[test_cli_export.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_export_unknown_format_fails()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None