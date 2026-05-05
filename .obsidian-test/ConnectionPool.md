---
source_file: "vendor/graphify/worked/httpx/raw/transport.py"
type: "code"
community: "Community None"
degree: 13
location: "L30"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ConnectionPool

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["ConnectionPool"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_transport_py["transport.py"]
    center -->|"method"| N_raw_transport_connectionpool_init[".__init__[]"]
    center -->|"method"| N_raw_transport_connectionpool_get_connection_key["._get_connection_key[]"]
    center -->|"method"| N_raw_transport_connectionpool_get_connection[".get_connection[]"]
    center -->|"method"| N_raw_transport_connectionpool_return_connection[".return_connection[]"]
    center -->|"method"| N_raw_transport_connectionpool_close[".close[]"]
    center -->|"calls"| N_raw_transport_httptransport_init[".__init__[]"]
    center -->|"rationale_for"| N_raw_transport_rationale_31["Manages a pool of persistent HTTP connections.     Keys connections by [scheme,"]
    center -->|"uses"| N_raw_models_request["Request"]
    center -->|"uses"| N_raw_models_response["Response"]
    center -->|"uses"| N_raw_exceptions_transporterror["TransportError"]
    center -->|"uses"| N_raw_exceptions_connecterror["ConnectError"]
    center -->|"uses"| N_raw_exceptions_timeoutexception["TimeoutException"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.__init__()_5]] - `method` [EXTRACTED]
- [[.__init__()_6]] - `calls` [EXTRACTED]
- [[._get_connection_key()]] - `method` [EXTRACTED]
- [[.close()_1]] - `method` [EXTRACTED]
- [[.get_connection()]] - `method` [EXTRACTED]
- [[.return_connection()]] - `method` [EXTRACTED]
- [[ConnectError]] - `uses` [INFERRED]
- [[Manages a pool of persistent HTTP connections.     Keys connections by (scheme,]] - `rationale_for` [EXTRACTED]
- [[Request]] - `uses` [INFERRED]
- [[Response]] - `uses` [INFERRED]
- [[TimeoutException]] - `uses` [INFERRED]
- [[TransportError]] - `uses` [INFERRED]
- [[transport.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ConnectionPool]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None