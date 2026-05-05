---
source_file: "vendor/graphify/worked/httpx/raw/exceptions.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L15"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# An error occurred while issuing a request.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["An error occurred while issuing a request."]:::centerNode
    center -->|"rationale_for"| N_raw_exceptions_requesterror["RequestError"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[RequestError]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[An error occurred while issuing a request.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None