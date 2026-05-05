---
source_file: "vendor/graphify/tests/test_confidence.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L51"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# INFERRED edges must have confidence_score between 0.0 and 1.0.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["INFERRED edges must have confidence_score between 0.0 and 1.0."]:::centerNode
    center -->|"rationale_for"| N_tests_test_confidence_test_inferred_edges_score_in_range["test_inferred_edges_score_in_range[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_inferred_edges_score_in_range()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[INFERRED edges must have confidence_score between 0.0 and 1.0.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None