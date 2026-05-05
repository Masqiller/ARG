---
source_file: "vendor/claude-mem/src/services/infrastructure/ProcessManager.ts"
type: "code"
community: "Community None"
degree: 4
location: "L296"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# runOneTimeCwdRemap()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["runOneTimeCwdRemap[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"calls"| N_services_worker_service_workerservice_initializebackground[".initializeBackground[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_processmanager_ts["ProcessManager.ts"]
    center -->|"calls"| N_infrastructure_processmanager_executecwdremap["executeCwdRemap[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.initializeBackground()]] - `calls` [INFERRED]
- [[ProcessManager.ts]] - `contains` [EXTRACTED]
- [[executeCwdRemap()]] - `calls` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[runOneTimeCwdRemap()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None