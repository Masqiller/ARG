---
source_file: "vendor/graphify/worked/httpx/raw/exceptions.py"
type: "code"
community: "Community None"
degree: 15
location: "L18"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# TransportError

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 15

## Architecture Graph
```mermaid
graph LR
    center["TransportError"]:::centerNode
    center -->|"uses"| N_raw_transport_basetransport["BaseTransport"]
    center -->|"uses"| N_raw_transport_asyncbasetransport["AsyncBaseTransport"]
    center -->|"uses"| N_raw_transport_connectionpool["ConnectionPool"]
    center -->|"uses"| N_raw_transport_httptransport["HTTPTransport"]
    center -->|"uses"| N_raw_transport_asynchttptransport["AsyncHTTPTransport"]
    center -->|"uses"| N_raw_transport_mocktransport["MockTransport"]
    center -->|"uses"| N_raw_transport_proxytransport["ProxyTransport"]
    center -->|"calls"| N_raw_transport_proxytransport_handle_request[".handle_request[]"]
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_exceptions_py["exceptions.py"]
    center -->|"inherits"| N_raw_exceptions_requesterror["RequestError"]
    center -->|"inherits"| N_raw_exceptions_timeoutexception["TimeoutException"]
    center -->|"inherits"| N_raw_exceptions_networkerror["NetworkError"]
    center -->|"inherits"| N_raw_exceptions_proxyerror["ProxyError"]
    center -->|"inherits"| N_raw_exceptions_protocolerror["ProtocolError"]
    center -->|"rationale_for"| N_raw_exceptions_rationale_19["An error occurred at the transport layer."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.handle_request()_3]] - `calls` [INFERRED]
- [[An error occurred at the transport layer.]] - `rationale_for` [EXTRACTED]
- [[AsyncBaseTransport]] - `uses` [INFERRED]
- [[AsyncHTTPTransport]] - `uses` [INFERRED]
- [[BaseTransport]] - `uses` [INFERRED]
- [[ConnectionPool]] - `uses` [INFERRED]
- [[HTTPTransport]] - `uses` [INFERRED]
- [[MockTransport]] - `uses` [INFERRED]
- [[NetworkError_1]] - `inherits` [EXTRACTED]
- [[ProtocolError]] - `inherits` [EXTRACTED]
- [[ProxyError]] - `inherits` [EXTRACTED]
- [[ProxyTransport]] - `uses` [INFERRED]
- [[RequestError]] - `inherits` [EXTRACTED]
- [[TimeoutException]] - `inherits` [EXTRACTED]
- [[exceptions.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[TransportError]]
```

#graphify/code #graphify/INFERRED #community/Community_None