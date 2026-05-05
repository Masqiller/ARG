---
source_file: "vendor/graphify/tests/test_report.py"
type: "code"
community: "Community None"
degree: 2
location: "L37"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_report_contains_surprising_connections()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_report_contains_surprising_connections[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_report_py["test_report.py"]
    center -->|"calls"| N_tests_test_report_make_inputs["make_inputs[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[make_inputs()]] - `calls` [EXTRACTED]
- [[test_report.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_report_contains_surprising_connections()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None