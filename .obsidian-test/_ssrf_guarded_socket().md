---
source_file: "vendor/graphify/graphify/security.py"
type: "code"
community: "Community None"
degree: 3
location: "L71"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _ssrf_guarded_socket()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_ssrf_guarded_socket[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_security_py["security.py"]
    center -->|"calls"| N_graphify_security_safe_fetch["safe_fetch[]"]
    center -->|"rationale_for"| N_graphify_security_rationale_72["Patch socket.getaddrinfo for the duration of a fetch to catch DNS rebinding."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Patch socket.getaddrinfo for the duration of a fetch to catch DNS rebinding.]] - `rationale_for` [EXTRACTED]
- [[safe_fetch()]] - `calls` [EXTRACTED]
- [[security.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_ssrf_guarded_socket()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None