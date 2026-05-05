---
source_file: "vendor/graphify/graphify/cache.py"
type: "code"
community: "Community None"
degree: 4
location: "L64"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cache_dir()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["cache_dir[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_cache_py["cache.py"]
    center -->|"calls"| N_graphify_cache_load_cached["load_cached[]"]
    center -->|"calls"| N_graphify_cache_save_cached["save_cached[]"]
    center -->|"rationale_for"| N_graphify_cache_rationale_65["Returns graphify-out/cache/{kind}/ - creates it if needed.      kind is \"ast\" or"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Returns graphify-outcache{kind} - creates it if needed.      kind is ast or]] - `rationale_for` [EXTRACTED]
- [[cache.py]] - `contains` [EXTRACTED]
- [[load_cached()]] - `calls` [EXTRACTED]
- [[save_cached()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cache_dir()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None