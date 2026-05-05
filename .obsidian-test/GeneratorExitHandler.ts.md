---
source_file: "vendor/claude-mem/src/services/worker/session/GeneratorExitHandler.ts"
type: "code"
community: "Community None"
degree: 15
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# GeneratorExitHandler.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 15

## Architecture Graph
```mermaid
graph LR
    center["GeneratorExitHandler.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_types_ts["worker-types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_sessionmanager_ts["SessionManager.ts"]
    center -->|"imports"| N_worker_sessionmanager_sessionmanager["SessionManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_restartguard_ts["RestartGuard.ts"]
    center -->|"imports"| N_worker_restartguard_restartguard["RestartGuard"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_session_sessioncompletionhandler_ts["SessionCompletionHandler.ts"]
    center -->|"imports"| N_session_sessioncompletionhandler_sessioncompletionhandler["SessionCompletionHandler"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_process_registry_ts["process-registry.ts"]
    center -->|"imports"| N_supervisor_process_registry_getsdkprocessforsession["getSdkProcessForSession[]"]
    center -->|"imports"| N_supervisor_process_registry_ensuresdkprocessexit["ensureSdkProcessExit[]"]
    center -->|"contains"| N_session_generatorexithandler_handlegeneratorexit["handleGeneratorExit[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[RestartGuard]] - `imports` [EXTRACTED]
- [[RestartGuard.ts]] - `imports_from` [EXTRACTED]
- [[SessionCompletionHandler]] - `imports` [EXTRACTED]
- [[SessionCompletionHandler.ts]] - `imports_from` [EXTRACTED]
- [[SessionManager]] - `imports` [EXTRACTED]
- [[SessionManager.ts]] - `imports_from` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports_from` [EXTRACTED]
- [[ensureSdkProcessExit()]] - `imports` [EXTRACTED]
- [[getSdkProcessForSession()]] - `imports` [EXTRACTED]
- [[handleGeneratorExit()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[process-registry.ts]] - `imports_from` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]
- [[worker-types.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[GeneratorExitHandler.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None