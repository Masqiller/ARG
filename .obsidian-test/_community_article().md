---
source_file: "vendor/graphify/graphify/wiki.py"
type: "code"
community: "Community None"
degree: 3
location: "L36"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _community_article()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_community_article[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_wiki_py["wiki.py"]
    center -->|"calls"| N_graphify_wiki_cross_community_links["_cross_community_links[]"]
    center -->|"calls"| N_graphify_wiki_to_wiki["to_wiki[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_cross_community_links()]] - `calls` [EXTRACTED]
- [[to_wiki()]] - `calls` [EXTRACTED]
- [[wiki.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_community_article()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None