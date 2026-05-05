---
source_file: "vendor/graphify/tests/test_semantic_similarity.py"
type: "code"
community: "Community None"
degree: 2
location: "L166"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_report_no_semantic_tag_for_other_relations()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_report_no_semantic_tag_for_other_relations[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_semantic_similarity_py["test_semantic_similarity.py"]
    center -->|"rationale_for"| N_tests_test_semantic_similarity_rationale_167["Non-semantic edges must not get the [semantically similar] tag."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Non-semantic edges must not get the semantically similar tag.]] - `rationale_for` [EXTRACTED]
- [[test_semantic_similarity.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_report_no_semantic_tag_for_other_relations()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None