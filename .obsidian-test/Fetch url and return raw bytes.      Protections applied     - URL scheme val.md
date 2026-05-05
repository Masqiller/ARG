---
source_file: "vendor/graphify/graphify/security.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L122"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Fetch *url* and return raw bytes.      Protections applied:     - URL scheme val

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Fetch *url* and return raw bytes.      Protections applied:     - URL scheme val"]:::centerNode
    center -->|"rationale_for"| N_graphify_security_safe_fetch["safe_fetch[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[safe_fetch()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Fetch url and return raw bytes.      Protections applied     - URL scheme val]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None