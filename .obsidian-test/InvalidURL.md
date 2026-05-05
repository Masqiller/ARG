---
source_file: "vendor/graphify/worked/httpx/raw/exceptions.py"
type: "code"
community: "Community None"
degree: 8
location: "L85"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# InvalidURL

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["InvalidURL"]:::centerNode
    center -->|"inherits"| N_exception["Exception"]
    center -->|"uses"| N_raw_client_timeout["Timeout"]
    center -->|"uses"| N_raw_client_limits["Limits"]
    center -->|"uses"| N_raw_client_baseclient["BaseClient"]
    center -->|"uses"| N_raw_client_client["Client"]
    center -->|"uses"| N_raw_client_asyncclient["AsyncClient"]
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_exceptions_py["exceptions.py"]
    center -->|"rationale_for"| N_raw_exceptions_rationale_86["URL is improperly formed or cannot be parsed."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AsyncClient]] - `uses` [INFERRED]
- [[BaseClient]] - `uses` [INFERRED]
- [[Client]] - `uses` [INFERRED]
- [[Exception]] - `inherits` [EXTRACTED]
- [[Limits]] - `uses` [INFERRED]
- [[Timeout]] - `uses` [INFERRED]
- [[URL is improperly formed or cannot be parsed.]] - `rationale_for` [EXTRACTED]
- [[exceptions.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[InvalidURL]]
```

#graphify/code #graphify/INFERRED #community/Community_None