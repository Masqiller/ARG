---
source_file: "vendor/graphify/worked/httpx/raw/utils.py"
type: "code"
community: "Community None"
degree: 4
location: "L12"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# primitive_value_to_str()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["primitive_value_to_str[]"]:::centerNode
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_utils_py["utils.py"]
    center -->|"calls"| N_raw_utils_flatten_queryparams["flatten_queryparams[]"]
    center -->|"rationale_for"| N_raw_utils_rationale_13["Convert a primitive value to its string representation."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Convert a primitive value to its string representation.]] - `rationale_for` [EXTRACTED]
- [[flatten_queryparams()]] - `calls` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[utils.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[primitive_value_to_str()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None