---
source_file: "vendor/claude-mem/src/services/worker/session/SessionCompletionHandler.ts"
type: "code"
community: "Community None"
degree: 7
location: "L7"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SessionCompletionHandler

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["SessionCompletionHandler"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_session_generatorexithandler_ts["GeneratorExitHandler.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_session_sessioncompletionhandler_ts["SessionCompletionHandler.ts"]
    center -->|"method"| N_session_sessioncompletionhandler_sessioncompletionhandler_constructor[".constructor[]"]
    center -->|"method"| N_session_sessioncompletionhandler_sessioncompletionhandler_finalizesession[".finalizeSession[]"]
    center -->|"method"| N_session_sessioncompletionhandler_sessioncompletionhandler_completebydbid[".completeByDbId[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.completeByDbId()]] - `method` [EXTRACTED]
- [[.constructor()_30]] - `method` [EXTRACTED]
- [[.finalizeSession()]] - `method` [EXTRACTED]
- [[GeneratorExitHandler.ts]] - `imports` [EXTRACTED]
- [[SessionCompletionHandler.ts]] - `contains` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SessionCompletionHandler]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None