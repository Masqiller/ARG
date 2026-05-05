---
source_file: "vendor/graphify/graphify/cache.py"
type: "code"
community: "Community None"
degree: 9
location: "L77"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# load_cached()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["load_cached[]"]:::centerNode
    center -->|"calls"| N_tests_test_cache_test_cache_roundtrip["test_cache_roundtrip[]"]
    center -->|"calls"| N_tests_test_cache_test_cache_miss_on_change["test_cache_miss_on_change[]"]
    center -->|"calls"| N_graphify_extract_extract_single_file["_extract_single_file[]"]
    center -->|"calls"| N_graphify_extract_extract["extract[]"]
    center -->|"contains"| N_vendor_graphify_graphify_cache_py["cache.py"]
    center -->|"calls"| N_graphify_cache_file_hash["file_hash[]"]
    center -->|"calls"| N_graphify_cache_cache_dir["cache_dir[]"]
    center -->|"calls"| N_graphify_cache_check_semantic_cache["check_semantic_cache[]"]
    center -->|"rationale_for"| N_graphify_cache_rationale_78["Return cached extraction for this file if hash matches, else None.      Cache ke"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Return cached extraction for this file if hash matches, else None.      Cache ke]] - `rationale_for` [EXTRACTED]
- [[_extract_single_file()]] - `calls` [INFERRED]
- [[cache.py]] - `contains` [EXTRACTED]
- [[cache_dir()]] - `calls` [EXTRACTED]
- [[check_semantic_cache()]] - `calls` [EXTRACTED]
- [[extract()]] - `calls` [INFERRED]
- [[file_hash()]] - `calls` [EXTRACTED]
- [[test_cache_miss_on_change()]] - `calls` [INFERRED]
- [[test_cache_roundtrip()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[load_cached()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None