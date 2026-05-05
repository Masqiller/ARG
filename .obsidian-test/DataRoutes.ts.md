---
source_file: "vendor/claude-mem/src/services/worker/http/routes/DataRoutes.ts"
type: "code"
community: "Community None"
degree: 31
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# DataRoutes.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 31

## Architecture Graph
```mermaid
graph LR
    center["DataRoutes.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_http_routes_data_routes_coercion_test_ts["data-routes-coercion.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"imports"| N_shared_worker_utils_getworkerport["getWorkerPort[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_platform_source_ts["platform-source.ts"]
    center -->|"imports"| N_shared_platform_source_normalizeplatformsource["normalizePlatformSource[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports"| N_shared_paths_getpackageroot["getPackageRoot[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_uptime_ts["uptime.ts"]
    center -->|"imports"| N_shared_uptime_getuptimeseconds["getUptimeSeconds[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports"| N_services_worker_service_workerservice["WorkerService"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_ssebroadcaster_ts["SSEBroadcaster.ts"]
    center -->|"imports"| N_worker_ssebroadcaster_ssebroadcaster["SSEBroadcaster"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_sessionmanager_ts["SessionManager.ts"]
    center -->|"imports"| N_worker_sessionmanager_sessionmanager["SessionManager"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[BaseRouteHandler.ts]] - `imports_from` [EXTRACTED]
- [[DataRoutes]] - `contains` [EXTRACTED]
- [[DatabaseManager]] - `imports` [EXTRACTED]
- [[DatabaseManager.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[PaginationHelper]] - `imports` [EXTRACTED]
- [[PaginationHelper.ts]] - `imports_from` [EXTRACTED]
- [[SSEBroadcaster]] - `imports` [EXTRACTED]
- [[SSEBroadcaster.ts]] - `imports_from` [EXTRACTED]
- [[SessionManager]] - `imports` [EXTRACTED]
- [[SessionManager.ts]] - `imports_from` [EXTRACTED]
- [[WorkerService]] - `imports` [EXTRACTED]
- [[data-routes-coercion.test.ts]] - `imports_from` [EXTRACTED]
- [[get.ts]] - `imports_from` [EXTRACTED]
- [[getFirstObservationCreatedAt()]] - `imports` [EXTRACTED]
- [[getObservationsByFilePath()]] - `imports` [EXTRACTED]
- [[getPackageRoot()]] - `imports` [EXTRACTED]
- [[getUptimeSeconds()]] - `imports` [EXTRACTED]
- [[getWorkerPort()]] - `imports` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[normalizePlatformSource()]] - `imports` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[platform-source.ts]] - `imports_from` [EXTRACTED]
- [[recent.ts]] - `imports_from` [EXTRACTED]
- [[safeParseJson()]] - `contains` [EXTRACTED]
- [[syncOne()]] - `contains` [EXTRACTED]
- [[uptime.ts]] - `imports_from` [EXTRACTED]
- [[validateBody()]] - `imports` [EXTRACTED]
- [[validateBody.ts]] - `imports_from` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]
- [[worker-utils.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[DataRoutes.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None