---
source_file: "vendor/claude-mem/src/services/worker/OpenRouterProvider.ts"
type: "code"
community: "Community None"
degree: 6
location: "L545"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isOpenRouterSelected()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["isOpenRouterSelected[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"calls"| N_services_worker_service_workerservice_getactiveagent[".getActiveAgent[]"]
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
- [[OpenRouterProvider.ts]] - `contains` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isOpenRouterSelected()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None