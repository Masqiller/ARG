---
source_file: "vendor/graphify/tests/test_cache.py"
type: "code"
community: "Community None"
degree: 15
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_cache.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 15

## Architecture Graph
```mermaid
graph LR
    center["test_cache.py"]:::centerNode
    center -->|"contains"| N_tests_test_cache_tmp_file["tmp_file[]"]
    center -->|"contains"| N_tests_test_cache_cache_root["cache_root[]"]
    center -->|"contains"| N_tests_test_cache_test_file_hash_consistent["test_file_hash_consistent[]"]
    center -->|"contains"| N_tests_test_cache_test_file_hash_changes["test_file_hash_changes[]"]
    center -->|"contains"| N_tests_test_cache_test_cache_roundtrip["test_cache_roundtrip[]"]
    center -->|"contains"| N_tests_test_cache_test_cache_miss_on_change["test_cache_miss_on_change[]"]
    center -->|"contains"| N_tests_test_cache_test_cached_files["test_cached_files[]"]
    center -->|"contains"| N_tests_test_cache_test_clear_cache["test_clear_cache[]"]
    center -->|"contains"| N_tests_test_cache_test_md_frontmatter_only_change_same_hash["test_md_frontmatter_only_change_same_hash[]"]
    center -->|"contains"| N_tests_test_cache_test_md_body_change_different_hash["test_md_body_change_different_hash[]"]
    center -->|"contains"| N_tests_test_cache_test_md_no_frontmatter_hashed_normally["test_md_no_frontmatter_hashed_normally[]"]
    center -->|"contains"| N_tests_test_cache_test_non_md_file_hashed_fully["test_non_md_file_hashed_fully[]"]
    center -->|"contains"| N_tests_test_cache_test_body_content_strips_frontmatter["test_body_content_strips_frontmatter[]"]
    center -->|"contains"| N_tests_test_cache_test_body_content_no_frontmatter["test_body_content_no_frontmatter[]"]
    center -->|"rationale_for"| N_tests_test_cache_rationale_1["Tests for graphify/cache.py."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Tests for graphifycache.py.]] - `rationale_for` [EXTRACTED]
- [[cache_root()]] - `contains` [EXTRACTED]
- [[test_body_content_no_frontmatter()]] - `contains` [EXTRACTED]
- [[test_body_content_strips_frontmatter()]] - `contains` [EXTRACTED]
- [[test_cache_miss_on_change()]] - `contains` [EXTRACTED]
- [[test_cache_roundtrip()]] - `contains` [EXTRACTED]
- [[test_cached_files()]] - `contains` [EXTRACTED]
- [[test_clear_cache()]] - `contains` [EXTRACTED]
- [[test_file_hash_changes()]] - `contains` [EXTRACTED]
- [[test_file_hash_consistent()]] - `contains` [EXTRACTED]
- [[test_md_body_change_different_hash()]] - `contains` [EXTRACTED]
- [[test_md_frontmatter_only_change_same_hash()]] - `contains` [EXTRACTED]
- [[test_md_no_frontmatter_hashed_normally()]] - `contains` [EXTRACTED]
- [[test_non_md_file_hashed_fully()]] - `contains` [EXTRACTED]
- [[tmp_file()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_cache.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None