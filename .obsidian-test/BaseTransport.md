---
source_file: "vendor/graphify/worked/httpx/raw/transport.py"
type: "code"
community: "Community None"
degree: 17
location: "L10"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# BaseTransport

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 17

## Architecture Graph
```mermaid
graph LR
    center["BaseTransport"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_transport_py["transport.py"]
    center -->|"method"| N_raw_transport_basetransport_handle_request[".handle_request[]"]
    center -->|"method"| N_raw_transport_basetransport_close[".close[]"]
    center -->|"inherits"| N_raw_transport_httptransport["HTTPTransport"]
    center -->|"inherits"| N_raw_transport_mocktransport["MockTransport"]
    center -->|"inherits"| N_raw_transport_proxytransport["ProxyTransport"]
    center -->|"rationale_for"| N_raw_transport_rationale_11["Sync transport interface."]
    center -->|"uses"| N_raw_models_request["Request"]
    center -->|"uses"| N_raw_models_response["Response"]
    center -->|"uses"| N_raw_exceptions_transporterror["TransportError"]
    center -->|"uses"| N_raw_exceptions_connecterror["ConnectError"]
    center -->|"uses"| N_raw_exceptions_timeoutexception["TimeoutException"]
    center -->|"uses"| N_raw_client_timeout["Timeout"]
    center -->|"uses"| N_raw_client_limits["Limits"]
    center -->|"uses"| N_raw_client_baseclient["BaseClient"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.close()]] - `method` [EXTRACTED]
- [[.handle_request()]] - `method` [EXTRACTED]
- [[AsyncClient]] - `uses` [INFERRED]
- [[BaseClient]] - `uses` [INFERRED]
- [[Client]] - `uses` [INFERRED]
- [[ConnectError]] - `uses` [INFERRED]
- [[HTTPTransport]] - `inherits` [EXTRACTED]
- [[Limits]] - `uses` [INFERRED]
- [[MockTransport]] - `inherits` [EXTRACTED]
- [[ProxyTransport]] - `inherits` [EXTRACTED]
- [[Request]] - `uses` [INFERRED]
- [[Response]] - `uses` [INFERRED]
- [[Sync transport interface.]] - `rationale_for` [EXTRACTED]
- [[Timeout]] - `uses` [INFERRED]
- [[TimeoutException]] - `uses` [INFERRED]
- [[TransportError]] - `uses` [INFERRED]
- [[transport.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[BaseTransport]]
```

#graphify/code #graphify/INFERRED #community/Community_None