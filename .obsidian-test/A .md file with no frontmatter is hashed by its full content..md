---
source_file: "vendor/graphify/tests/test_cache.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L100"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# A .md file with no frontmatter is hashed by its full content.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["A .md file with no frontmatter is hashed by its full content."]:::centerNode
    center -->|"rationale_for"| N_tests_test_cache_test_md_no_frontmatter_hashed_normally["test_md_no_frontmatter_hashed_normally[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_md_no_frontmatter_hashed_normally()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[A .md file with no frontmatter is hashed by its full content.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None