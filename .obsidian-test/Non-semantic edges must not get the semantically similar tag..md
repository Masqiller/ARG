---
source_file: "vendor/graphify/tests/test_semantic_similarity.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L167"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Non-semantic edges must not get the [semantically similar] tag.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Non-semantic edges must not get the [semantically similar] tag."]:::centerNode
    center -->|"rationale_for"| N_tests_test_semantic_similarity_test_report_no_semantic_tag_for_other_relations["test_report_no_semantic_tag_for_other_relations[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_report_no_semantic_tag_for_other_relations()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Non-semantic edges must not get the semantically similar tag.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None