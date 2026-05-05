---
source_file: "vendor/graphify/graphify/detect.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L422"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Read .graphifyignore files and return (anchor_dir, pattern) pairs.      Patterns

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Read .graphifyignore files and return [anchor_dir, pattern] pairs.      Patterns"]:::centerNode
    center -->|"rationale_for"| N_graphify_detect_load_graphifyignore["_load_graphifyignore[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_load_graphifyignore()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Read .graphifyignore files and return (anchor_dir, pattern) pairs.      Patterns]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None