---
source_file: "vendor/graphify/worked/example/raw/storage.py"
type: "code"
community: "Community None"
degree: 6
location: "L74"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# delete_record()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["delete_record[]"]:::centerNode
    center -->|"calls"| N_raw_api_handle_delete["handle_delete[]"]
    center -->|"contains"| N_vendor_graphify_worked_example_raw_storage_py["storage.py"]
    center -->|"calls"| N_raw_storage_ensure_storage["_ensure_storage[]"]
    center -->|"calls"| N_raw_storage_load_index["load_index[]"]
    center -->|"calls"| N_raw_storage_save_index["save_index[]"]
    center -->|"rationale_for"| N_raw_storage_rationale_75["Remove a document and its index entry. Returns True if it existed."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Remove a document and its index entry. Returns True if it existed.]] - `rationale_for` [EXTRACTED]
- [[_ensure_storage()]] - `calls` [EXTRACTED]
- [[handle_delete()]] - `calls` [INFERRED]
- [[load_index()]] - `calls` [EXTRACTED]
- [[save_index()]] - `calls` [EXTRACTED]
- [[storage.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[delete_record()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None