---
source_file: "vendor/claude-mem/src/services/worker/http/routes/ViewerRoutes.ts"
type: "code"
community: "Community None"
degree: 4
location: "L38"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ViewerRoutes

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["ViewerRoutes"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_http_routes_viewerroutes_ts["ViewerRoutes.ts"]
    center -->|"method"| N_routes_viewerroutes_viewerroutes_constructor[".constructor[]"]
    center -->|"method"| N_routes_viewerroutes_viewerroutes_setuproutes[".setupRoutes[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_20]] - `method` [EXTRACTED]
- [[.setupRoutes()_2]] - `method` [EXTRACTED]
- [[ViewerRoutes.ts]] - `contains` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ViewerRoutes]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None