---
source_file: "vendor/graphify/worked/httpx/raw/models.py"
type: "code"
community: "Community None"
degree: 17
location: "L26"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Headers

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 17

## Architecture Graph
```mermaid
graph LR
    center["Headers"]:::centerNode
    center -->|"uses"| N_raw_client_timeout["Timeout"]
    center -->|"uses"| N_raw_client_limits["Limits"]
    center -->|"uses"| N_raw_client_baseclient["BaseClient"]
    center -->|"calls"| N_raw_client_baseclient_init[".__init__[]"]
    center -->|"calls"| N_raw_client_baseclient_build_request["._build_request[]"]
    center -->|"uses"| N_raw_client_client["Client"]
    center -->|"uses"| N_raw_client_asyncclient["AsyncClient"]
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_models_py["models.py"]
    center -->|"method"| N_raw_models_headers_init[".__init__[]"]
    center -->|"method"| N_raw_models_headers_get[".get[]"]
    center -->|"method"| N_raw_models_headers_items[".items[]"]
    center -->|"method"| N_raw_models_headers_setitem[".__setitem__[]"]
    center -->|"method"| N_raw_models_headers_getitem[".__getitem__[]"]
    center -->|"method"| N_raw_models_headers_contains[".__contains__[]"]
    center -->|"calls"| N_raw_models_request_init[".__init__[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.__contains__()]] - `method` [EXTRACTED]
- [[.__getitem__()]] - `method` [EXTRACTED]
- [[.__init__()_12]] - `calls` [INFERRED]
- [[.__init__()_16]] - `method` [EXTRACTED]
- [[.__init__()_18]] - `calls` [EXTRACTED]
- [[.__init__()_19]] - `calls` [EXTRACTED]
- [[.__setitem__()]] - `method` [EXTRACTED]
- [[._build_request()]] - `calls` [INFERRED]
- [[.get()_5]] - `method` [EXTRACTED]
- [[.items()]] - `method` [EXTRACTED]
- [[AsyncClient]] - `uses` [INFERRED]
- [[BaseClient]] - `uses` [INFERRED]
- [[Client]] - `uses` [INFERRED]
- [[HTTPStatusError]] - `uses` [INFERRED]
- [[Limits]] - `uses` [INFERRED]
- [[Timeout]] - `uses` [INFERRED]
- [[models.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Headers]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None