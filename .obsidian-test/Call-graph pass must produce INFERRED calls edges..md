---
source_file: "vendor/graphify/tests/test_extract.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L112"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Call-graph pass must produce INFERRED calls edges.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Call-graph pass must produce INFERRED calls edges."]:::centerNode
    center -->|"rationale_for"| N_tests_test_extract_test_calls_edges_emitted["test_calls_edges_emitted[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_calls_edges_emitted()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Call-graph pass must produce INFERRED calls edges.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None