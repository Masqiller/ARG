---
source_file: "vendor/graphify/tests/test_analyze.py"
type: "code"
community: "Community None"
degree: 2
location: "L88"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_surprising_connections_ambiguous_scores_higher_than_extracted()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_surprising_connections_ambiguous_scores_higher_than_extracted[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_analyze_py["test_analyze.py"]
    center -->|"rationale_for"| N_tests_test_analyze_rationale_89["AMBIGUOUS edge should score higher than an otherwise identical EXTRACTED edge."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AMBIGUOUS edge should score higher than an otherwise identical EXTRACTED edge.]] - `rationale_for` [EXTRACTED]
- [[test_analyze.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_surprising_connections_ambiguous_scores_higher_than_extracted()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None