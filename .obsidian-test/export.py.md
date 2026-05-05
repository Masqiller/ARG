---
source_file: "vendor/graphify/graphify/export.py"
type: "code"
community: "Community None"
degree: 18
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# export.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 18

## Architecture Graph
```mermaid
graph LR
    center["export.py"]:::centerNode
    center -->|"contains"| N_graphify_export_obsidian_tag["_obsidian_tag[]"]
    center -->|"contains"| N_graphify_export_strip_diacritics["_strip_diacritics[]"]
    center -->|"contains"| N_graphify_export_viz_node_limit["_viz_node_limit[]"]
    center -->|"contains"| N_graphify_export_html_styles["_html_styles[]"]
    center -->|"contains"| N_graphify_export_hyperedge_script["_hyperedge_script[]"]
    center -->|"contains"| N_graphify_export_html_script["_html_script[]"]
    center -->|"contains"| N_graphify_export_attach_hyperedges["attach_hyperedges[]"]
    center -->|"contains"| N_graphify_export_git_head["_git_head[]"]
    center -->|"contains"| N_graphify_export_to_json["to_json[]"]
    center -->|"contains"| N_graphify_export_prune_dangling_edges["prune_dangling_edges[]"]
    center -->|"contains"| N_graphify_export_cypher_escape["_cypher_escape[]"]
    center -->|"contains"| N_graphify_export_to_cypher["to_cypher[]"]
    center -->|"contains"| N_graphify_export_to_html["to_html[]"]
    center -->|"contains"| N_graphify_export_to_obsidian["to_obsidian[]"]
    center -->|"contains"| N_graphify_export_to_canvas["to_canvas[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_cypher_escape()]] - `contains` [EXTRACTED]
- [[_git_head()]] - `contains` [EXTRACTED]
- [[_html_script()]] - `contains` [EXTRACTED]
- [[_html_styles()]] - `contains` [EXTRACTED]
- [[_hyperedge_script()]] - `contains` [EXTRACTED]
- [[_obsidian_tag()]] - `contains` [EXTRACTED]
- [[_strip_diacritics()]] - `contains` [EXTRACTED]
- [[_viz_node_limit()]] - `contains` [EXTRACTED]
- [[attach_hyperedges()]] - `contains` [EXTRACTED]
- [[prune_dangling_edges()]] - `contains` [EXTRACTED]
- [[push_to_neo4j()]] - `contains` [EXTRACTED]
- [[to_canvas()]] - `contains` [EXTRACTED]
- [[to_cypher()]] - `contains` [EXTRACTED]
- [[to_graphml()]] - `contains` [EXTRACTED]
- [[to_html()]] - `contains` [EXTRACTED]
- [[to_json()]] - `contains` [EXTRACTED]
- [[to_obsidian()]] - `contains` [EXTRACTED]
- [[to_svg()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[export.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None