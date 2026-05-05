---
source_file: "vendor/graphify/worked/example/raw/storage.py"
type: "code"
community: "Community None"
degree: 5
location: "L87"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# list_records()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["list_records[]"]:::centerNode
    center -->|"calls"| N_raw_api_handle_list["handle_list[]"]
    center -->|"contains"| N_vendor_graphify_worked_example_raw_storage_py["storage.py"]
    center -->|"calls"| N_raw_storage_load_index["load_index[]"]
    center -->|"rationale_for"| N_raw_storage_rationale_88["Return all record IDs currently in storage."]
    center -->|"calls"| N_knowledge_corpusstore_corpusstore_list[".list[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.list()]] - `calls` [INFERRED]
- [[Return all record IDs currently in storage.]] - `rationale_for` [EXTRACTED]
- [[handle_list()]] - `calls` [INFERRED]
- [[load_index()]] - `calls` [EXTRACTED]
- [[storage.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[list_records()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None