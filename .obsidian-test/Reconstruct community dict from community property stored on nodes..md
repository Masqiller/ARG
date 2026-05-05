---
source_file: "vendor/graphify/graphify/serve.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L33"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Reconstruct community dict from community property stored on nodes.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Reconstruct community dict from community property stored on nodes."]:::centerNode
    center -->|"rationale_for"| N_graphify_serve_communities_from_graph["_communities_from_graph[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_communities_from_graph()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Reconstruct community dict from community property stored on nodes.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None