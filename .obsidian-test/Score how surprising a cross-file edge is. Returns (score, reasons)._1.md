---
source_file: "vendor/graphify/worked/mixed-corpus/raw/analyze.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L139"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Score how surprising a cross-file edge is. Returns (score, reasons).

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Score how surprising a cross-file edge is. Returns [score, reasons]."]:::centerNode
    center -->|"rationale_for"| N_raw_analyze_surprise_score["_surprise_score[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_surprise_score()_1]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Score how surprising a cross-file edge is. Returns (score, reasons)._1]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None