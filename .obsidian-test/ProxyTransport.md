---
source_file: "vendor/graphify/worked/httpx/raw/transport.py"
type: "code"
community: "Community None"
degree: 11
location: "L116"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ProxyTransport

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 11

## Architecture Graph
```mermaid
graph LR
    center["ProxyTransport"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_transport_py["transport.py"]
    center -->|"inherits"| N_raw_transport_basetransport["BaseTransport"]
    center -->|"method"| N_raw_transport_proxytransport_init[".__init__[]"]
    center -->|"method"| N_raw_transport_proxytransport_handle_request[".handle_request[]"]
    center -->|"method"| N_raw_transport_proxytransport_close[".close[]"]
    center -->|"rationale_for"| N_raw_transport_rationale_117["Routes requests through an HTTP/HTTPS proxy.     Wraps an inner transport and pr"]
    center -->|"uses"| N_raw_models_request["Request"]
    center -->|"uses"| N_raw_models_response["Response"]
    center -->|"uses"| N_raw_exceptions_transporterror["TransportError"]
    center -->|"uses"| N_raw_exceptions_connecterror["ConnectError"]
    center -->|"uses"| N_raw_exceptions_timeoutexception["TimeoutException"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.__init__()_9]] - `method` [EXTRACTED]
- [[.close()_3]] - `method` [EXTRACTED]
- [[.handle_request()_3]] - `method` [EXTRACTED]
- [[BaseTransport]] - `inherits` [EXTRACTED]
- [[ConnectError]] - `uses` [INFERRED]
- [[Request]] - `uses` [INFERRED]
- [[Response]] - `uses` [INFERRED]
- [[Routes requests through an HTTPHTTPS proxy.     Wraps an inner transport and pr]] - `rationale_for` [EXTRACTED]
- [[TimeoutException]] - `uses` [INFERRED]
- [[TransportError]] - `uses` [INFERRED]
- [[transport.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ProxyTransport]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None