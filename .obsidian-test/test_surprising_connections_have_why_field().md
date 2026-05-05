---
source_file: "vendor/graphify/tests/test_analyze.py"
type: "code"
community: "Community None"
degree: 2
location: "L126"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_surprising_connections_have_why_field()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_surprising_connections_have_why_field[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_analyze_py["test_analyze.py"]
    center -->|"calls"| N_tests_test_analyze_make_graph["make_graph[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[make_graph()_2]] - `calls` [EXTRACTED]
- [[test_analyze.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_surprising_connections_have_why_field()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None