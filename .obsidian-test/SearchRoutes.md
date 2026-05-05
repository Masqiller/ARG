---
source_file: "vendor/claude-mem/src/services/worker/http/routes/SearchRoutes.ts"
type: "code"
community: "Community None"
degree: 5
location: "L95"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SearchRoutes

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["SearchRoutes"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_http_routes_search_routes_welcome_hint_test_ts["search-routes-welcome-hint.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_http_routes_searchroutes_ts["SearchRoutes.ts"]
    center -->|"method"| N_routes_searchroutes_searchroutes_constructor[".constructor[]"]
    center -->|"method"| N_routes_searchroutes_searchroutes_setuproutes[".setupRoutes[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_25]] - `method` [EXTRACTED]
- [[.setupRoutes()_8]] - `method` [EXTRACTED]
- [[SearchRoutes.ts]] - `contains` [EXTRACTED]
- [[search-routes-welcome-hint.test.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SearchRoutes]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None