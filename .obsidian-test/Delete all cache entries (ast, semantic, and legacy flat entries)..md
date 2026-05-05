---
source_file: "vendor/graphify/graphify/cache.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L164"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Delete all cache entries (ast/, semantic/, and legacy flat entries).

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Delete all cache entries [ast/, semantic/, and legacy flat entries]."]:::centerNode
    center -->|"rationale_for"| N_graphify_cache_clear_cache["clear_cache[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[clear_cache()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Delete all cache entries (ast, semantic, and legacy flat entries).]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None