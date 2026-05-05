---
source_file: "vendor/claude-mem/src/services/worker/RestartGuard.ts"
type: "code"
community: "Community None"
degree: 11
location: "L7"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# RestartGuard

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 11

## Architecture Graph
```mermaid
graph LR
    center["RestartGuard"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_types_ts["worker-types.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_sessionmanager_ts["SessionManager.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_restartguard_ts["RestartGuard.ts"]
    center -->|"method"| N_worker_restartguard_restartguard_recordrestart[".recordRestart[]"]
    center -->|"method"| N_worker_restartguard_restartguard_recordsuccess[".recordSuccess[]"]
    center -->|"method"| N_worker_restartguard_restartguard_restartsinwindow[".restartsInWindow[]"]
    center -->|"method"| N_worker_restartguard_restartguard_windowms[".windowMs[]"]
    center -->|"method"| N_worker_restartguard_restartguard_maxrestarts[".maxRestarts[]"]
    center -->|"method"| N_worker_restartguard_restartguard_consecutivefailuressincesuccess[".consecutiveFailuresSinceSuccess[]"]
    center -->|"method"| N_worker_restartguard_restartguard_maxconsecutivefailures[".maxConsecutiveFailures[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_session_generatorexithandler_ts["GeneratorExitHandler.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.consecutiveFailuresSinceSuccess()]] - `method` [EXTRACTED]
- [[.maxConsecutiveFailures()]] - `method` [EXTRACTED]
- [[.maxRestarts()]] - `method` [EXTRACTED]
- [[.recordRestart()]] - `method` [EXTRACTED]
- [[.recordSuccess()]] - `method` [EXTRACTED]
- [[.restartsInWindow()]] - `method` [EXTRACTED]
- [[.windowMs()]] - `method` [EXTRACTED]
- [[GeneratorExitHandler.ts]] - `imports` [EXTRACTED]
- [[RestartGuard.ts]] - `contains` [EXTRACTED]
- [[SessionManager.ts]] - `imports` [EXTRACTED]
- [[worker-types.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[RestartGuard]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None