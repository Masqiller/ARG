---
source_file: "vendor/graphify/graphify/analyze.py"
type: "code"
community: "Community None"
degree: 3
location: "L22"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _cross_language()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_cross_language[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_analyze_py["analyze.py"]
    center -->|"calls"| N_graphify_analyze_surprise_score["_surprise_score[]"]
    center -->|"rationale_for"| N_graphify_analyze_rationale_23["Return True if two source files belong to different language families."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Return True if two source files belong to different language families.]] - `rationale_for` [EXTRACTED]
- [[_surprise_score()]] - `calls` [EXTRACTED]
- [[analyze.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_cross_language()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None