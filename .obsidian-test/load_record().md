---
source_file: "vendor/graphify/worked/example/raw/storage.py"
type: "code"
community: "Community None"
degree: 5
location: "L65"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# load_record()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["load_record[]"]:::centerNode
    center -->|"calls"| N_raw_api_handle_get["handle_get[]"]
    center -->|"calls"| N_raw_api_handle_enrich["handle_enrich[]"]
    center -->|"contains"| N_vendor_graphify_worked_example_raw_storage_py["storage.py"]
    center -->|"calls"| N_raw_storage_ensure_storage["_ensure_storage[]"]
    center -->|"rationale_for"| N_raw_storage_rationale_66["Fetch a single document by ID."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Fetch a single document by ID.]] - `rationale_for` [EXTRACTED]
- [[_ensure_storage()]] - `calls` [EXTRACTED]
- [[handle_enrich()]] - `calls` [INFERRED]
- [[handle_get()]] - `calls` [INFERRED]
- [[storage.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[load_record()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None