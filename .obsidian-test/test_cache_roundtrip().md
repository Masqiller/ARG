---
source_file: "vendor/graphify/tests/test_cache.py"
type: "code"
community: "Community None"
degree: 4
location: "L37"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_cache_roundtrip()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["test_cache_roundtrip[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_cache_py["test_cache.py"]
    center -->|"rationale_for"| N_tests_test_cache_rationale_38["Save then load returns the same result dict."]
    center -->|"calls"| N_graphify_cache_save_cached["save_cached[]"]
    center -->|"calls"| N_graphify_cache_load_cached["load_cached[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Save then load returns the same result dict.]] - `rationale_for` [EXTRACTED]
- [[load_cached()]] - `calls` [INFERRED]
- [[save_cached()]] - `calls` [INFERRED]
- [[test_cache.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_cache_roundtrip()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None