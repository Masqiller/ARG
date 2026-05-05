---
source_file: "vendor/graphify/graphify/analyze.py"
type: "code"
community: "Community None"
degree: 3
location: "L153"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _top_level_dir()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_top_level_dir[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_analyze_py["analyze.py"]
    center -->|"calls"| N_graphify_analyze_surprise_score["_surprise_score[]"]
    center -->|"rationale_for"| N_graphify_analyze_rationale_154["Return the first path component - used to detect cross-repo edges."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Return the first path component - used to detect cross-repo edges.]] - `rationale_for` [EXTRACTED]
- [[_surprise_score()]] - `calls` [EXTRACTED]
- [[analyze.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_top_level_dir()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None