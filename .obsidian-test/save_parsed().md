---
source_file: "vendor/graphify/worked/example/raw/storage.py"
type: "code"
community: "Community None"
degree: 7
location: "L32"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# save_parsed()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["save_parsed[]"]:::centerNode
    center -->|"calls"| N_str["str"]
    center -->|"calls"| N_raw_parser_parse_and_save["parse_and_save[]"]
    center -->|"contains"| N_vendor_graphify_worked_example_raw_storage_py["storage.py"]
    center -->|"calls"| N_raw_storage_ensure_storage["_ensure_storage[]"]
    center -->|"calls"| N_raw_storage_load_index["load_index[]"]
    center -->|"calls"| N_raw_storage_save_index["save_index[]"]
    center -->|"rationale_for"| N_raw_storage_rationale_33["Write a parsed document to storage. Returns the assigned record ID."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Write a parsed document to storage. Returns the assigned record ID.]] - `rationale_for` [EXTRACTED]
- [[_ensure_storage()]] - `calls` [EXTRACTED]
- [[load_index()]] - `calls` [EXTRACTED]
- [[parse_and_save()]] - `calls` [INFERRED]
- [[save_index()]] - `calls` [EXTRACTED]
- [[storage.py]] - `contains` [EXTRACTED]
- [[str]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[save_parsed()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None