---
source_file: "scripts/recursive_audit.ts"
type: "code"
community: "Community None"
degree: 2
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# runRecursiveAudit()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["runRecursiveAudit[]"]:::centerNode
    center -->|"contains"| N_scripts_recursive_audit_js["recursive_audit.js"]
    center -->|"contains"| N_scripts_recursive_audit_ts["recursive_audit.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[recursive_audit.js]] - `contains` [EXTRACTED]
- [[recursive_audit.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[runRecursiveAudit()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None