---
source_file: "vendor/graphify/graphify/analyze.py"
type: "code"
community: "Community None"
degree: 5
location: "L120"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _is_concept_node()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["_is_concept_node[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_analyze_py["analyze.py"]
    center -->|"calls"| N_graphify_analyze_god_nodes["god_nodes[]"]
    center -->|"calls"| N_graphify_analyze_cross_file_surprises["_cross_file_surprises[]"]
    center -->|"calls"| N_graphify_analyze_suggest_questions["suggest_questions[]"]
    center -->|"rationale_for"| N_graphify_analyze_rationale_121["Return True if this node is a manually-injected semantic concept node     rather"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Return True if this node is a manually-injected semantic concept node     rather]] - `rationale_for` [EXTRACTED]
- [[_cross_file_surprises()]] - `calls` [EXTRACTED]
- [[analyze.py]] - `contains` [EXTRACTED]
- [[god_nodes()]] - `calls` [EXTRACTED]
- [[suggest_questions()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_is_concept_node()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None