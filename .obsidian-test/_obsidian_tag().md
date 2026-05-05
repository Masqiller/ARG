---
source_file: "vendor/graphify/graphify/export.py"
type: "code"
community: "Community None"
degree: 3
location: "L14"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _obsidian_tag()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_obsidian_tag[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_export_py["export.py"]
    center -->|"calls"| N_graphify_export_to_obsidian["to_obsidian[]"]
    center -->|"rationale_for"| N_graphify_export_rationale_15["Sanitize a community name for use as an Obsidian tag.      Obsidian tags only al"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Sanitize a community name for use as an Obsidian tag.      Obsidian tags only al]] - `rationale_for` [EXTRACTED]
- [[export.py]] - `contains` [EXTRACTED]
- [[to_obsidian()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_obsidian_tag()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None