---
source_file: "vendor/claude-mem/src/services/worker/OpenRouterProvider.ts"
type: "code"
community: "Community None"
degree: 8
location: "L539"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# isOpenRouterAvailable()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["isOpenRouterAvailable[]"]:::centerNode
    center -->|"calls"| N_shared_envmanager_getcredential["getCredential[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"calls"| N_services_worker_service_workerservice_getactiveagent[".getActiveAgent[]"]
    center -->|"calls"| N_services_worker_service_workerservice_runfallbackforterminatedsession[".runFallbackForTerminatedSession[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_openrouterprovider_ts["OpenRouterProvider.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    center -->|"calls"| N_routes_sessionroutes_sessionroutes_getactiveagent[".getActiveAgent[]"]
    center -->|"calls"| N_routes_sessionroutes_sessionroutes_getselectedprovider[".getSelectedProvider[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.getActiveAgent()]] - `calls` [INFERRED]
- [[.getActiveAgent()_1]] - `calls` [INFERRED]
- [[.getSelectedProvider()]] - `calls` [INFERRED]
- [[.runFallbackForTerminatedSession()]] - `calls` [INFERRED]
- [[OpenRouterProvider.ts]] - `contains` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports` [EXTRACTED]
- [[getCredential()]] - `calls` [INFERRED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isOpenRouterAvailable()]]
```

#graphify/code #graphify/INFERRED #community/Community_None