---
source_file: "vendor/graphify/worked/example/raw/storage.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L88"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Return all record IDs currently in storage.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Return all record IDs currently in storage."]:::centerNode
    center -->|"rationale_for"| N_raw_storage_list_records["list_records[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[list_records()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Return all record IDs currently in storage.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None