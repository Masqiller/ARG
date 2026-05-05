---
source_file: "vendor/graphify/worked/example/raw/storage.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L75"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Remove a document and its index entry. Returns True if it existed.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Remove a document and its index entry. Returns True if it existed."]:::centerNode
    center -->|"rationale_for"| N_raw_storage_delete_record["delete_record[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[delete_record()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Remove a document and its index entry. Returns True if it existed.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None