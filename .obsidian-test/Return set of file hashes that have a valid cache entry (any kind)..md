---
source_file: "vendor/graphify/graphify/cache.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L149"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Return set of file hashes that have a valid cache entry (any kind).

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Return set of file hashes that have a valid cache entry [any kind]."]:::centerNode
    center -->|"rationale_for"| N_graphify_cache_cached_files["cached_files[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cached_files()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Return set of file hashes that have a valid cache entry (any kind).]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None