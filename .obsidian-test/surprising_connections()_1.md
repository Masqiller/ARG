---
source_file: "vendor/graphify/worked/mixed-corpus/raw/analyze.py"
type: "code"
community: "Community None"
degree: 4
location: "L57"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# surprising_connections()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["surprising_connections[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_mixed_corpus_raw_analyze_py["analyze.py"]
    center -->|"calls"| N_raw_analyze_cross_file_surprises["_cross_file_surprises[]"]
    center -->|"calls"| N_raw_analyze_cross_community_surprises["_cross_community_surprises[]"]
    center -->|"rationale_for"| N_raw_analyze_rationale_62["Find connections that are genuinely surprising - not obvious from file structure"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Find connections that are genuinely surprising - not obvious from file structure_1]] - `rationale_for` [EXTRACTED]
- [[_cross_community_surprises()_1]] - `calls` [EXTRACTED]
- [[_cross_file_surprises()_1]] - `calls` [EXTRACTED]
- [[analyze.py_1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[surprising_connections()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None