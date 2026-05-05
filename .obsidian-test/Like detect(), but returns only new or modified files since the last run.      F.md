---
source_file: "vendor/graphify/graphify/detect.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L775"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Like detect(), but returns only new or modified files since the last run.      F

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Like detect[], but returns only new or modified files since the last run.      F"]:::centerNode
    center -->|"rationale_for"| N_graphify_detect_detect_incremental["detect_incremental[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[detect_incremental()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Like detect(), but returns only new or modified files since the last run.      F]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None