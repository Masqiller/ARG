---
source_file: "vendor/graphify/graphify/analyze.py"
type: "code"
community: "Community None"
degree: 4
location: "L66"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# god_nodes()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["god_nodes[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_analyze_py["analyze.py"]
    center -->|"calls"| N_graphify_analyze_is_file_node["_is_file_node[]"]
    center -->|"calls"| N_graphify_analyze_is_concept_node["_is_concept_node[]"]
    center -->|"rationale_for"| N_graphify_analyze_rationale_67["Return the top_n most-connected real entities - the core abstractions.      File"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Return the top_n most-connected real entities - the core abstractions.      File]] - `rationale_for` [EXTRACTED]
- [[_is_concept_node()]] - `calls` [EXTRACTED]
- [[_is_file_node()]] - `calls` [EXTRACTED]
- [[analyze.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[god_nodes()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None