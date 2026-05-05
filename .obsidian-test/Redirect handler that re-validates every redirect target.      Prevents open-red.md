---
source_file: "vendor/graphify/graphify/security.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L102"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Redirect handler that re-validates every redirect target.      Prevents open-red

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Redirect handler that re-validates every redirect target.      Prevents open-red"]:::centerNode
    center -->|"rationale_for"| N_graphify_security_nofileredirecthandler["_NoFileRedirectHandler"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_NoFileRedirectHandler]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Redirect handler that re-validates every redirect target.      Prevents open-red]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None