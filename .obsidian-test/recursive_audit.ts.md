---
source_file: "scripts/recursive_audit.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# recursive_audit.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["recursive_audit.ts"]:::centerNode
    center -->|"imports"| N_src_vibe_router_viberouter["VibeRouter"]
    center -->|"imports"| N_src_arg_brain_argbrain["ARGBrain"]
    center -->|"contains"| N_scripts_recursive_audit_runrecursiveaudit["runRecursiveAudit[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ARGBrain]] - `imports` [EXTRACTED]
- [[VibeRouter]] - `imports` [EXTRACTED]
- [[runRecursiveAudit()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[recursive_audit.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None