---
source_file: "vendor/graphify/tests/test_analyze.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L39"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Multi-file graph: should find cross-file edges between real entities.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Multi-file graph: should find cross-file edges between real entities."]:::centerNode
    center -->|"rationale_for"| N_tests_test_analyze_test_surprising_connections_cross_source_multi_file["test_surprising_connections_cross_source_multi_file[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_surprising_connections_cross_source_multi_file()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Multi-file graph should find cross-file edges between real entities.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None