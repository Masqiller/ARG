---
source_file: "vendor/graphify/tests/test_cache.py"
type: "code"
community: "Community None"
degree: 3
location: "L125"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_body_content_no_frontmatter()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_body_content_no_frontmatter[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_cache_py["test_cache.py"]
    center -->|"rationale_for"| N_tests_test_cache_rationale_126["_body_content returns content unchanged when no frontmatter present."]
    center -->|"calls"| N_graphify_cache_body_content["_body_content[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_body_content returns content unchanged when no frontmatter present.]] - `rationale_for` [EXTRACTED]
- [[_body_content()]] - `calls` [INFERRED]
- [[test_cache.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_body_content_no_frontmatter()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None