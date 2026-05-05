---
source_file: "vendor/claude-mem/src/services/worker/events/SessionEventBroadcaster.ts"
type: "code"
community: "Community None"
degree: 11
location: "L5"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SessionEventBroadcaster

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 11

## Architecture Graph
```mermaid
graph LR
    center["SessionEventBroadcaster"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_shared_ts["shared.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_events_sessioneventbroadcaster_ts["SessionEventBroadcaster.ts"]
    center -->|"method"| N_events_sessioneventbroadcaster_sessioneventbroadcaster_constructor[".constructor[]"]
    center -->|"method"| N_events_sessioneventbroadcaster_sessioneventbroadcaster_broadcastnewprompt[".broadcastNewPrompt[]"]
    center -->|"method"| N_events_sessioneventbroadcaster_sessioneventbroadcaster_broadcastsessionstarted[".broadcastSessionStarted[]"]
    center -->|"method"| N_events_sessioneventbroadcaster_sessioneventbroadcaster_broadcastobservationqueued[".broadcastObservationQueued[]"]
    center -->|"method"| N_events_sessioneventbroadcaster_sessioneventbroadcaster_broadcastsessioncompleted[".broadcastSessionCompleted[]"]
    center -->|"method"| N_events_sessioneventbroadcaster_sessioneventbroadcaster_broadcastsummarizequeued[".broadcastSummarizeQueued[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_session_sessioncompletionhandler_ts["SessionCompletionHandler.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.broadcastNewPrompt()]] - `method` [EXTRACTED]
- [[.broadcastObservationQueued()]] - `method` [EXTRACTED]
- [[.broadcastSessionCompleted()]] - `method` [EXTRACTED]
- [[.broadcastSessionStarted()]] - `method` [EXTRACTED]
- [[.broadcastSummarizeQueued()]] - `method` [EXTRACTED]
- [[.constructor()_26]] - `method` [EXTRACTED]
- [[SessionCompletionHandler.ts]] - `imports` [EXTRACTED]
- [[SessionEventBroadcaster.ts]] - `contains` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports` [EXTRACTED]
- [[shared.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SessionEventBroadcaster]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None