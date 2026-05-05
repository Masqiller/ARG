---
source_file: "vendor/graphify/worked/httpx/raw/transport.py"
type: "code"
community: "Community None"
degree: 19
location: "L59"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# HTTPTransport

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 19

## Architecture Graph
```mermaid
graph LR
    center["HTTPTransport"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_transport_py["transport.py"]
    center -->|"inherits"| N_raw_transport_basetransport["BaseTransport"]
    center -->|"method"| N_raw_transport_httptransport_init[".__init__[]"]
    center -->|"method"| N_raw_transport_httptransport_handle_request[".handle_request[]"]
    center -->|"method"| N_raw_transport_httptransport_send["._send[]"]
    center -->|"method"| N_raw_transport_httptransport_close[".close[]"]
    center -->|"calls"| N_raw_transport_proxytransport_init[".__init__[]"]
    center -->|"rationale_for"| N_raw_transport_rationale_60["The main sync HTTP transport.     Uses a ConnectionPool for connection reuse."]
    center -->|"uses"| N_raw_models_request["Request"]
    center -->|"uses"| N_raw_models_response["Response"]
    center -->|"uses"| N_raw_exceptions_transporterror["TransportError"]
    center -->|"uses"| N_raw_exceptions_connecterror["ConnectError"]
    center -->|"uses"| N_raw_exceptions_timeoutexception["TimeoutException"]
    center -->|"uses"| N_raw_client_timeout["Timeout"]
    center -->|"uses"| N_raw_client_limits["Limits"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.__init__()_6]] - `method` [EXTRACTED]
- [[.__init__()_9]] - `calls` [EXTRACTED]
- [[.__init__()_13]] - `calls` [INFERRED]
- [[._send()]] - `method` [EXTRACTED]
- [[.close()_2]] - `method` [EXTRACTED]
- [[.handle_request()_1]] - `method` [EXTRACTED]
- [[AsyncClient]] - `uses` [INFERRED]
- [[BaseClient]] - `uses` [INFERRED]
- [[BaseTransport]] - `inherits` [EXTRACTED]
- [[Client]] - `uses` [INFERRED]
- [[ConnectError]] - `uses` [INFERRED]
- [[Limits]] - `uses` [INFERRED]
- [[Request]] - `uses` [INFERRED]
- [[Response]] - `uses` [INFERRED]
- [[The main sync HTTP transport.     Uses a ConnectionPool for connection reuse.]] - `rationale_for` [EXTRACTED]
- [[Timeout]] - `uses` [INFERRED]
- [[TimeoutException]] - `uses` [INFERRED]
- [[TransportError]] - `uses` [INFERRED]
- [[transport.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[HTTPTransport]]
```

#graphify/code #graphify/INFERRED #community/Community_None