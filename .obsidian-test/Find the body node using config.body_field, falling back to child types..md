---
source_file: "vendor/graphify/graphify/extract.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L210"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Find the body node using config.body_field, falling back to child types.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Find the body node using config.body_field, falling back to child types."]:::centerNode
    center -->|"rationale_for"| N_graphify_extract_find_body["_find_body[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_find_body()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Find the body node using config.body_field, falling back to child types.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None