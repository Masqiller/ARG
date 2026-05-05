---
source_file: "vendor/graphify/tests/test_analyze.py"
type: "code"
community: "Community None"
degree: 2
location: "L107"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_surprising_connections_cross_type_scores_higher()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_surprising_connections_cross_type_scores_higher[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_analyze_py["test_analyze.py"]
    center -->|"rationale_for"| N_tests_test_analyze_rationale_108["Code↔paper edge should score higher than code↔code edge."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Code↔paper edge should score higher than code↔code edge.]] - `rationale_for` [EXTRACTED]
- [[test_analyze.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_surprising_connections_cross_type_scores_higher()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None