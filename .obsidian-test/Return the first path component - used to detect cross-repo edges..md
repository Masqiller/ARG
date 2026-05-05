---
source_file: "vendor/graphify/graphify/analyze.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L154"
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
    center -->|"rationale_for"| N_graphify_analyze_top_level_dir["_top_level_dir[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_top_level_dir()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Return the first path component - used to detect cross-repo edges.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None