---
source_file: "vendor/graphify/graphify/wiki.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L25"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Return (community_label, edge_count) pairs for cross-community connections, sort

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Return [community_label, edge_count] pairs for cross-community connections, sort"]:::centerNode
    center -->|"rationale_for"| N_graphify_wiki_cross_community_links["_cross_community_links[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_cross_community_links()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Return (community_label, edge_count) pairs for cross-community connections, sort]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None