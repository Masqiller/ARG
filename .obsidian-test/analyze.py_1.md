---
source_file: "vendor/graphify/worked/mixed-corpus/raw/analyze.py"
type: "code"
community: "Community None"
degree: 13
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
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["analyze.py"]:::centerNode
    center -->|"contains"| N_raw_analyze_node_community_map["_node_community_map[]"]
    center -->|"contains"| N_raw_analyze_is_file_node["_is_file_node[]"]
    center -->|"contains"| N_raw_analyze_god_nodes["god_nodes[]"]
    center -->|"contains"| N_raw_analyze_surprising_connections["surprising_connections[]"]
    center -->|"contains"| N_raw_analyze_is_concept_node["_is_concept_node[]"]
    center -->|"contains"| N_raw_analyze_file_category["_file_category[]"]
    center -->|"contains"| N_raw_analyze_top_level_dir["_top_level_dir[]"]
    center -->|"contains"| N_raw_analyze_surprise_score["_surprise_score[]"]
    center -->|"contains"| N_raw_analyze_cross_file_surprises["_cross_file_surprises[]"]
    center -->|"contains"| N_raw_analyze_cross_community_surprises["_cross_community_surprises[]"]
    center -->|"contains"| N_raw_analyze_suggest_questions["suggest_questions[]"]
    center -->|"contains"| N_raw_analyze_graph_diff["graph_diff[]"]
    center -->|"rationale_for"| N_raw_analyze_rationale_1["Graph analysis: god nodes [most connected], surprising connections [cross-commun"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Graph analysis god nodes (most connected), surprising connections (cross-commun_1]] - `rationale_for` [EXTRACTED]
- [[_cross_community_surprises()_1]] - `contains` [EXTRACTED]
- [[_cross_file_surprises()_1]] - `contains` [EXTRACTED]
- [[_file_category()_1]] - `contains` [EXTRACTED]
- [[_is_concept_node()_1]] - `contains` [EXTRACTED]
- [[_is_file_node()_1]] - `contains` [EXTRACTED]
- [[_node_community_map()_1]] - `contains` [EXTRACTED]
- [[_surprise_score()_1]] - `contains` [EXTRACTED]
- [[_top_level_dir()_1]] - `contains` [EXTRACTED]
- [[god_nodes()_1]] - `contains` [EXTRACTED]
- [[graph_diff()_1]] - `contains` [EXTRACTED]
- [[suggest_questions()_1]] - `contains` [EXTRACTED]
- [[surprising_connections()_1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[analyze.py_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None