---
source_file: "vendor/graphify/worked/httpx/raw/transport.py"
type: "code"
community: "Community None"
degree: 8
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# transport.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["transport.py"]:::centerNode
    center -->|"contains"| N_raw_transport_basetransport["BaseTransport"]
    center -->|"contains"| N_raw_transport_asyncbasetransport["AsyncBaseTransport"]
    center -->|"contains"| N_raw_transport_connectionpool["ConnectionPool"]
    center -->|"contains"| N_raw_transport_httptransport["HTTPTransport"]
    center -->|"contains"| N_raw_transport_asynchttptransport["AsyncHTTPTransport"]
    center -->|"contains"| N_raw_transport_mocktransport["MockTransport"]
    center -->|"contains"| N_raw_transport_proxytransport["ProxyTransport"]
    center -->|"rationale_for"| N_raw_transport_rationale_1["Transport layer: connection management and low-level HTTP sending. HTTPTransport"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AsyncBaseTransport]] - `contains` [EXTRACTED]
- [[AsyncHTTPTransport]] - `contains` [EXTRACTED]
- [[BaseTransport]] - `contains` [EXTRACTED]
- [[ConnectionPool]] - `contains` [EXTRACTED]
- [[HTTPTransport]] - `contains` [EXTRACTED]
- [[MockTransport]] - `contains` [EXTRACTED]
- [[ProxyTransport]] - `contains` [EXTRACTED]
- [[Transport layer connection management and low-level HTTP sending. HTTPTransport]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[transport.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None