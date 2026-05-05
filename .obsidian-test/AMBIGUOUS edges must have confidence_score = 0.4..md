---
source_file: "vendor/graphify/tests/test_confidence.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L66"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# AMBIGUOUS edges must have confidence_score <= 0.4.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["AMBIGUOUS edges must have confidence_score <= 0.4."]:::centerNode
    center -->|"rationale_for"| N_tests_test_confidence_test_ambiguous_edges_score_at_most_04["test_ambiguous_edges_score_at_most_04[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_ambiguous_edges_score_at_most_04()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[AMBIGUOUS edges must have confidence_score = 0.4.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None