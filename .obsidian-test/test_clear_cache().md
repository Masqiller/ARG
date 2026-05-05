---
source_file: "vendor/graphify/tests/test_cache.py"
type: "code"
community: "Community None"
degree: 5
location: "L69"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# test_clear_cache()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["test_clear_cache[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_cache_py["test_cache.py"]
    center -->|"rationale_for"| N_tests_test_cache_rationale_70["clear_cache removes all .json files from graphify-out/cache/ [all subdirs]."]
    center -->|"calls"| N_graphify_cache_save_cached["save_cached[]"]
    center -->|"calls"| N_knowledge_corpusstore_corpusstore_list[".list[]"]
    center -->|"calls"| N_graphify_cache_clear_cache["clear_cache[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.list()]] - `calls` [INFERRED]
- [[clear_cache removes all .json files from graphify-outcache (all subdirs).]] - `rationale_for` [EXTRACTED]
- [[clear_cache()]] - `calls` [INFERRED]
- [[save_cached()]] - `calls` [INFERRED]
- [[test_cache.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_clear_cache()]]
```

#graphify/code #graphify/INFERRED #community/Community_None