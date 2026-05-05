---
source_file: "vendor/graphify/worked/mixed-corpus/raw/analyze.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L126"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Return the first path component - used to detect cross-repo edges.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Return the first path component - used to detect cross-repo edges."]:::centerNode
    center -->|"rationale_for"| N_raw_analyze_top_level_dir["_top_level_dir[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_top_level_dir()_1]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Return the first path component - used to detect cross-repo edges._1]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None