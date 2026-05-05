---
source_file: "vendor/graphify/graphify/detect.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L68"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Heuristic: does this text file read like an academic paper?

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Heuristic: does this text file read like an academic paper?"]:::centerNode
    center -->|"rationale_for"| N_graphify_detect_looks_like_paper["_looks_like_paper[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_looks_like_paper()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Heuristic does this text file read like an academic paper]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None