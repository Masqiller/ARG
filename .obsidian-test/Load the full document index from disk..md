---
source_file: "vendor/graphify/worked/example/raw/storage.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L21"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Load the full document index from disk.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Load the full document index from disk."]:::centerNode
    center -->|"rationale_for"| N_raw_storage_load_index["load_index[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[load_index()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Load the full document index from disk.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None