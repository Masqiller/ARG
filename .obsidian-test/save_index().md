---
source_file: "vendor/graphify/worked/example/raw/storage.py"
type: "code"
community: "Community None"
degree: 6
location: "L26"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# save_index()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["save_index[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_example_raw_storage_py["storage.py"]
    center -->|"calls"| N_raw_storage_ensure_storage["_ensure_storage[]"]
    center -->|"calls"| N_raw_storage_save_parsed["save_parsed[]"]
    center -->|"calls"| N_raw_storage_save_processed["save_processed[]"]
    center -->|"calls"| N_raw_storage_delete_record["delete_record[]"]
    center -->|"rationale_for"| N_raw_storage_rationale_27["Persist the index to disk."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Persist the index to disk.]] - `rationale_for` [EXTRACTED]
- [[_ensure_storage()]] - `calls` [EXTRACTED]
- [[delete_record()]] - `calls` [EXTRACTED]
- [[save_parsed()]] - `calls` [EXTRACTED]
- [[save_processed()]] - `calls` [EXTRACTED]
- [[storage.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[save_index()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None