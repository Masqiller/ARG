---
source_file: "vendor/graphify/tests/test_cache.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L46"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# After file content changes, load_cached returns None.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["After file content changes, load_cached returns None."]:::centerNode
    center -->|"rationale_for"| N_tests_test_cache_test_cache_miss_on_change["test_cache_miss_on_change[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_cache_miss_on_change()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[After file content changes, load_cached returns None.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None