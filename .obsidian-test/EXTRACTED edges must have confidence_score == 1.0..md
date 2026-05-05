---
source_file: "vendor/graphify/tests/test_confidence.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L41"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# EXTRACTED edges must have confidence_score == 1.0.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["EXTRACTED edges must have confidence_score == 1.0."]:::centerNode
    center -->|"rationale_for"| N_tests_test_confidence_test_extracted_edges_have_score_1["test_extracted_edges_have_score_1[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_extracted_edges_have_score_1()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[EXTRACTED edges must have confidence_score == 1.0.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None