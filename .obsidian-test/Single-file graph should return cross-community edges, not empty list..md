---
source_file: "vendor/graphify/tests/test_analyze.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L62"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Single-file graph: should return cross-community edges, not empty list.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Single-file graph: should return cross-community edges, not empty list."]:::centerNode
    center -->|"rationale_for"| N_tests_test_analyze_test_surprising_connections_single_file_uses_community_bridges["test_surprising_connections_single_file_uses_community_bridges[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_surprising_connections_single_file_uses_community_bridges()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Single-file graph should return cross-community edges, not empty list.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None