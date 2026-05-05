---
source_file: "vendor/claude-mem/src/services/worker/http/routes/SessionRoutes.ts"
type: "code"
community: "Community None"
degree: 9
location: "L27"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SessionRoutes

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["SessionRoutes"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    center -->|"method"| N_routes_sessionroutes_sessionroutes_constructor[".constructor[]"]
    center -->|"method"| N_routes_sessionroutes_sessionroutes_getactiveagent[".getActiveAgent[]"]
    center -->|"method"| N_routes_sessionroutes_sessionroutes_getselectedprovider[".getSelectedProvider[]"]
    center -->|"method"| N_routes_sessionroutes_sessionroutes_ensuregeneratorrunning[".ensureGeneratorRunning[]"]
    center -->|"method"| N_routes_sessionroutes_sessionroutes_startgeneratorwithprovider[".startGeneratorWithProvider[]"]
    center -->|"method"| N_routes_sessionroutes_sessionroutes_setuproutes[".setupRoutes[]"]
    center -->|"method"| N_routes_sessionroutes_sessionroutes_applytierrouting[".applyTierRouting[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.applyTierRouting()]] - `method` [EXTRACTED]
- [[.constructor()_22]] - `method` [EXTRACTED]
- [[.ensureGeneratorRunning()]] - `method` [EXTRACTED]
- [[.getActiveAgent()_1]] - `method` [EXTRACTED]
- [[.getSelectedProvider()]] - `method` [EXTRACTED]
- [[.setupRoutes()_5]] - `method` [EXTRACTED]
- [[.startGeneratorWithProvider()]] - `method` [EXTRACTED]
- [[SessionRoutes.ts]] - `contains` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SessionRoutes]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None