---
source_file: "vendor/graphify/worked/example/raw/storage.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L33"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Write a parsed document to storage. Returns the assigned record ID.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Write a parsed document to storage. Returns the assigned record ID."]:::centerNode
    center -->|"rationale_for"| N_raw_storage_save_parsed["save_parsed[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[save_parsed()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Write a parsed document to storage. Returns the assigned record ID.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None