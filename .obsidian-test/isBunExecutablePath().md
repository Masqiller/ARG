---
source_file: "vendor/claude-mem/src/services/infrastructure/ProcessManager.ts"
type: "code"
community: "Community None"
degree: 2
location: "L28"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isBunExecutablePath()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["isBunExecutablePath[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_processmanager_ts["ProcessManager.ts"]
    center -->|"calls"| N_infrastructure_processmanager_resolveworkerruntimepathuncached["resolveWorkerRuntimePathUncached[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ProcessManager.ts]] - `contains` [EXTRACTED]
- [[resolveWorkerRuntimePathUncached()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isBunExecutablePath()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None