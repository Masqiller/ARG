---
source_file: "vendor/graphify/worked/httpx/raw/client.py"
type: "code"
community: "Community None"
degree: 26
location: "L123"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# AsyncClient

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 26

## Architecture Graph
```mermaid
graph LR
    center["AsyncClient"]:::centerNode
    center -->|"uses"| N_raw_auth_auth["Auth"]
    center -->|"uses"| N_raw_auth_basicauth["BasicAuth"]
    center -->|"uses"| N_raw_transport_basetransport["BaseTransport"]
    center -->|"uses"| N_raw_transport_httptransport["HTTPTransport"]
    center -->|"uses"| N_raw_transport_asynchttptransport["AsyncHTTPTransport"]
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_client_py["client.py"]
    center -->|"inherits"| N_raw_client_baseclient["BaseClient"]
    center -->|"method"| N_raw_client_asyncclient_init[".__init__[]"]
    center -->|"method"| N_raw_client_asyncclient_request[".request[]"]
    center -->|"method"| N_raw_client_asyncclient_get[".get[]"]
    center -->|"method"| N_raw_client_asyncclient_post[".post[]"]
    center -->|"method"| N_raw_client_asyncclient_put[".put[]"]
    center -->|"method"| N_raw_client_asyncclient_patch[".patch[]"]
    center -->|"method"| N_raw_client_asyncclient_delete[".delete[]"]
    center -->|"method"| N_raw_client_asyncclient_send[".send[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.__aenter__()]] - `method` [EXTRACTED]
- [[.__aexit__()]] - `method` [EXTRACTED]
- [[.__init__()_14]] - `method` [EXTRACTED]
- [[.aclose()_2]] - `method` [EXTRACTED]
- [[.delete()_1]] - `method` [EXTRACTED]
- [[.get()_4]] - `method` [EXTRACTED]
- [[.patch()_1]] - `method` [EXTRACTED]
- [[.post()_3]] - `method` [EXTRACTED]
- [[.put()_1]] - `method` [EXTRACTED]
- [[.request()_1]] - `method` [EXTRACTED]
- [[.send()_1]] - `method` [EXTRACTED]
- [[AsyncHTTPTransport]] - `uses` [INFERRED]
- [[Asynchronous HTTP client.]] - `rationale_for` [EXTRACTED]
- [[Auth]] - `uses` [INFERRED]
- [[BaseClient]] - `inherits` [EXTRACTED]
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
FROM [[AsyncClient]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None