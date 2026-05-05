---
source_file: "vendor/graphify/tests/test_analyze.py"
type: "code"
community: "Community None"
degree: 2
location: "L61"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_surprising_connections_single_file_uses_community_bridges()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_surprising_connections_single_file_uses_community_bridges[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_analyze_py["test_analyze.py"]
    center -->|"rationale_for"| N_tests_test_analyze_rationale_62["Single-file graph: should return cross-community edges, not empty list."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Single-file graph should return cross-community edges, not empty list.]] - `rationale_for` [EXTRACTED]
- [[test_analyze.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_surprising_connections_single_file_uses_community_bridges()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None