---
source_file: "vendor/graphify/graphify/detect.py"
type: "code"
community: "Community None"
degree: 3
location: "L67"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _looks_like_paper()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_looks_like_paper[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_detect_py["detect.py"]
    center -->|"calls"| N_graphify_detect_classify_file["classify_file[]"]
    center -->|"rationale_for"| N_graphify_detect_rationale_68["Heuristic: does this text file read like an academic paper?"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Heuristic does this text file read like an academic paper]] - `rationale_for` [EXTRACTED]
- [[classify_file()]] - `calls` [EXTRACTED]
- [[detect.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_looks_like_paper()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None