---
source_file: "vendor/graphify/graphify/wiki.py"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# wiki.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["wiki.py"]:::centerNode
    center -->|"contains"| N_graphify_wiki_safe_filename["_safe_filename[]"]
    center -->|"contains"| N_graphify_wiki_cross_community_links["_cross_community_links[]"]
    center -->|"contains"| N_graphify_wiki_community_article["_community_article[]"]
    center -->|"contains"| N_graphify_wiki_god_node_article["_god_node_article[]"]
    center -->|"contains"| N_graphify_wiki_index_md["_index_md[]"]
    center -->|"contains"| N_graphify_wiki_to_wiki["to_wiki[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_community_article()]] - `contains` [EXTRACTED]
- [[_cross_community_links()]] - `contains` [EXTRACTED]
- [[_god_node_article()]] - `contains` [EXTRACTED]
- [[_index_md()]] - `contains` [EXTRACTED]
- [[_safe_filename()]] - `contains` [EXTRACTED]
- [[to_wiki()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[wiki.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None