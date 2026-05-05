---
source_file: "vendor/graphify/graphify/export.py"
type: "code"
community: "Community None"
degree: 3
location: "L428"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _cypher_escape()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_cypher_escape[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_export_py["export.py"]
    center -->|"calls"| N_graphify_export_to_cypher["to_cypher[]"]
    center -->|"rationale_for"| N_graphify_export_rationale_429["Escape a string for safe embedding in a Cypher single-quoted literal."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Escape a string for safe embedding in a Cypher single-quoted literal.]] - `rationale_for` [EXTRACTED]
- [[export.py]] - `contains` [EXTRACTED]
- [[to_cypher()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_cypher_escape()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None