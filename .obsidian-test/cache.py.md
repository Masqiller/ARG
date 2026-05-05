---
source_file: "vendor/graphify/graphify/cache.py"
type: "code"
community: "Community None"
degree: 11
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cache.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 11

## Architecture Graph
```mermaid
graph LR
    center["cache.py"]:::centerNode
    center -->|"imports_from"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"contains"| N_graphify_cache_body_content["_body_content[]"]
    center -->|"contains"| N_graphify_cache_normalize_path["_normalize_path[]"]
    center -->|"contains"| N_graphify_cache_file_hash["file_hash[]"]
    center -->|"contains"| N_graphify_cache_cache_dir["cache_dir[]"]
    center -->|"contains"| N_graphify_cache_load_cached["load_cached[]"]
    center -->|"contains"| N_graphify_cache_save_cached["save_cached[]"]
    center -->|"contains"| N_graphify_cache_cached_files["cached_files[]"]
    center -->|"contains"| N_graphify_cache_clear_cache["clear_cache[]"]
    center -->|"contains"| N_graphify_cache_check_semantic_cache["check_semantic_cache[]"]
    center -->|"contains"| N_graphify_cache_save_semantic_cache["save_semantic_cache[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_body_content()]] - `contains` [EXTRACTED]
- [[_normalize_path()]] - `contains` [EXTRACTED]
- [[cache_dir()]] - `contains` [EXTRACTED]
- [[cached_files()]] - `contains` [EXTRACTED]
- [[check_semantic_cache()]] - `contains` [EXTRACTED]
- [[clear_cache()]] - `contains` [EXTRACTED]
- [[extract.py]] - `imports_from` [EXTRACTED]
- [[file_hash()]] - `contains` [EXTRACTED]
- [[load_cached()]] - `contains` [EXTRACTED]
- [[save_cached()]] - `contains` [EXTRACTED]
- [[save_semantic_cache()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cache.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None