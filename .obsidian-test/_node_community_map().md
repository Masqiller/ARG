---
source_file: "vendor/graphify/graphify/analyze.py"
type: "code"
community: "Community None"
degree: 5
location: "L33"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _node_community_map()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["_node_community_map[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_analyze_py["analyze.py"]
    center -->|"calls"| N_graphify_analyze_cross_file_surprises["_cross_file_surprises[]"]
    center -->|"calls"| N_graphify_analyze_cross_community_surprises["_cross_community_surprises[]"]
    center -->|"calls"| N_graphify_analyze_suggest_questions["suggest_questions[]"]
    center -->|"rationale_for"| N_graphify_analyze_rationale_34["Invert communities dict: node_id -> community_id."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Invert communities dict node_id - community_id.]] - `rationale_for` [EXTRACTED]
- [[_cross_community_surprises()]] - `calls` [EXTRACTED]
- [[_cross_file_surprises()]] - `calls` [EXTRACTED]
- [[analyze.py]] - `contains` [EXTRACTED]
- [[suggest_questions()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_node_community_map()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None