---
source_file: "vendor/graphify/tests/test_analyze.py"
type: "code"
community: "Community None"
degree: 3
location: "L38"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_surprising_connections_cross_source_multi_file()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_surprising_connections_cross_source_multi_file[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_analyze_py["test_analyze.py"]
    center -->|"calls"| N_tests_test_analyze_make_graph["make_graph[]"]
    center -->|"rationale_for"| N_tests_test_analyze_rationale_39["Multi-file graph: should find cross-file edges between real entities."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Multi-file graph should find cross-file edges between real entities.]] - `rationale_for` [EXTRACTED]
- [[make_graph()_2]] - `calls` [EXTRACTED]
- [[test_analyze.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_surprising_connections_cross_source_multi_file()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None