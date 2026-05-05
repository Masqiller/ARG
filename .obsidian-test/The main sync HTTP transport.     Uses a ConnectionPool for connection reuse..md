---
source_file: "vendor/graphify/worked/httpx/raw/transport.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L60"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# The main sync HTTP transport.     Uses a ConnectionPool for connection reuse.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["The main sync HTTP transport.     Uses a ConnectionPool for connection reuse."]:::centerNode
    center -->|"rationale_for"| N_raw_transport_httptransport["HTTPTransport"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[HTTPTransport]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[The main sync HTTP transport.     Uses a ConnectionPool for connection reuse.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None