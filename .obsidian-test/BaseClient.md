---
source_file: "vendor/graphify/worked/httpx/raw/client.py"
type: "code"
community: "Community None"
degree: 19
location: "L31"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# BaseClient

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 19

## Architecture Graph
```mermaid
graph LR
    center["BaseClient"]:::centerNode
    center -->|"uses"| N_raw_auth_auth["Auth"]
    center -->|"uses"| N_raw_auth_basicauth["BasicAuth"]
    center -->|"uses"| N_raw_transport_basetransport["BaseTransport"]
    center -->|"uses"| N_raw_transport_httptransport["HTTPTransport"]
    center -->|"uses"| N_raw_transport_asynchttptransport["AsyncHTTPTransport"]
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_client_py["client.py"]
    center -->|"method"| N_raw_client_baseclient_init[".__init__[]"]
    center -->|"method"| N_raw_client_baseclient_build_request["._build_request[]"]
    center -->|"method"| N_raw_client_baseclient_merge_cookies["._merge_cookies[]"]
    center -->|"inherits"| N_raw_client_client["Client"]
    center -->|"inherits"| N_raw_client_asyncclient["AsyncClient"]
    center -->|"rationale_for"| N_raw_client_rationale_32["Shared implementation for Client and AsyncClient.     Handles auth, redirects, c"]
    center -->|"uses"| N_raw_models_request["Request"]
    center -->|"uses"| N_raw_models_response["Response"]
    center -->|"uses"| N_raw_models_url["URL"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.__init__()_12]] - `method` [EXTRACTED]
- [[._build_request()]] - `method` [EXTRACTED]
- [[._merge_cookies()]] - `method` [EXTRACTED]
- [[AsyncClient]] - `inherits` [EXTRACTED]
- [[AsyncHTTPTransport]] - `uses` [INFERRED]
- [[Auth]] - `uses` [INFERRED]
- [[BaseTransport]] - `uses` [INFERRED]
- [[BasicAuth]] - `uses` [INFERRED]
- [[Client]] - `inherits` [EXTRACTED]
- [[Cookies]] - `uses` [INFERRED]
- [[HTTPTransport]] - `uses` [INFERRED]
- [[Headers]] - `uses` [INFERRED]
- [[InvalidURL]] - `uses` [INFERRED]
- [[Request]] - `uses` [INFERRED]
- [[Response]] - `uses` [INFERRED]
- [[Shared implementation for Client and AsyncClient.     Handles auth, redirects, c]] - `rationale_for` [EXTRACTED]
- [[TooManyRedirects]] - `uses` [INFERRED]
- [[URL]] - `uses` [INFERRED]
- [[client.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[BaseClient]]
```

#graphify/code #graphify/INFERRED #community/Community_None