---
source_file: "vendor/graphify/worked/httpx/raw/exceptions.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L67"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# A protocol was violated.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["A protocol was violated."]:::centerNode
    center -->|"rationale_for"| N_raw_exceptions_protocolerror["ProtocolError"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ProtocolError]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[A protocol was violated.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None