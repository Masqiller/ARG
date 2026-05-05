---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 6
location: "L4136"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _extract_sequential()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["_extract_sequential[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_safe_extract["_safe_extract[]"]
    center -->|"calls"| N_graphify_extract_get_extractor["_get_extractor[]"]
    center -->|"calls"| N_graphify_extract_extract["extract[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_4142["Extract uncached files sequentially [fallback for small batches]."]
    center -->|"calls"| N_graphify_cache_save_cached["save_cached[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Extract uncached files sequentially (fallback for small batches).]] - `rationale_for` [EXTRACTED]
- [[_get_extractor()]] - `calls` [EXTRACTED]
- [[_safe_extract()]] - `calls` [EXTRACTED]
- [[extract()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[save_cached()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_extract_sequential()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None