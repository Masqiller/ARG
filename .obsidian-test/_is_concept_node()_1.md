---
source_file: "vendor/graphify/worked/mixed-corpus/raw/analyze.py"
type: "code"
community: "Community None"
degree: 5
location: "L89"
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
    center -->|"contains"| N_vendor_graphify_worked_mixed_corpus_raw_analyze_py["analyze.py"]
    center -->|"calls"| N_raw_analyze_god_nodes["god_nodes[]"]
    center -->|"calls"| N_raw_analyze_cross_file_surprises["_cross_file_surprises[]"]
    center -->|"calls"| N_raw_analyze_suggest_questions["suggest_questions[]"]
    center -->|"rationale_for"| N_raw_analyze_rationale_90["Return True if this node is a manually-injected semantic concept node     rather"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Return True if this node is a manually-injected semantic concept node     rather_1]] - `rationale_for` [EXTRACTED]
- [[_cross_file_surprises()_1]] - `calls` [EXTRACTED]
- [[analyze.py_1]] - `contains` [EXTRACTED]
- [[god_nodes()_1]] - `calls` [EXTRACTED]
- [[suggest_questions()_1]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_is_concept_node()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None