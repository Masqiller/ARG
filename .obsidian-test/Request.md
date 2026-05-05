---
source_file: "vendor/graphify/worked/httpx/raw/models.py"
type: "code"
community: "Community None"
degree: 21
location: "L68"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# Request

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 21

## Architecture Graph
```mermaid
graph LR
    center["Request"]:::centerNode
    center -->|"uses"| N_raw_auth_auth["Auth"]
    center -->|"uses"| N_raw_auth_basicauth["BasicAuth"]
    center -->|"uses"| N_raw_auth_bearerauth["BearerAuth"]
    center -->|"uses"| N_raw_auth_digestauth["DigestAuth"]
    center -->|"uses"| N_raw_auth_netrcauth["NetRCAuth"]
    center -->|"uses"| N_raw_transport_basetransport["BaseTransport"]
    center -->|"uses"| N_raw_transport_asyncbasetransport["AsyncBaseTransport"]
    center -->|"uses"| N_raw_transport_connectionpool["ConnectionPool"]
    center -->|"uses"| N_raw_transport_httptransport["HTTPTransport"]
    center -->|"uses"| N_raw_transport_asynchttptransport["AsyncHTTPTransport"]
    center -->|"uses"| N_raw_transport_mocktransport["MockTransport"]
    center -->|"uses"| N_raw_transport_proxytransport["ProxyTransport"]
    center -->|"uses"| N_raw_client_timeout["Timeout"]
    center -->|"uses"| N_raw_client_limits["Limits"]
    center -->|"uses"| N_raw_client_baseclient["BaseClient"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.__init__()_18]] - `method` [EXTRACTED]
- [[.__repr__()_1]] - `method` [EXTRACTED]
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
FROM [[Request]]
```

#graphify/code #graphify/INFERRED #community/Community_None