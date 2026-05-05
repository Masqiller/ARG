---
source_file: "vendor/graphify/worked/httpx/raw/client.py"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# client.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["client.py"]:::centerNode
    center -->|"contains"| N_raw_client_timeout["Timeout"]
    center -->|"contains"| N_raw_client_limits["Limits"]
    center -->|"contains"| N_raw_client_baseclient["BaseClient"]
    center -->|"contains"| N_raw_client_client["Client"]
    center -->|"contains"| N_raw_client_asyncclient["AsyncClient"]
    center -->|"rationale_for"| N_raw_client_rationale_1["The main Client and AsyncClient classes. BaseClient holds all shared logic. Clie"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AsyncClient]] - `contains` [EXTRACTED]
- [[BaseClient]] - `contains` [EXTRACTED]
- [[Client]] - `contains` [EXTRACTED]
- [[Limits]] - `contains` [EXTRACTED]
- [[The main Client and AsyncClient classes. BaseClient holds all shared logic. Clie]] - `rationale_for` [EXTRACTED]
- [[Timeout]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[client.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None