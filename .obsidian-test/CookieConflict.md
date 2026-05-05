---
source_file: "vendor/graphify/worked/httpx/raw/exceptions.py"
type: "code"
community: "Community None"
degree: 3
location: "L89"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# CookieConflict

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["CookieConflict"]:::centerNode
    center -->|"inherits"| N_exception["Exception"]
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_exceptions_py["exceptions.py"]
    center -->|"rationale_for"| N_raw_exceptions_rationale_90["Attempted to look up a cookie by name but multiple cookies exist."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Attempted to look up a cookie by name but multiple cookies exist.]] - `rationale_for` [EXTRACTED]
- [[Exception]] - `inherits` [EXTRACTED]
- [[exceptions.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[CookieConflict]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None