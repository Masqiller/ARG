---
source_file: "vendor/graphify/worked/mixed-corpus/raw/analyze.py"
type: "code"
community: "Community None"
degree: 5
location: "L6"
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
    center -->|"contains"| N_vendor_graphify_worked_mixed_corpus_raw_analyze_py["analyze.py"]
    center -->|"calls"| N_raw_analyze_cross_file_surprises["_cross_file_surprises[]"]
    center -->|"calls"| N_raw_analyze_cross_community_surprises["_cross_community_surprises[]"]
    center -->|"calls"| N_raw_analyze_suggest_questions["suggest_questions[]"]
    center -->|"rationale_for"| N_raw_analyze_rationale_7["Invert communities dict: node_id -> community_id."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Invert communities dict node_id - community_id._1]] - `rationale_for` [EXTRACTED]
- [[_cross_community_surprises()_1]] - `calls` [EXTRACTED]
- [[_cross_file_surprises()_1]] - `calls` [EXTRACTED]
- [[analyze.py_1]] - `contains` [EXTRACTED]
- [[suggest_questions()_1]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_node_community_map()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None