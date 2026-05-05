---
source_file: "vendor/graphify/worked/example/raw/storage.py"
type: "code"
community: "Community None"
degree: 10
location: "L20"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# load_index()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["load_index[]"]:::centerNode
    center -->|"calls"| N_raw_api_handle_search["handle_search[]"]
    center -->|"calls"| N_raw_processor_find_cross_references["find_cross_references[]"]
    center -->|"calls"| N_raw_processor_reprocess_all["reprocess_all[]"]
    center -->|"contains"| N_vendor_graphify_worked_example_raw_storage_py["storage.py"]
    center -->|"calls"| N_raw_storage_ensure_storage["_ensure_storage[]"]
    center -->|"calls"| N_raw_storage_save_parsed["save_parsed[]"]
    center -->|"calls"| N_raw_storage_save_processed["save_processed[]"]
    center -->|"calls"| N_raw_storage_delete_record["delete_record[]"]
    center -->|"calls"| N_raw_storage_list_records["list_records[]"]
    center -->|"rationale_for"| N_raw_storage_rationale_21["Load the full document index from disk."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Load the full document index from disk.]] - `rationale_for` [EXTRACTED]
- [[_ensure_storage()]] - `calls` [EXTRACTED]
- [[delete_record()]] - `calls` [EXTRACTED]
- [[find_cross_references()]] - `calls` [INFERRED]
- [[handle_search()]] - `calls` [INFERRED]
- [[list_records()]] - `calls` [EXTRACTED]
- [[reprocess_all()]] - `calls` [INFERRED]
- [[save_parsed()]] - `calls` [EXTRACTED]
- [[save_processed()]] - `calls` [EXTRACTED]
- [[storage.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[load_index()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None