---
source_file: "vendor/graphify/worked/httpx/raw/exceptions.py"
type: "code"
community: "Community None"
degree: 3
location: "L62"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ProxyError

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["ProxyError"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_exceptions_py["exceptions.py"]
    center -->|"inherits"| N_raw_exceptions_transporterror["TransportError"]
    center -->|"rationale_for"| N_raw_exceptions_rationale_63["An error occurred while establishing a proxy connection."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[An error occurred while establishing a proxy connection.]] - `rationale_for` [EXTRACTED]
- [[TransportError]] - `inherits` [EXTRACTED]
- [[exceptions.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ProxyError]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None