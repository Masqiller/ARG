---
source_file: "vendor/graphify/worked/httpx/raw/transport.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L11"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Sync transport interface.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Sync transport interface."]:::centerNode
    center -->|"rationale_for"| N_raw_transport_basetransport["BaseTransport"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[BaseTransport]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Sync transport interface.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None