---
source_file: "vendor/graphify/graphify/cache.py"
type: "code"
community: "Community None"
degree: 4
location: "L26"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _normalize_path()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["_normalize_path[]"]:::centerNode
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_cache_py["cache.py"]
    center -->|"calls"| N_graphify_cache_file_hash["file_hash[]"]
    center -->|"rationale_for"| N_graphify_cache_rationale_27["Normalize path for consistent cache keys across Windows path spellings."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Normalize path for consistent cache keys across Windows path spellings.]] - `rationale_for` [EXTRACTED]
- [[cache.py]] - `contains` [EXTRACTED]
- [[file_hash()]] - `calls` [EXTRACTED]
- [[str]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_normalize_path()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None