---
source_file: "vendor/graphify/tests/test_cache.py"
type: "code"
community: "Community None"
degree: 3
location: "L79"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_md_frontmatter_only_change_same_hash()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_md_frontmatter_only_change_same_hash[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_cache_py["test_cache.py"]
    center -->|"rationale_for"| N_tests_test_cache_rationale_80["Changing only frontmatter fields in a .md file does not change the hash."]
    center -->|"calls"| N_graphify_cache_file_hash["file_hash[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Changing only frontmatter fields in a .md file does not change the hash.]] - `rationale_for` [EXTRACTED]
- [[file_hash()]] - `calls` [INFERRED]
- [[test_cache.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_md_frontmatter_only_change_same_hash()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None