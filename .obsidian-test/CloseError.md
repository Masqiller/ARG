---
source_file: "vendor/graphify/worked/httpx/raw/exceptions.py"
type: "code"
community: "Community None"
degree: 3
location: "L58"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# CloseError

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["CloseError"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_exceptions_py["exceptions.py"]
    center -->|"inherits"| N_raw_exceptions_networkerror["NetworkError"]
    center -->|"rationale_for"| N_raw_exceptions_rationale_59["Failed to close a connection."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Failed to close a connection.]] - `rationale_for` [EXTRACTED]
- [[NetworkError_1]] - `inherits` [EXTRACTED]
- [[exceptions.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[CloseError]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None