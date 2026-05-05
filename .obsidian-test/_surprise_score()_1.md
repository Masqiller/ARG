---
source_file: "vendor/graphify/worked/mixed-corpus/raw/analyze.py"
type: "code"
community: "Community None"
degree: 5
location: "L130"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _surprise_score()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["_surprise_score[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_mixed_corpus_raw_analyze_py["analyze.py"]
    center -->|"calls"| N_raw_analyze_file_category["_file_category[]"]
    center -->|"calls"| N_raw_analyze_top_level_dir["_top_level_dir[]"]
    center -->|"calls"| N_raw_analyze_cross_file_surprises["_cross_file_surprises[]"]
    center -->|"rationale_for"| N_raw_analyze_rationale_139["Score how surprising a cross-file edge is. Returns [score, reasons]."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Score how surprising a cross-file edge is. Returns (score, reasons)._1]] - `rationale_for` [EXTRACTED]
- [[_cross_file_surprises()_1]] - `calls` [EXTRACTED]
- [[_file_category()_1]] - `calls` [EXTRACTED]
- [[_top_level_dir()_1]] - `calls` [EXTRACTED]
- [[analyze.py_1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_surprise_score()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None