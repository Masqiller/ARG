---
source_file: "vendor/graphify/graphify/analyze.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L39"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Return True if this node is a file-level hub node (e.g. 'client', 'models')

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Return True if this node is a file-level hub node [e.g. 'client', 'models']"]:::centerNode
    center -->|"rationale_for"| N_graphify_analyze_is_file_node["_is_file_node[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_is_file_node()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Return True if this node is a file-level hub node (e.g. 'client', 'models')]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None