---
source_file: "vendor/graphify/worked/example/raw/storage.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L66"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Fetch a single document by ID.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Fetch a single document by ID."]:::centerNode
    center -->|"rationale_for"| N_raw_storage_load_record["load_record[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[load_record()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Fetch a single document by ID.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None