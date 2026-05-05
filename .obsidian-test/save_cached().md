---
source_file: "vendor/graphify/graphify/cache.py"
type: "code"
community: "Community None"
degree: 11
location: "L108"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# save_cached()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 11

## Architecture Graph
```mermaid
graph LR
    center["save_cached[]"]:::centerNode
    center -->|"calls"| N_tests_test_cache_test_cache_roundtrip["test_cache_roundtrip[]"]
    center -->|"calls"| N_tests_test_cache_test_cache_miss_on_change["test_cache_miss_on_change[]"]
    center -->|"calls"| N_tests_test_cache_test_cached_files["test_cached_files[]"]
    center -->|"calls"| N_tests_test_cache_test_clear_cache["test_clear_cache[]"]
    center -->|"calls"| N_graphify_extract_extract_single_file["_extract_single_file[]"]
    center -->|"calls"| N_graphify_extract_extract_sequential["_extract_sequential[]"]
    center -->|"contains"| N_vendor_graphify_graphify_cache_py["cache.py"]
    center -->|"calls"| N_graphify_cache_file_hash["file_hash[]"]
    center -->|"calls"| N_graphify_cache_cache_dir["cache_dir[]"]
    center -->|"calls"| N_graphify_cache_save_semantic_cache["save_semantic_cache[]"]
    center -->|"rationale_for"| N_graphify_cache_rationale_109["Save extraction result for this file.      Stores as graphify-out/cache/{kind}/{"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Save extraction result for this file.      Stores as graphify-outcache{kind}{]] - `rationale_for` [EXTRACTED]
- [[_extract_sequential()]] - `calls` [INFERRED]
- [[_extract_single_file()]] - `calls` [INFERRED]
- [[cache.py]] - `contains` [EXTRACTED]
- [[cache_dir()]] - `calls` [EXTRACTED]
- [[file_hash()]] - `calls` [EXTRACTED]
- [[save_semantic_cache()]] - `calls` [EXTRACTED]
- [[test_cache_miss_on_change()]] - `calls` [INFERRED]
- [[test_cache_roundtrip()]] - `calls` [INFERRED]
- [[test_cached_files()]] - `calls` [INFERRED]
- [[test_clear_cache()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[save_cached()]]
```

#graphify/code #graphify/INFERRED #community/Community_None