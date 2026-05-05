---
source_file: "vendor/claude-mem/src/services/worker/SSEBroadcaster.ts"
type: "code"
community: "Community None"
degree: 10
location: "L6"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SSEBroadcaster

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["SSEBroadcaster"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_ssebroadcaster_ts["SSEBroadcaster.ts"]
    center -->|"method"| N_worker_ssebroadcaster_ssebroadcaster_addclient[".addClient[]"]
    center -->|"method"| N_worker_ssebroadcaster_ssebroadcaster_removeclient[".removeClient[]"]
    center -->|"method"| N_worker_ssebroadcaster_ssebroadcaster_broadcast[".broadcast[]"]
    center -->|"method"| N_worker_ssebroadcaster_ssebroadcaster_getclientcount[".getClientCount[]"]
    center -->|"method"| N_worker_ssebroadcaster_ssebroadcaster_sendtoclient[".sendToClient[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_viewerroutes_ts["ViewerRoutes.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_dataroutes_ts["DataRoutes.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_events_sessioneventbroadcaster_ts["SessionEventBroadcaster.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.addClient()]] - `method` [EXTRACTED]
- [[.broadcast()]] - `method` [EXTRACTED]
- [[.getClientCount()]] - `method` [EXTRACTED]
- [[.removeClient()]] - `method` [EXTRACTED]
- [[.sendToClient()]] - `method` [EXTRACTED]
- [[DataRoutes.ts]] - `imports` [EXTRACTED]
- [[SSEBroadcaster.ts]] - `contains` [EXTRACTED]
- [[SessionEventBroadcaster.ts]] - `imports` [EXTRACTED]
- [[ViewerRoutes.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SSEBroadcaster]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None