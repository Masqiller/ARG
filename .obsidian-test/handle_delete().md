---
source_file: "vendor/graphify/worked/example/raw/api.py"
type: "code"
community: "Community None"
degree: 3
location: "L35"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# handle_delete()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["handle_delete[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_example_raw_api_py["api.py"]
    center -->|"rationale_for"| N_raw_api_rationale_36["Delete a document by ID."]
    center -->|"calls"| N_raw_storage_delete_record["delete_record[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Delete a document by ID.]] - `rationale_for` [EXTRACTED]
- [[api.py]] - `contains` [EXTRACTED]
- [[delete_record()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[handle_delete()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None