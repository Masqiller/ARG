---
source_file: "vendor/graphify/tests/test_confidence.py"
type: "code"
community: "Community None"
degree: 3
location: "L40"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_extracted_edges_have_score_1()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_extracted_edges_have_score_1[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_confidence_py["test_confidence.py"]
    center -->|"calls"| N_tests_test_confidence_make_extraction["_make_extraction[]"]
    center -->|"rationale_for"| N_tests_test_confidence_rationale_41["EXTRACTED edges must have confidence_score == 1.0."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[EXTRACTED edges must have confidence_score == 1.0.]] - `rationale_for` [EXTRACTED]
- [[_make_extraction()]] - `calls` [EXTRACTED]
- [[test_confidence.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_extracted_edges_have_score_1()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None