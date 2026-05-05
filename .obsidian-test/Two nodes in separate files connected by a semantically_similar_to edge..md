---
source_file: "vendor/graphify/tests/test_semantic_similarity.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L14"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Two nodes in separate files connected by a semantically_similar_to edge.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Two nodes in separate files connected by a semantically_similar_to edge."]:::centerNode
    center -->|"rationale_for"| N_tests_test_semantic_similarity_make_extraction_with_semantic_edge["_make_extraction_with_semantic_edge[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_make_extraction_with_semantic_edge()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Two nodes in separate files connected by a semantically_similar_to edge.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None