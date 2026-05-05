---
source_file: "vendor/graphify/graphify/dedup.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L235"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Pick the canonical survivor: prefer no chunk suffix, then shorter ID.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Pick the canonical survivor: prefer no chunk suffix, then shorter ID."]:::centerNode
    center -->|"rationale_for"| N_graphify_dedup_pick_winner["_pick_winner[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_pick_winner()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Pick the canonical survivor prefer no chunk suffix, then shorter ID.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None