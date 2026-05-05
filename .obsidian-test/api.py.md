---
source_file: "vendor/graphify/worked/example/raw/api.py"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# api.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["api.py"]:::centerNode
    center -->|"contains"| N_raw_api_handle_upload["handle_upload[]"]
    center -->|"contains"| N_raw_api_handle_get["handle_get[]"]
    center -->|"contains"| N_raw_api_handle_delete["handle_delete[]"]
    center -->|"contains"| N_raw_api_handle_list["handle_list[]"]
    center -->|"contains"| N_raw_api_handle_search["handle_search[]"]
    center -->|"contains"| N_raw_api_handle_enrich["handle_enrich[]"]
    center -->|"rationale_for"| N_raw_api_rationale_1["API module - exposes the document pipeline over HTTP. Thin layer over parser, va"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[API module - exposes the document pipeline over HTTP. Thin layer over parser, va]] - `rationale_for` [EXTRACTED]
- [[handle_delete()]] - `contains` [EXTRACTED]
- [[handle_enrich()]] - `contains` [EXTRACTED]
- [[handle_get()]] - `contains` [EXTRACTED]
- [[handle_list()]] - `contains` [EXTRACTED]
- [[handle_search()]] - `contains` [EXTRACTED]
- [[handle_upload()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[api.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None