---
source_file: "vendor/graphify/tests/test_export.py"
type: "code"
community: "Community None"
degree: 4
location: "L100"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_to_html_contains_search()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["test_to_html_contains_search[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_export_py["test_export.py"]
    center -->|"calls"| N_tests_test_export_make_graph["make_graph[]"]
    center -->|"calls"| N_graphify_export_to_html["to_html[]"]
    center -->|"calls"| N_str["str"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[make_graph()]] - `calls` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[test_export.py]] - `contains` [EXTRACTED]
- [[to_html()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_to_html_contains_search()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None