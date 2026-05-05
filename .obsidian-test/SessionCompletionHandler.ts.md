---
source_file: "vendor/claude-mem/src/services/worker/session/SessionCompletionHandler.ts"
type: "code"
community: "Community None"
degree: 12
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SessionCompletionHandler.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 12

## Architecture Graph
```mermaid
graph LR
    center["SessionCompletionHandler.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_sessionmanager_ts["SessionManager.ts"]
    center -->|"imports"| N_worker_sessionmanager_sessionmanager["SessionManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_databasemanager_ts["DatabaseManager.ts"]
    center -->|"imports"| N_worker_databasemanager_databasemanager["DatabaseManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_events_sessioneventbroadcaster_ts["SessionEventBroadcaster.ts"]
    center -->|"imports"| N_events_sessioneventbroadcaster_sessioneventbroadcaster["SessionEventBroadcaster"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_session_generatorexithandler_ts["GeneratorExitHandler.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_session_sessioncompletionhandler_sessioncompletionhandler["SessionCompletionHandler"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[DatabaseManager]] - `imports` [EXTRACTED]
- [[DatabaseManager.ts]] - `imports_from` [EXTRACTED]
- [[GeneratorExitHandler.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[SessionCompletionHandler]] - `contains` [EXTRACTED]
- [[SessionEventBroadcaster]] - `imports` [EXTRACTED]
- [[SessionEventBroadcaster.ts]] - `imports_from` [EXTRACTED]
- [[SessionManager]] - `imports` [EXTRACTED]
- [[SessionManager.ts]] - `imports_from` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SessionCompletionHandler.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None