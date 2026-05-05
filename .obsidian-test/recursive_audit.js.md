---
source_file: "scripts/recursive_audit.js"
type: "code"
community: "Community None"
degree: 1
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# recursive_audit.js

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["recursive_audit.js"]:::centerNode
    center -->|"contains"| N_scripts_recursive_audit_runrecursiveaudit["runRecursiveAudit[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[runRecursiveAudit()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[recursive_audit.js]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None