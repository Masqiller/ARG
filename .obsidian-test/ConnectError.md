---
source_file: "vendor/graphify/worked/httpx/raw/exceptions.py"
type: "code"
community: "Community None"
degree: 11
location: "L46"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# ConnectError

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 11

## Architecture Graph
```mermaid
graph LR
    center["ConnectError"]:::centerNode
    center -->|"uses"| N_raw_transport_basetransport["BaseTransport"]
    center -->|"uses"| N_raw_transport_asyncbasetransport["AsyncBaseTransport"]
    center -->|"uses"| N_raw_transport_connectionpool["ConnectionPool"]
    center -->|"uses"| N_raw_transport_httptransport["HTTPTransport"]
    center -->|"calls"| N_raw_transport_httptransport_handle_request[".handle_request[]"]
    center -->|"uses"| N_raw_transport_asynchttptransport["AsyncHTTPTransport"]
    center -->|"uses"| N_raw_transport_mocktransport["MockTransport"]
    center -->|"uses"| N_raw_transport_proxytransport["ProxyTransport"]
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_exceptions_py["exceptions.py"]
    center -->|"inherits"| N_raw_exceptions_networkerror["NetworkError"]
    center -->|"rationale_for"| N_raw_exceptions_rationale_47["Failed to establish a connection."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.handle_request()_1]] - `calls` [INFERRED]
- [[AsyncBaseTransport]] - `uses` [INFERRED]
- [[AsyncHTTPTransport]] - `uses` [INFERRED]
- [[BaseTransport]] - `uses` [INFERRED]
- [[ConnectionPool]] - `uses` [INFERRED]
- [[Failed to establish a connection.]] - `rationale_for` [EXTRACTED]
- [[HTTPTransport]] - `uses` [INFERRED]
- [[MockTransport]] - `uses` [INFERRED]
- [[NetworkError_1]] - `inherits` [EXTRACTED]
- [[ProxyTransport]] - `uses` [INFERRED]
- [[exceptions.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ConnectError]]
```

#graphify/code #graphify/INFERRED #community/Community_None