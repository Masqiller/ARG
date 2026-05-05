---
source_file: "vendor/claude-mem/src/services/infrastructure/ProcessManager.ts"
type: "code"
community: "Community None"
degree: 3
location: "L77"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# resolveWorkerRuntimePathUncached()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["resolveWorkerRuntimePathUncached[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_processmanager_ts["ProcessManager.ts"]
    center -->|"calls"| N_infrastructure_processmanager_isbunexecutablepath["isBunExecutablePath[]"]
    center -->|"calls"| N_infrastructure_processmanager_resolveworkerruntimepath["resolveWorkerRuntimePath[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ProcessManager.ts]] - `contains` [EXTRACTED]
- [[isBunExecutablePath()]] - `calls` [EXTRACTED]
- [[resolveWorkerRuntimePath()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[resolveWorkerRuntimePathUncached()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None