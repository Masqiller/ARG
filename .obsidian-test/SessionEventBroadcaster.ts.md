---
source_file: "vendor/claude-mem/src/services/worker/events/SessionEventBroadcaster.ts"
type: "code"
community: "Community None"
degree: 8
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SessionEventBroadcaster.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["SessionEventBroadcaster.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports"| N_services_worker_service_workerservice["WorkerService"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_ssebroadcaster_ts["SSEBroadcaster.ts"]
    center -->|"imports"| N_worker_ssebroadcaster_ssebroadcaster["SSEBroadcaster"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_shared_ts["shared.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    center -->|"contains"| N_events_sessioneventbroadcaster_sessioneventbroadcaster["SessionEventBroadcaster"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_session_sessioncompletionhandler_ts["SessionCompletionHandler.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[SSEBroadcaster]] - `imports` [EXTRACTED]
- [[SSEBroadcaster.ts]] - `imports_from` [EXTRACTED]
- [[SessionCompletionHandler.ts]] - `imports_from` [EXTRACTED]
- [[SessionEventBroadcaster]] - `contains` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports_from` [EXTRACTED]
- [[WorkerService]] - `imports` [EXTRACTED]
- [[shared.ts]] - `imports_from` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SessionEventBroadcaster.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None