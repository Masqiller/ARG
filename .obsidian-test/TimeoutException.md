---
source_file: "vendor/graphify/worked/httpx/raw/exceptions.py"
type: "code"
community: "Community None"
degree: 13
location: "L22"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# TimeoutException

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["TimeoutException"]:::centerNode
    center -->|"uses"| N_raw_transport_basetransport["BaseTransport"]
    center -->|"uses"| N_raw_transport_asyncbasetransport["AsyncBaseTransport"]
    center -->|"uses"| N_raw_transport_connectionpool["ConnectionPool"]
    center -->|"uses"| N_raw_transport_httptransport["HTTPTransport"]
    center -->|"uses"| N_raw_transport_asynchttptransport["AsyncHTTPTransport"]
    center -->|"uses"| N_raw_transport_mocktransport["MockTransport"]
    center -->|"uses"| N_raw_transport_proxytransport["ProxyTransport"]
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_exceptions_py["exceptions.py"]
    center -->|"inherits"| N_raw_exceptions_transporterror["TransportError"]
    center -->|"inherits"| N_raw_exceptions_connecttimeout["ConnectTimeout"]
    center -->|"inherits"| N_raw_exceptions_readtimeout["ReadTimeout"]
    center -->|"inherits"| N_raw_exceptions_writetimeout["WriteTimeout"]
    center -->|"inherits"| N_raw_exceptions_pooltimeout["PoolTimeout"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AsyncBaseTransport]] - `uses` [INFERRED]
- [[AsyncHTTPTransport]] - `uses` [INFERRED]
- [[BaseTransport]] - `uses` [INFERRED]
- [[ConnectTimeout]] - `inherits` [EXTRACTED]
- [[ConnectionPool]] - `uses` [INFERRED]
- [[HTTPTransport]] - `uses` [INFERRED]
- [[MockTransport]] - `uses` [INFERRED]
- [[PoolTimeout]] - `inherits` [EXTRACTED]
- [[ProxyTransport]] - `uses` [INFERRED]
- [[ReadTimeout]] - `inherits` [EXTRACTED]
- [[TransportError]] - `inherits` [EXTRACTED]
- [[WriteTimeout]] - `inherits` [EXTRACTED]
- [[exceptions.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[TimeoutException]]
```

#graphify/code #graphify/INFERRED #community/Community_None