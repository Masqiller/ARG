---
source_file: "vendor/graphify/tests/test_cache.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L29"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Different file contents give different hashes.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Different file contents give different hashes."]:::centerNode
    center -->|"rationale_for"| N_tests_test_cache_test_file_hash_changes["test_file_hash_changes[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_file_hash_changes()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Different file contents give different hashes.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None