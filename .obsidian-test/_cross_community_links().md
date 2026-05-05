---
source_file: "vendor/graphify/graphify/wiki.py"
type: "code"
community: "Community None"
degree: 3
location: "L24"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _cross_community_links()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_cross_community_links[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_wiki_py["wiki.py"]
    center -->|"calls"| N_graphify_wiki_community_article["_community_article[]"]
    center -->|"rationale_for"| N_graphify_wiki_rationale_25["Return [community_label, edge_count] pairs for cross-community connections, sort"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Return (community_label, edge_count) pairs for cross-community connections, sort]] - `rationale_for` [EXTRACTED]
- [[_community_article()]] - `calls` [EXTRACTED]
- [[wiki.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_cross_community_links()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None