---
source_file: "vendor/graphify/graphify/extract.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L196"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Get the name from a node using config.name_field, falling back to child types.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Get the name from a node using config.name_field, falling back to child types."]:::centerNode
    center -->|"rationale_for"| N_graphify_extract_resolve_name["_resolve_name[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_resolve_name()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Get the name from a node using config.name_field, falling back to child types.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None