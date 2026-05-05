---
source_file: "vendor/graphify/graphify/cache.py"
type: "code"
community: "Community None"
degree: 5
location: "L16"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _body_content()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["_body_content[]"]:::centerNode
    center -->|"calls"| N_tests_test_cache_test_body_content_strips_frontmatter["test_body_content_strips_frontmatter[]"]
    center -->|"calls"| N_tests_test_cache_test_body_content_no_frontmatter["test_body_content_no_frontmatter[]"]
    center -->|"contains"| N_vendor_graphify_graphify_cache_py["cache.py"]
    center -->|"calls"| N_graphify_cache_file_hash["file_hash[]"]
    center -->|"rationale_for"| N_graphify_cache_rationale_17["Strip YAML frontmatter from Markdown content, returning only the body."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Strip YAML frontmatter from Markdown content, returning only the body.]] - `rationale_for` [EXTRACTED]
- [[cache.py]] - `contains` [EXTRACTED]
- [[file_hash()]] - `calls` [EXTRACTED]
- [[test_body_content_no_frontmatter()]] - `calls` [INFERRED]
- [[test_body_content_strips_frontmatter()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_body_content()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None