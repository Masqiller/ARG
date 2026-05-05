---
source_file: "vendor/graphify/worked/httpx/raw/exceptions.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L39"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Timed out waiting to acquire a connection from the pool.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Timed out waiting to acquire a connection from the pool."]:::centerNode
    center -->|"rationale_for"| N_raw_exceptions_pooltimeout["PoolTimeout"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[PoolTimeout]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Timed out waiting to acquire a connection from the pool.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None