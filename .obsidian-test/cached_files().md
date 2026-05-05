---
source_file: "vendor/graphify/graphify/cache.py"
type: "code"
community: "Community None"
degree: 3
location: "L148"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cached_files()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["cached_files[]"]:::centerNode
    center -->|"calls"| N_tests_test_cache_test_cached_files["test_cached_files[]"]
    center -->|"contains"| N_vendor_graphify_graphify_cache_py["cache.py"]
    center -->|"rationale_for"| N_graphify_cache_rationale_149["Return set of file hashes that have a valid cache entry [any kind]."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Return set of file hashes that have a valid cache entry (any kind).]] - `rationale_for` [EXTRACTED]
- [[cache.py]] - `contains` [EXTRACTED]
- [[test_cached_files()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cached_files()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None