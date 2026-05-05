---
source_file: "vendor/graphify/worked/example/raw/storage.py"
type: "code"
community: "Community None"
degree: 9
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# storage.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["storage.py"]:::centerNode
    center -->|"contains"| N_raw_storage_ensure_storage["_ensure_storage[]"]
    center -->|"contains"| N_raw_storage_load_index["load_index[]"]
    center -->|"contains"| N_raw_storage_save_index["save_index[]"]
    center -->|"contains"| N_raw_storage_save_parsed["save_parsed[]"]
    center -->|"contains"| N_raw_storage_save_processed["save_processed[]"]
    center -->|"contains"| N_raw_storage_load_record["load_record[]"]
    center -->|"contains"| N_raw_storage_delete_record["delete_record[]"]
    center -->|"contains"| N_raw_storage_list_records["list_records[]"]
    center -->|"rationale_for"| N_raw_storage_rationale_1["Storage module - persists documents to disk and maintains the search index. All"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Storage module - persists documents to disk and maintains the search index. All]] - `rationale_for` [EXTRACTED]
- [[_ensure_storage()]] - `contains` [EXTRACTED]
- [[delete_record()]] - `contains` [EXTRACTED]
- [[list_records()]] - `contains` [EXTRACTED]
- [[load_index()]] - `contains` [EXTRACTED]
- [[load_record()]] - `contains` [EXTRACTED]
- [[save_index()]] - `contains` [EXTRACTED]
- [[save_parsed()]] - `contains` [EXTRACTED]
- [[save_processed()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[storage.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None