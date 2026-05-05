---
source_file: "vendor/claude-mem/src/services/infrastructure/ProcessManager.ts"
type: "code"
community: "Community None"
degree: 3
location: "L272"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# classifyCwdForRemap()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["classifyCwdForRemap[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_processmanager_ts["ProcessManager.ts"]
    center -->|"calls"| N_infrastructure_processmanager_gitquery["gitQuery[]"]
    center -->|"calls"| N_infrastructure_processmanager_executecwdremap["executeCwdRemap[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ProcessManager.ts]] - `contains` [EXTRACTED]
- [[executeCwdRemap()]] - `calls` [EXTRACTED]
- [[gitQuery()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[classifyCwdForRemap()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None