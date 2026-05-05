---
source_file: "vendor/graphify/graphify/analyze.py"
type: "code"
community: "Community None"
degree: 6
location: "L158"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _surprise_score()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["_surprise_score[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_analyze_py["analyze.py"]
    center -->|"calls"| N_graphify_analyze_cross_language["_cross_language[]"]
    center -->|"calls"| N_graphify_analyze_file_category["_file_category[]"]
    center -->|"calls"| N_graphify_analyze_top_level_dir["_top_level_dir[]"]
    center -->|"calls"| N_graphify_analyze_cross_file_surprises["_cross_file_surprises[]"]
    center -->|"rationale_for"| N_graphify_analyze_rationale_167["Score how surprising a cross-file edge is. Returns [score, reasons]."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Score how surprising a cross-file edge is. Returns (score, reasons).]] - `rationale_for` [EXTRACTED]
- [[_cross_file_surprises()]] - `calls` [EXTRACTED]
- [[_cross_language()]] - `calls` [EXTRACTED]
- [[_file_category()]] - `calls` [EXTRACTED]
- [[_top_level_dir()]] - `calls` [EXTRACTED]
- [[analyze.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_surprise_score()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None