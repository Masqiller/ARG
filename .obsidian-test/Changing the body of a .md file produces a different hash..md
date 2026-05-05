---
source_file: "vendor/graphify/tests/test_cache.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L90"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Changing the body of a .md file produces a different hash.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Changing the body of a .md file produces a different hash."]:::centerNode
    center -->|"rationale_for"| N_tests_test_cache_test_md_body_change_different_hash["test_md_body_change_different_hash[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_md_body_change_different_hash()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Changing the body of a .md file produces a different hash.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None