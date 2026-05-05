---
source_file: "vendor/graphify/graphify/export.py"
type: "code"
community: "Community None"
degree: 3
location: "L37"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _viz_node_limit()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_viz_node_limit[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_export_py["export.py"]
    center -->|"calls"| N_graphify_export_to_html["to_html[]"]
    center -->|"rationale_for"| N_graphify_export_rationale_38["Return the effective viz node limit, honoring GRAPHIFY_VIZ_NODE_LIMIT env var."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Return the effective viz node limit, honoring GRAPHIFY_VIZ_NODE_LIMIT env var.]] - `rationale_for` [EXTRACTED]
- [[export.py]] - `contains` [EXTRACTED]
- [[to_html()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_viz_node_limit()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None