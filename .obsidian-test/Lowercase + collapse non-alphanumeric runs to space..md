---
source_file: "vendor/graphify/graphify/dedup.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L18"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Lowercase + collapse non-alphanumeric runs to space.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Lowercase + collapse non-alphanumeric runs to space."]:::centerNode
    center -->|"rationale_for"| N_graphify_dedup_norm["_norm[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_norm()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Lowercase + collapse non-alphanumeric runs to space.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None