---
source_file: "vendor/graphify/worked/httpx/raw/exceptions.py"
type: "code"
community: "Community None"
degree: 6
location: "L14"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# RequestError

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["RequestError"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_exceptions_py["exceptions.py"]
    center -->|"inherits"| N_raw_exceptions_httperror["HTTPError"]
    center -->|"inherits"| N_raw_exceptions_transporterror["TransportError"]
    center -->|"inherits"| N_raw_exceptions_decodingerror["DecodingError"]
    center -->|"inherits"| N_raw_exceptions_toomanyredirects["TooManyRedirects"]
    center -->|"rationale_for"| N_raw_exceptions_rationale_15["An error occurred while issuing a request."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[An error occurred while issuing a request.]] - `rationale_for` [EXTRACTED]
- [[DecodingError]] - `inherits` [EXTRACTED]
- [[HTTPError]] - `inherits` [EXTRACTED]
- [[TooManyRedirects]] - `inherits` [EXTRACTED]
- [[TransportError]] - `inherits` [EXTRACTED]
- [[exceptions.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[RequestError]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None