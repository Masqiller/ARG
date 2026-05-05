---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 6
location: "L267"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _import_js()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["_import_js[]"]:::centerNode
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_make_id["_make_id[]"]
    center -->|"calls"| N_graphify_extract_file_stem["_file_stem[]"]
    center -->|"calls"| N_graphify_extract_load_tsconfig_aliases["_load_tsconfig_aliases[]"]
    center -->|"calls"| N_graphify_extract_read_text["_read_text[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_file_stem()]] - `calls` [EXTRACTED]
- [[_load_tsconfig_aliases()]] - `calls` [EXTRACTED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[_read_text()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[str]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_import_js()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None