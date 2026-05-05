---
source_file: "vendor/graphify/graphify/security.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L229"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Strip control characters and cap length.      Safe for embedding in JSON data (i

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Strip control characters and cap length.      Safe for embedding in JSON data [i"]:::centerNode
    center -->|"rationale_for"| N_graphify_security_sanitize_label["sanitize_label[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[sanitize_label()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Strip control characters and cap length.      Safe for embedding in JSON data (i]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None