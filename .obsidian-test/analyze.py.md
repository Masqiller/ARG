---
source_file: "vendor/graphify/graphify/analyze.py"
type: "code"
community: "Community None"
degree: 14
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# analyze.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 14

## Architecture Graph
```mermaid
graph LR
    center["analyze.py"]:::centerNode
    center -->|"contains"| N_graphify_analyze_cross_language["_cross_language[]"]
    center -->|"contains"| N_graphify_analyze_node_community_map["_node_community_map[]"]
    center -->|"contains"| N_graphify_analyze_is_file_node["_is_file_node[]"]
    center -->|"contains"| N_graphify_analyze_god_nodes["god_nodes[]"]
    center -->|"contains"| N_graphify_analyze_surprising_connections["surprising_connections[]"]
    center -->|"contains"| N_graphify_analyze_is_concept_node["_is_concept_node[]"]
    center -->|"contains"| N_graphify_analyze_file_category["_file_category[]"]
    center -->|"contains"| N_graphify_analyze_top_level_dir["_top_level_dir[]"]
    center -->|"contains"| N_graphify_analyze_surprise_score["_surprise_score[]"]
    center -->|"contains"| N_graphify_analyze_cross_file_surprises["_cross_file_surprises[]"]
    center -->|"contains"| N_graphify_analyze_cross_community_surprises["_cross_community_surprises[]"]
    center -->|"contains"| N_graphify_analyze_suggest_questions["suggest_questions[]"]
    center -->|"contains"| N_graphify_analyze_graph_diff["graph_diff[]"]
    center -->|"rationale_for"| N_graphify_analyze_rationale_1["Graph analysis: god nodes [most connected], surprising connections [cross-commun"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Graph analysis god nodes (most connected), surprising connections (cross-commun]] - `rationale_for` [EXTRACTED]
- [[_cross_community_surprises()]] - `contains` [EXTRACTED]
- [[_cross_file_surprises()]] - `contains` [EXTRACTED]
- [[_cross_language()]] - `contains` [EXTRACTED]
- [[_file_category()]] - `contains` [EXTRACTED]
- [[_is_concept_node()]] - `contains` [EXTRACTED]
- [[_is_file_node()]] - `contains` [EXTRACTED]
- [[_node_community_map()]] - `contains` [EXTRACTED]
- [[_surprise_score()]] - `contains` [EXTRACTED]
- [[_top_level_dir()]] - `contains` [EXTRACTED]
- [[god_nodes()]] - `contains` [EXTRACTED]
- [[graph_diff()]] - `contains` [EXTRACTED]
- [[suggest_questions()]] - `contains` [EXTRACTED]
- [[surprising_connections()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[analyze.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None