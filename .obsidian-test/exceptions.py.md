---
source_file: "vendor/graphify/worked/httpx/raw/exceptions.py"
type: "code"
community: "Community None"
degree: 21
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# exceptions.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 21

## Architecture Graph
```mermaid
graph LR
    center["exceptions.py"]:::centerNode
    center -->|"contains"| N_raw_exceptions_httperror["HTTPError"]
    center -->|"contains"| N_raw_exceptions_requesterror["RequestError"]
    center -->|"contains"| N_raw_exceptions_transporterror["TransportError"]
    center -->|"contains"| N_raw_exceptions_timeoutexception["TimeoutException"]
    center -->|"contains"| N_raw_exceptions_connecttimeout["ConnectTimeout"]
    center -->|"contains"| N_raw_exceptions_readtimeout["ReadTimeout"]
    center -->|"contains"| N_raw_exceptions_writetimeout["WriteTimeout"]
    center -->|"contains"| N_raw_exceptions_pooltimeout["PoolTimeout"]
    center -->|"contains"| N_raw_exceptions_networkerror["NetworkError"]
    center -->|"contains"| N_raw_exceptions_connecterror["ConnectError"]
    center -->|"contains"| N_raw_exceptions_readerror["ReadError"]
    center -->|"contains"| N_raw_exceptions_writeerror["WriteError"]
    center -->|"contains"| N_raw_exceptions_closeerror["CloseError"]
    center -->|"contains"| N_raw_exceptions_proxyerror["ProxyError"]
    center -->|"contains"| N_raw_exceptions_protocolerror["ProtocolError"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CloseError]] - `contains` [EXTRACTED]
- [[ConnectError]] - `contains` [EXTRACTED]
- [[ConnectTimeout]] - `contains` [EXTRACTED]
- [[CookieConflict]] - `contains` [EXTRACTED]
- [[DecodingError]] - `contains` [EXTRACTED]
- [[HTTPError]] - `contains` [EXTRACTED]
- [[HTTPStatusError]] - `contains` [EXTRACTED]
- [[InvalidURL]] - `contains` [EXTRACTED]
- [[NetworkError_1]] - `contains` [EXTRACTED]
- [[PoolTimeout]] - `contains` [EXTRACTED]
- [[ProtocolError]] - `contains` [EXTRACTED]
- [[ProxyError]] - `contains` [EXTRACTED]
- [[ReadError]] - `contains` [EXTRACTED]
- [[ReadTimeout]] - `contains` [EXTRACTED]
- [[RequestError]] - `contains` [EXTRACTED]
- [[TimeoutException]] - `contains` [EXTRACTED]
- [[TooManyRedirects]] - `contains` [EXTRACTED]
- [[TransportError]] - `contains` [EXTRACTED]
- [[WriteError]] - `contains` [EXTRACTED]
- [[WriteTimeout]] - `contains` [EXTRACTED]
- [[httpx-like exception hierarchy. All exceptions inherit from HTTPError at the top]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[exceptions.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None