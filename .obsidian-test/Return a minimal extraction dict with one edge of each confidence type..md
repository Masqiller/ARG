---
source_file: "vendor/graphify/tests/test_confidence.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L18"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Return a minimal extraction dict with one edge of each confidence type.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Return a minimal extraction dict with one edge of each confidence type."]:::centerNode
    center -->|"rationale_for"| N_tests_test_confidence_make_extraction["_make_extraction[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_make_extraction()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Return a minimal extraction dict with one edge of each confidence type.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None