---
source_file: "vendor/graphify/tests/test_analyze.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L108"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Code↔paper edge should score higher than code↔code edge.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Code↔paper edge should score higher than code↔code edge."]:::centerNode
    center -->|"rationale_for"| N_tests_test_analyze_test_surprising_connections_cross_type_scores_higher["test_surprising_connections_cross_type_scores_higher[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_surprising_connections_cross_type_scores_higher()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Code↔paper edge should score higher than code↔code edge.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None