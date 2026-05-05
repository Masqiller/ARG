---
source_file: "vendor/graphify/worked/httpx/raw/models.py"
type: "code"
community: "Community None"
degree: 15
location: "L48"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Cookies

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 15

## Architecture Graph
```mermaid
graph LR
    center["Cookies"]:::centerNode
    center -->|"uses"| N_raw_client_timeout["Timeout"]
    center -->|"uses"| N_raw_client_limits["Limits"]
    center -->|"uses"| N_raw_client_baseclient["BaseClient"]
    center -->|"calls"| N_raw_client_baseclient_init[".__init__[]"]
    center -->|"uses"| N_raw_client_client["Client"]
    center -->|"uses"| N_raw_client_asyncclient["AsyncClient"]
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_models_py["models.py"]
    center -->|"method"| N_raw_models_cookies_init[".__init__[]"]
    center -->|"calls"| N_raw_models_cookies_set[".set[]"]
    center -->|"calls"| N_raw_models_cookies_get[".get[]"]
    center -->|"method"| N_raw_models_cookies_delete[".delete[]"]
    center -->|"method"| N_raw_models_cookies_clear[".clear[]"]
    center -->|"method"| N_raw_models_cookies_items[".items[]"]
    center -->|"calls"| N_raw_models_request_init[".__init__[]"]
    center -->|"uses"| N_raw_exceptions_httpstatuserror["HTTPStatusError"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.__init__()_12]] - `calls` [INFERRED]
- [[.__init__()_17]] - `method` [EXTRACTED]
- [[.__init__()_18]] - `calls` [EXTRACTED]
- [[.clear()]] - `method` [EXTRACTED]
- [[.delete()_2]] - `method` [EXTRACTED]
- [[.get()_6]] - `calls` [EXTRACTED]
- [[.items()_1]] - `method` [EXTRACTED]
- [[.set()]] - `calls` [EXTRACTED]
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
FROM [[Cookies]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None