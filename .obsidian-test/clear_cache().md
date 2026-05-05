---
source_file: "vendor/graphify/graphify/cache.py"
type: "code"
community: "Community None"
degree: 5
location: "L163"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# clear_cache()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["clear_cache[]"]:::centerNode
    center -->|"calls"| N_tests_bench_extract_run_extraction["_run_extraction[]"]
    center -->|"calls"| N_tests_bench_extract_main["main[]"]
    center -->|"calls"| N_tests_test_cache_test_clear_cache["test_clear_cache[]"]
    center -->|"contains"| N_vendor_graphify_graphify_cache_py["cache.py"]
    center -->|"rationale_for"| N_graphify_cache_rationale_164["Delete all cache entries [ast/, semantic/, and legacy flat entries]."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Delete all cache entries (ast, semantic, and legacy flat entries).]] - `rationale_for` [EXTRACTED]
- [[_run_extraction()]] - `calls` [INFERRED]
- [[cache.py]] - `contains` [EXTRACTED]
- [[main()]] - `calls` [INFERRED]
- [[test_clear_cache()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[clear_cache()]]
```

#graphify/code #graphify/INFERRED #community/Community_None