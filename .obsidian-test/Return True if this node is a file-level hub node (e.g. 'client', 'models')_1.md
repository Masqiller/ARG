---
source_file: "vendor/graphify/worked/mixed-corpus/raw/analyze.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L12"
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
    center -->|"rationale_for"| N_raw_analyze_is_file_node["_is_file_node[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_is_file_node()_1]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Return True if this node is a file-level hub node (e.g. 'client', 'models')_1]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None