---
source_file: "vendor/graphify/worked/httpx/raw/transport.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L90"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# The async variant of HTTPTransport.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["The async variant of HTTPTransport."]:::centerNode
    center -->|"rationale_for"| N_raw_transport_asynchttptransport["AsyncHTTPTransport"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AsyncHTTPTransport]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[The async variant of HTTPTransport.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None