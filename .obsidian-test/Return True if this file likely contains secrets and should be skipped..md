---
source_file: "vendor/graphify/graphify/detect.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L62"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Return True if this file likely contains secrets and should be skipped.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Return True if this file likely contains secrets and should be skipped."]:::centerNode
    center -->|"rationale_for"| N_graphify_detect_is_sensitive["_is_sensitive[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_is_sensitive()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Return True if this file likely contains secrets and should be skipped.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None