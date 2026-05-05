---
source_file: "vendor/graphify/tests/test_cache.py"
type: "code"
community: "Community None"
degree: 3
location: "L109"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_non_md_file_hashed_fully()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_non_md_file_hashed_fully[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_cache_py["test_cache.py"]
    center -->|"rationale_for"| N_tests_test_cache_rationale_110["Non-.md files are still hashed by their full content."]
    center -->|"calls"| N_graphify_cache_file_hash["file_hash[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Non-.md files are still hashed by their full content.]] - `rationale_for` [EXTRACTED]
- [[file_hash()]] - `calls` [INFERRED]
- [[test_cache.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_non_md_file_hashed_fully()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None