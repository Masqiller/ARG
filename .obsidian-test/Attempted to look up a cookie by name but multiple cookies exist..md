---
source_file: "vendor/graphify/worked/httpx/raw/exceptions.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L90"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Attempted to look up a cookie by name but multiple cookies exist.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Attempted to look up a cookie by name but multiple cookies exist."]:::centerNode
    center -->|"rationale_for"| N_raw_exceptions_cookieconflict["CookieConflict"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CookieConflict]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Attempted to look up a cookie by name but multiple cookies exist.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None