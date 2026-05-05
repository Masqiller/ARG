---
source_file: "vendor/claude-mem/src/services/infrastructure/WorktreeAdoption.ts"
type: "code"
community: "Community None"
degree: 2
location: "L32"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# DryRunRollback

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["DryRunRollback"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_worktreeadoption_ts["WorktreeAdoption.ts"]
    center -->|"method"| N_infrastructure_worktreeadoption_dryrunrollback_constructor[".constructor[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_44]] - `method` [EXTRACTED]
- [[WorktreeAdoption.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[DryRunRollback]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None