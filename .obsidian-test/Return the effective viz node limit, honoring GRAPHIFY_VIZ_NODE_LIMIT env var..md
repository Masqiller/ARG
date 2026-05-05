---
source_file: "vendor/graphify/graphify/export.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L38"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Return the effective viz node limit, honoring GRAPHIFY_VIZ_NODE_LIMIT env var.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Return the effective viz node limit, honoring GRAPHIFY_VIZ_NODE_LIMIT env var."]:::centerNode
    center -->|"rationale_for"| N_graphify_export_viz_node_limit["_viz_node_limit[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_viz_node_limit()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Return the effective viz node limit, honoring GRAPHIFY_VIZ_NODE_LIMIT env var.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None