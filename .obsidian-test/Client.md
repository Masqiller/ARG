---
source_file: "vendor/graphify/worked/httpx/raw/client.py"
type: "code"
community: "Community None"
degree: 27
location: "L70"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Client

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 27

## Architecture Graph
```mermaid
graph LR
    center["Client"]:::centerNode
    center -->|"uses"| N_raw_auth_auth["Auth"]
    center -->|"uses"| N_raw_auth_basicauth["BasicAuth"]
    center -->|"uses"| N_raw_transport_basetransport["BaseTransport"]
    center -->|"uses"| N_raw_transport_httptransport["HTTPTransport"]
    center -->|"uses"| N_raw_transport_asynchttptransport["AsyncHTTPTransport"]
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_client_py["client.py"]
    center -->|"inherits"| N_raw_client_baseclient["BaseClient"]
    center -->|"method"| N_raw_client_client_init[".__init__[]"]
    center -->|"method"| N_raw_client_client_request[".request[]"]
    center -->|"method"| N_raw_client_client_get[".get[]"]
    center -->|"method"| N_raw_client_client_post[".post[]"]
    center -->|"method"| N_raw_client_client_put[".put[]"]
    center -->|"method"| N_raw_client_client_patch[".patch[]"]
    center -->|"method"| N_raw_client_client_delete[".delete[]"]
    center -->|"method"| N_raw_client_client_head[".head[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.__enter__()]] - `method` [EXTRACTED]
- [[.__exit__()]] - `method` [EXTRACTED]
- [[.__init__()_13]] - `method` [EXTRACTED]
- [[.close()_4]] - `method` [EXTRACTED]
- [[.delete()]] - `method` [EXTRACTED]
- [[.get()_3]] - `method` [EXTRACTED]
- [[.head()]] - `method` [EXTRACTED]
- [[.patch()]] - `method` [EXTRACTED]
- [[.post()_2]] - `method` [EXTRACTED]
- [[.put()]] - `method` [EXTRACTED]
- [[.request()]] - `method` [EXTRACTED]
- [[.send()]] - `method` [EXTRACTED]
- [[AsyncHTTPTransport]] - `uses` [INFERRED]
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
- [[Synchronous HTTP client.]] - `rationale_for` [EXTRACTED]
- [[TooManyRedirects]] - `uses` [INFERRED]
- [[URL]] - `uses` [INFERRED]
- [[client.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Client]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None