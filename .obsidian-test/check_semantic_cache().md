---
source_file: "vendor/graphify/graphify/cache.py"
type: "code"
community: "Community None"
degree: 3
location: "L178"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# check_semantic_cache()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["check_semantic_cache[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_cache_py["cache.py"]
    center -->|"calls"| N_graphify_cache_load_cached["load_cached[]"]
    center -->|"rationale_for"| N_graphify_cache_rationale_182["Check semantic extraction cache for a list of absolute file paths.      Returns"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Check semantic extraction cache for a list of absolute file paths.      Returns]] - `rationale_for` [EXTRACTED]
- [[cache.py]] - `contains` [EXTRACTED]
- [[load_cached()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[check_semantic_cache()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None