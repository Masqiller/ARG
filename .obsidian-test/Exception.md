---
source_file: ""
type: "code"
community: "Community None"
degree: 4
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Exception

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["Exception"]:::centerNode
    center -->|"inherits"| N_raw_validator_validationerror["ValidationError"]
    center -->|"inherits"| N_raw_exceptions_httperror["HTTPError"]
    center -->|"inherits"| N_raw_exceptions_invalidurl["InvalidURL"]
    center -->|"inherits"| N_raw_exceptions_cookieconflict["CookieConflict"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CookieConflict]] - `inherits` [EXTRACTED]
- [[HTTPError]] - `inherits` [EXTRACTED]
- [[InvalidURL]] - `inherits` [EXTRACTED]
- [[ValidationError]] - `inherits` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Exception]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None