---
source_file: "vendor/graphify/worked/httpx/raw/transport.py"
type: "code"
community: "Community None"
degree: 10
location: "L103"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# MockTransport

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["MockTransport"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_transport_py["transport.py"]
    center -->|"inherits"| N_raw_transport_basetransport["BaseTransport"]
    center -->|"method"| N_raw_transport_mocktransport_init[".__init__[]"]
    center -->|"method"| N_raw_transport_mocktransport_handle_request[".handle_request[]"]
    center -->|"rationale_for"| N_raw_transport_rationale_104["A transport for testing that returns predefined responses.     Pass a handler fu"]
    center -->|"uses"| N_raw_models_request["Request"]
    center -->|"uses"| N_raw_models_response["Response"]
    center -->|"uses"| N_raw_exceptions_transporterror["TransportError"]
    center -->|"uses"| N_raw_exceptions_connecterror["ConnectError"]
    center -->|"uses"| N_raw_exceptions_timeoutexception["TimeoutException"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.__init__()_8]] - `method` [EXTRACTED]
- [[.handle_request()_2]] - `method` [EXTRACTED]
- [[A transport for testing that returns predefined responses.     Pass a handler fu]] - `rationale_for` [EXTRACTED]
- [[BaseTransport]] - `inherits` [EXTRACTED]
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
FROM [[MockTransport]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None