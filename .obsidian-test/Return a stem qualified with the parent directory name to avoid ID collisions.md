---
source_file: "vendor/graphify/graphify/extract.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L40"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Return a stem qualified with the parent directory name to avoid ID collisions

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Return a stem qualified with the parent directory name to avoid ID collisions"]:::centerNode
    center -->|"rationale_for"| N_graphify_extract_file_stem["_file_stem[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_file_stem()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Return a stem qualified with the parent directory name to avoid ID collisions]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None