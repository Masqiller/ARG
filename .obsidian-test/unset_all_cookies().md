---
source_file: "vendor/graphify/worked/httpx/raw/utils.py"
type: "code"
community: "Community None"
degree: 2
location: "L63"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# unset_all_cookies()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["unset_all_cookies[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_utils_py["utils.py"]
    center -->|"rationale_for"| N_raw_utils_rationale_64["Clear all cookies from a cookie jar in place."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Clear all cookies from a cookie jar in place.]] - `rationale_for` [EXTRACTED]
- [[utils.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[unset_all_cookies()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None