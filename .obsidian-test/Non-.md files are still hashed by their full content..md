---
source_file: "vendor/graphify/tests/test_cache.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L110"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Non-.md files are still hashed by their full content.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Non-.md files are still hashed by their full content."]:::centerNode
    center -->|"rationale_for"| N_tests_test_cache_test_non_md_file_hashed_fully["test_non_md_file_hashed_fully[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_non_md_file_hashed_fully()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Non-.md files are still hashed by their full content.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None