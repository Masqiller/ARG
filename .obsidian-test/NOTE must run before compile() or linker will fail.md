---
source_file: "vendor/graphify/tests/test_rationale.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L50"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# # NOTE: must run before compile() or linker will fail

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["# NOTE: must run before compile[] or linker will fail"]:::centerNode
    center -->|"rationale_for"| N_vendor_graphify_tests_test_rationale_py["test_rationale.py"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_rationale.py]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[NOTE must run before compile() or linker will fail]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None