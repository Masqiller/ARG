---
source_file: "vendor/graphify/tests/test_extract.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L36"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# All edge sources must reference a known node (targets may be external imports).

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["All edge sources must reference a known node [targets may be external imports]."]:::centerNode
    center -->|"rationale_for"| N_tests_test_extract_test_extract_python_no_dangling_edges["test_extract_python_no_dangling_edges[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_extract_python_no_dangling_edges()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[All edge sources must reference a known node (targets may be external imports).]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None