---
source_file: "vendor/graphify/graphify/security.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L72"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Patch socket.getaddrinfo for the duration of a fetch to catch DNS rebinding.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Patch socket.getaddrinfo for the duration of a fetch to catch DNS rebinding."]:::centerNode
    center -->|"rationale_for"| N_graphify_security_ssrf_guarded_socket["_ssrf_guarded_socket[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_ssrf_guarded_socket()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Patch socket.getaddrinfo for the duration of a fetch to catch DNS rebinding.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None