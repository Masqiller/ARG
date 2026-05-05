---
source_file: "vendor/graphify/graphify/security.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L28"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Raise ValueError if *url* is not http or https, or targets a private/internal IP

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Raise ValueError if *url* is not http or https, or targets a private/internal IP"]:::centerNode
    center -->|"rationale_for"| N_graphify_security_validate_url["validate_url[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[validate_url()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Raise ValueError if url is not http or https, or targets a privateinternal IP]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None