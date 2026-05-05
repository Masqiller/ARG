---
source_file: "vendor/graphify/worked/httpx/raw/transport.py"
type: "code"
community: "Community None"
degree: 10
location: "L20"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# AsyncBaseTransport

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["AsyncBaseTransport"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_transport_py["transport.py"]
    center -->|"method"| N_raw_transport_asyncbasetransport_handle_async_request[".handle_async_request[]"]
    center -->|"method"| N_raw_transport_asyncbasetransport_aclose[".aclose[]"]
    center -->|"inherits"| N_raw_transport_asynchttptransport["AsyncHTTPTransport"]
    center -->|"rationale_for"| N_raw_transport_rationale_21["Async transport interface."]
    center -->|"uses"| N_raw_models_request["Request"]
    center -->|"uses"| N_raw_models_response["Response"]
    center -->|"uses"| N_raw_exceptions_transporterror["TransportError"]
    center -->|"uses"| N_raw_exceptions_connecterror["ConnectError"]
    center -->|"uses"| N_raw_exceptions_timeoutexception["TimeoutException"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.aclose()]] - `method` [EXTRACTED]
- [[.handle_async_request()]] - `method` [EXTRACTED]
- [[Async transport interface.]] - `rationale_for` [EXTRACTED]
- [[AsyncHTTPTransport]] - `inherits` [EXTRACTED]
- [[ConnectError]] - `uses` [INFERRED]
- [[Request]] - `uses` [INFERRED]
- [[Response]] - `uses` [INFERRED]
- [[TimeoutException]] - `uses` [INFERRED]
- [[TransportError]] - `uses` [INFERRED]
- [[transport.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[AsyncBaseTransport]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None