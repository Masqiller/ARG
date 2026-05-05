---
source_file: "vendor/graphify/worked/httpx/raw/models.py"
type: "code"
community: "Community None"
degree: 13
location: "L9"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# URL

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["URL"]:::centerNode
    center -->|"uses"| N_raw_client_timeout["Timeout"]
    center -->|"uses"| N_raw_client_limits["Limits"]
    center -->|"uses"| N_raw_client_baseclient["BaseClient"]
    center -->|"calls"| N_raw_client_baseclient_init[".__init__[]"]
    center -->|"uses"| N_raw_client_client["Client"]
    center -->|"uses"| N_raw_client_asyncclient["AsyncClient"]
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_models_py["models.py"]
    center -->|"method"| N_raw_models_url_init[".__init__[]"]
    center -->|"calls"| N_raw_models_url_copy_with[".copy_with[]"]
    center -->|"method"| N_raw_models_url_str[".__str__[]"]
    center -->|"method"| N_raw_models_url_repr[".__repr__[]"]
    center -->|"calls"| N_raw_models_request_init[".__init__[]"]
    center -->|"uses"| N_raw_exceptions_httpstatuserror["HTTPStatusError"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.__init__()_12]] - `calls` [INFERRED]
- [[.__init__()_15]] - `method` [EXTRACTED]
- [[.__init__()_18]] - `calls` [EXTRACTED]
- [[.__repr__()]] - `method` [EXTRACTED]
- [[.__str__()]] - `method` [EXTRACTED]
- [[.copy_with()]] - `calls` [EXTRACTED]
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
FROM [[URL]]
```

#graphify/code #graphify/INFERRED #community/Community_None