---
source_file: "vendor/graphify/tests/test_analyze.py"
type: "code"
community: "Community None"
degree: 2
location: "L206"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_graph_diff_new_edges()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_graph_diff_new_edges[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_analyze_py["test_analyze.py"]
    center -->|"calls"| N_tests_test_analyze_make_simple_graph["_make_simple_graph[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_make_simple_graph()]] - `calls` [EXTRACTED]
- [[test_analyze.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_graph_diff_new_edges()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None