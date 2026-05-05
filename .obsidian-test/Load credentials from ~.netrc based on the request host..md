---
source_file: "vendor/graphify/worked/httpx/raw/auth.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L101"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Load credentials from ~/.netrc based on the request host.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Load credentials from ~/.netrc based on the request host."]:::centerNode
    center -->|"rationale_for"| N_raw_auth_netrcauth["NetRCAuth"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[NetRCAuth]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Load credentials from ~.netrc based on the request host.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None