---
source_file: "vendor/graphify/tests/test_extract.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L44"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# contains / method / inherits / imports edges must always be EXTRACTED.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["contains / method / inherits / imports edges must always be EXTRACTED."]:::centerNode
    center -->|"rationale_for"| N_tests_test_extract_test_structural_edges_are_extracted["test_structural_edges_are_extracted[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_structural_edges_are_extracted()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[contains  method  inherits  imports edges must always be EXTRACTED.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None