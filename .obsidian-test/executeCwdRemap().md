---
source_file: "vendor/claude-mem/src/services/infrastructure/ProcessManager.ts"
type: "code"
community: "Community None"
degree: 3
location: "L326"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# executeCwdRemap()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["executeCwdRemap[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_processmanager_ts["ProcessManager.ts"]
    center -->|"calls"| N_infrastructure_processmanager_classifycwdforremap["classifyCwdForRemap[]"]
    center -->|"calls"| N_infrastructure_processmanager_runonetimecwdremap["runOneTimeCwdRemap[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ProcessManager.ts]] - `contains` [EXTRACTED]
- [[classifyCwdForRemap()]] - `calls` [EXTRACTED]
- [[runOneTimeCwdRemap()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[executeCwdRemap()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None