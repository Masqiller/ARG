---
source_file: "vendor/graphify/worked/httpx/raw/exceptions.py"
type: "code"
community: "Community None"
degree: 7
location: "L42"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# NetworkError

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["NetworkError"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_exceptions_py["exceptions.py"]
    center -->|"inherits"| N_raw_exceptions_transporterror["TransportError"]
    center -->|"inherits"| N_raw_exceptions_connecterror["ConnectError"]
    center -->|"inherits"| N_raw_exceptions_readerror["ReadError"]
    center -->|"inherits"| N_raw_exceptions_writeerror["WriteError"]
    center -->|"inherits"| N_raw_exceptions_closeerror["CloseError"]
    center -->|"rationale_for"| N_raw_exceptions_rationale_43["A network error occurred."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[A network error occurred.]] - `rationale_for` [EXTRACTED]
- [[CloseError]] - `inherits` [EXTRACTED]
- [[ConnectError]] - `inherits` [EXTRACTED]
- [[ReadError]] - `inherits` [EXTRACTED]
- [[TransportError]] - `inherits` [EXTRACTED]
- [[WriteError]] - `inherits` [EXTRACTED]
- [[exceptions.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[NetworkError_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None