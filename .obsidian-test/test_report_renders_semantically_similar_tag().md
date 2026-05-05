---
source_file: "vendor/graphify/tests/test_semantic_similarity.py"
type: "code"
community: "Community None"
degree: 2
location: "L151"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_report_renders_semantically_similar_tag()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_report_renders_semantically_similar_tag[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_semantic_similarity_py["test_semantic_similarity.py"]
    center -->|"calls"| N_tests_test_semantic_similarity_make_report_with_semantic_surprise["_make_report_with_semantic_surprise[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_make_report_with_semantic_surprise()]] - `calls` [EXTRACTED]
- [[test_semantic_similarity.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_report_renders_semantically_similar_tag()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None