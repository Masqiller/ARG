---
source_file: "vendor/graphify/worked/httpx/raw/client.py"
type: "code"
community: "Community None"
degree: 14
location: "L16"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# Timeout

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 14

## Architecture Graph
```mermaid
graph LR
    center["Timeout"]:::centerNode
    center -->|"uses"| N_raw_auth_auth["Auth"]
    center -->|"uses"| N_raw_auth_basicauth["BasicAuth"]
    center -->|"uses"| N_raw_transport_basetransport["BaseTransport"]
    center -->|"uses"| N_raw_transport_httptransport["HTTPTransport"]
    center -->|"uses"| N_raw_transport_asynchttptransport["AsyncHTTPTransport"]
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_client_py["client.py"]
    center -->|"method"| N_raw_client_timeout_init[".__init__[]"]
    center -->|"uses"| N_raw_models_request["Request"]
    center -->|"uses"| N_raw_models_response["Response"]
    center -->|"uses"| N_raw_models_url["URL"]
    center -->|"uses"| N_raw_models_headers["Headers"]
    center -->|"uses"| N_raw_models_cookies["Cookies"]
    center -->|"uses"| N_raw_exceptions_toomanyredirects["TooManyRedirects"]
    center -->|"uses"| N_raw_exceptions_invalidurl["InvalidURL"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.__init__()_10]] - `method` [EXTRACTED]
- [[AsyncHTTPTransport]] - `uses` [INFERRED]
- [[Auth]] - `uses` [INFERRED]
- [[BaseTransport]] - `uses` [INFERRED]
- [[BasicAuth]] - `uses` [INFERRED]
- [[Cookies]] - `uses` [INFERRED]
- [[HTTPTransport]] - `uses` [INFERRED]
- [[Headers]] - `uses` [INFERRED]
- [[InvalidURL]] - `uses` [INFERRED]
- [[Request]] - `uses` [INFERRED]
- [[Response]] - `uses` [INFERRED]
- [[TooManyRedirects]] - `uses` [INFERRED]
- [[URL]] - `uses` [INFERRED]
- [[client.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Timeout]]
```

#graphify/code #graphify/INFERRED #community/Community_None