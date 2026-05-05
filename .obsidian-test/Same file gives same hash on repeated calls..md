---
source_file: "vendor/graphify/tests/test_cache.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L20"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Same file gives same hash on repeated calls.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Same file gives same hash on repeated calls."]:::centerNode
    center -->|"rationale_for"| N_tests_test_cache_test_file_hash_consistent["test_file_hash_consistent[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_file_hash_consistent()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Same file gives same hash on repeated calls.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None