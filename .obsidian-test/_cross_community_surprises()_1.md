---
source_file: "vendor/graphify/worked/mixed-corpus/raw/analyze.py"
type: "code"
community: "Community None"
degree: 6
location: "L239"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _cross_community_surprises()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["_cross_community_surprises[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_mixed_corpus_raw_analyze_py["analyze.py"]
    center -->|"calls"| N_raw_analyze_node_community_map["_node_community_map[]"]
    center -->|"calls"| N_raw_analyze_is_file_node["_is_file_node[]"]
    center -->|"calls"| N_raw_analyze_surprising_connections["surprising_connections[]"]
    center -->|"calls"| N_raw_analyze_cross_file_surprises["_cross_file_surprises[]"]
    center -->|"rationale_for"| N_raw_analyze_rationale_244["For single-source corpora: find edges that bridge different communities.     The"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[For single-source corpora find edges that bridge different communities.     The_1]] - `rationale_for` [EXTRACTED]
- [[_cross_file_surprises()_1]] - `calls` [EXTRACTED]
- [[_is_file_node()_1]] - `calls` [EXTRACTED]
- [[_node_community_map()_1]] - `calls` [EXTRACTED]
- [[analyze.py_1]] - `contains` [EXTRACTED]
- [[surprising_connections()_1]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_cross_community_surprises()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None