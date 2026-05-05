---
source_file: "vendor/graphify/worked/example/raw/api.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L44"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# List all document IDs in storage.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["List all document IDs in storage."]:::centerNode
    center -->|"rationale_for"| N_raw_api_handle_list["handle_list[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[handle_list()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[List all document IDs in storage.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None