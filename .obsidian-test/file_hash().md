---
source_file: "vendor/graphify/graphify/cache.py"
type: "code"
community: "Community None"
degree: 14
location: "L37"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# file_hash()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 14

## Architecture Graph
```mermaid
graph LR
    center["file_hash[]"]:::centerNode
    center -->|"calls"| N_tests_test_cache_test_file_hash_consistent["test_file_hash_consistent[]"]
    center -->|"calls"| N_tests_test_cache_test_file_hash_changes["test_file_hash_changes[]"]
    center -->|"calls"| N_tests_test_cache_test_cached_files["test_cached_files[]"]
    center -->|"calls"| N_tests_test_cache_test_md_frontmatter_only_change_same_hash["test_md_frontmatter_only_change_same_hash[]"]
    center -->|"calls"| N_tests_test_cache_test_md_body_change_different_hash["test_md_body_change_different_hash[]"]
    center -->|"calls"| N_tests_test_cache_test_md_no_frontmatter_hashed_normally["test_md_no_frontmatter_hashed_normally[]"]
    center -->|"calls"| N_tests_test_cache_test_non_md_file_hashed_fully["test_non_md_file_hashed_fully[]"]
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_cache_py["cache.py"]
    center -->|"calls"| N_graphify_cache_body_content["_body_content[]"]
    center -->|"calls"| N_graphify_cache_normalize_path["_normalize_path[]"]
    center -->|"calls"| N_graphify_cache_load_cached["load_cached[]"]
    center -->|"calls"| N_graphify_cache_save_cached["save_cached[]"]
    center -->|"rationale_for"| N_graphify_cache_rationale_38["SHA256 of file contents + path relative to root.      Using a relative path [not"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[SHA256 of file contents + path relative to root.      Using a relative path (not]] - `rationale_for` [EXTRACTED]
- [[_body_content()]] - `calls` [EXTRACTED]
- [[_normalize_path()]] - `calls` [EXTRACTED]
- [[cache.py]] - `contains` [EXTRACTED]
- [[load_cached()]] - `calls` [EXTRACTED]
- [[save_cached()]] - `calls` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[test_cached_files()]] - `calls` [INFERRED]
- [[test_file_hash_changes()]] - `calls` [INFERRED]
- [[test_file_hash_consistent()]] - `calls` [INFERRED]
- [[test_md_body_change_different_hash()]] - `calls` [INFERRED]
- [[test_md_frontmatter_only_change_same_hash()]] - `calls` [INFERRED]
- [[test_md_no_frontmatter_hashed_normally()]] - `calls` [INFERRED]
- [[test_non_md_file_hashed_fully()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[file_hash()]]
```

#graphify/code #graphify/INFERRED #community/Community_None