---
source_file: "vendor/graphify/worked/httpx/raw/models.py"
type: "code"
community: "Community None"
degree: 26
location: "L80"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# Response

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 26

## Architecture Graph
```mermaid
graph LR
    center["Response"]:::centerNode
    center -->|"uses"| N_raw_auth_auth["Auth"]
    center -->|"uses"| N_raw_auth_basicauth["BasicAuth"]
    center -->|"uses"| N_raw_auth_bearerauth["BearerAuth"]
    center -->|"uses"| N_raw_auth_digestauth["DigestAuth"]
    center -->|"uses"| N_raw_auth_netrcauth["NetRCAuth"]
    center -->|"uses"| N_raw_transport_basetransport["BaseTransport"]
    center -->|"uses"| N_raw_transport_asyncbasetransport["AsyncBaseTransport"]
    center -->|"uses"| N_raw_transport_connectionpool["ConnectionPool"]
    center -->|"uses"| N_raw_transport_httptransport["HTTPTransport"]
    center -->|"calls"| N_raw_transport_httptransport_send["._send[]"]
    center -->|"uses"| N_raw_transport_asynchttptransport["AsyncHTTPTransport"]
    center -->|"calls"| N_raw_transport_asynchttptransport_handle_async_request[".handle_async_request[]"]
    center -->|"uses"| N_raw_transport_mocktransport["MockTransport"]
    center -->|"uses"| N_raw_transport_proxytransport["ProxyTransport"]
    center -->|"uses"| N_raw_client_timeout["Timeout"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.__init__()_19]] - `method` [EXTRACTED]
- [[.__repr__()_2]] - `method` [EXTRACTED]
- [[._send()]] - `calls` [INFERRED]
- [[.handle_async_request()_1]] - `calls` [INFERRED]
- [[.json()]] - `method` [EXTRACTED]
- [[.raise_for_status()]] - `method` [EXTRACTED]
- [[.read()]] - `method` [EXTRACTED]
- [[AsyncBaseTransport]] - `uses` [INFERRED]
- [[AsyncClient]] - `uses` [INFERRED]
- [[AsyncHTTPTransport]] - `uses` [INFERRED]
- [[Auth]] - `uses` [INFERRED]
- [[BaseClient]] - `uses` [INFERRED]
- [[BaseTransport]] - `uses` [INFERRED]
- [[BasicAuth]] - `uses` [INFERRED]
- [[BearerAuth]] - `uses` [INFERRED]
- [[Client]] - `uses` [INFERRED]
- [[ConnectionPool]] - `uses` [INFERRED]
- [[DigestAuth]] - `uses` [INFERRED]
- [[HTTPStatusError]] - `uses` [INFERRED]
- [[HTTPTransport]] - `uses` [INFERRED]
- [[Limits]] - `uses` [INFERRED]
- [[MockTransport]] - `uses` [INFERRED]
- [[NetRCAuth]] - `uses` [INFERRED]
- [[ProxyTransport]] - `uses` [INFERRED]
- [[Timeout]] - `uses` [INFERRED]
- [[models.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Response]]
```

#graphify/code #graphify/INFERRED #community/Community_None