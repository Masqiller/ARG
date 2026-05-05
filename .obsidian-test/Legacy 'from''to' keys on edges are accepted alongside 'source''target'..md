---
source_file: "vendor/graphify/tests/test_build.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L43"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Legacy 'from'/'to' keys on edges are accepted alongside 'source'/'target'.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Legacy 'from'/'to' keys on edges are accepted alongside 'source'/'target'."]:::centerNode
    center -->|"rationale_for"| N_tests_test_build_test_legacy_edge_from_to_canonicalized["test_legacy_edge_from_to_canonicalized[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_legacy_edge_from_to_canonicalized()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Legacy 'from''to' keys on edges are accepted alongside 'source''target'.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None