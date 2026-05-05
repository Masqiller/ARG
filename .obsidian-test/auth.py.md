---
source_file: "vendor/graphify/worked/httpx/raw/auth.py"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# auth.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["auth.py"]:::centerNode
    center -->|"contains"| N_raw_auth_auth["Auth"]
    center -->|"contains"| N_raw_auth_basicauth["BasicAuth"]
    center -->|"contains"| N_raw_auth_bearerauth["BearerAuth"]
    center -->|"contains"| N_raw_auth_digestauth["DigestAuth"]
    center -->|"contains"| N_raw_auth_netrcauth["NetRCAuth"]
    center -->|"rationale_for"| N_raw_auth_rationale_1["Authentication handlers. Auth objects are callables that modify a request before"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Auth]] - `contains` [EXTRACTED]
- [[Authentication handlers. Auth objects are callables that modify a request before]] - `rationale_for` [EXTRACTED]
- [[BasicAuth]] - `contains` [EXTRACTED]
- [[BearerAuth]] - `contains` [EXTRACTED]
- [[DigestAuth]] - `contains` [EXTRACTED]
- [[NetRCAuth]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[auth.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None