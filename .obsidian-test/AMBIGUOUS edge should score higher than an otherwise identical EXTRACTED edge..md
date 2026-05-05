---
source_file: "vendor/graphify/tests/test_analyze.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L89"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# AMBIGUOUS edge should score higher than an otherwise identical EXTRACTED edge.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["AMBIGUOUS edge should score higher than an otherwise identical EXTRACTED edge."]:::centerNode
    center -->|"rationale_for"| N_tests_test_analyze_test_surprising_connections_ambiguous_scores_higher_than_extracted["test_surprising_connections_ambiguous_scores_higher_than_extracted[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_surprising_connections_ambiguous_scores_higher_than_extracted()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[AMBIGUOUS edge should score higher than an otherwise identical EXTRACTED edge.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None