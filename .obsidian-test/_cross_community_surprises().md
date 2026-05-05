---
source_file: "vendor/graphify/graphify/analyze.py"
type: "code"
community: "Community None"
degree: 6
location: "L282"
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
    center -->|"contains"| N_vendor_graphify_graphify_analyze_py["analyze.py"]
    center -->|"calls"| N_graphify_analyze_node_community_map["_node_community_map[]"]
    center -->|"calls"| N_graphify_analyze_is_file_node["_is_file_node[]"]
    center -->|"calls"| N_graphify_analyze_surprising_connections["surprising_connections[]"]
    center -->|"calls"| N_graphify_analyze_cross_file_surprises["_cross_file_surprises[]"]
    center -->|"rationale_for"| N_graphify_analyze_rationale_287["For single-source corpora: find edges that bridge different communities.     The"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[For single-source corpora find edges that bridge different communities.     The]] - `rationale_for` [EXTRACTED]
- [[_cross_file_surprises()]] - `calls` [EXTRACTED]
- [[_is_file_node()]] - `calls` [EXTRACTED]
- [[_node_community_map()]] - `calls` [EXTRACTED]
- [[analyze.py]] - `contains` [EXTRACTED]
- [[surprising_connections()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_cross_community_surprises()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None