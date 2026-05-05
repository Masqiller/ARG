---
source_file: "vendor/graphify/tests/test_cache.py"
type: "code"
community: "Community None"
degree: 5
location: "L54"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# test_cached_files()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["test_cached_files[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_cache_py["test_cache.py"]
    center -->|"rationale_for"| N_tests_test_cache_rationale_55["cached_files returns the set of cached hashes."]
    center -->|"calls"| N_graphify_cache_save_cached["save_cached[]"]
    center -->|"calls"| N_graphify_cache_cached_files["cached_files[]"]
    center -->|"calls"| N_graphify_cache_file_hash["file_hash[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cached_files returns the set of cached hashes.]] - `rationale_for` [EXTRACTED]
- [[cached_files()]] - `calls` [INFERRED]
- [[file_hash()]] - `calls` [INFERRED]
- [[save_cached()]] - `calls` [INFERRED]
- [[test_cache.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_cached_files()]]
```

#graphify/code #graphify/INFERRED #community/Community_None