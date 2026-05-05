---
source_file: "vendor/graphify/worked/httpx/raw/transport.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L104"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# A transport for testing that returns predefined responses.     Pass a handler fu

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["A transport for testing that returns predefined responses.     Pass a handler fu"]:::centerNode
    center -->|"rationale_for"| N_raw_transport_mocktransport["MockTransport"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[MockTransport]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[A transport for testing that returns predefined responses.     Pass a handler fu]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None