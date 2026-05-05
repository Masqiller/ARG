---
source_file: "vendor/claude-mem/src/services/worker/RestartGuard.ts"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# RestartGuard.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["RestartGuard.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_types_ts["worker-types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_sessionmanager_ts["SessionManager.ts"]
    center -->|"contains"| N_worker_restartguard_restartguard["RestartGuard"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_session_generatorexithandler_ts["GeneratorExitHandler.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[GeneratorExitHandler.ts]] - `imports_from` [EXTRACTED]
- [[RestartGuard]] - `contains` [EXTRACTED]
- [[SessionManager.ts]] - `imports_from` [EXTRACTED]
- [[worker-types.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[RestartGuard.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None