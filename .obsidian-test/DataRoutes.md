---
source_file: "vendor/claude-mem/src/services/worker/http/routes/DataRoutes.ts"
type: "code"
community: "Community None"
degree: 6
location: "L69"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# DataRoutes

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["DataRoutes"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_http_routes_data_routes_coercion_test_ts["data-routes-coercion.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_http_routes_dataroutes_ts["DataRoutes.ts"]
    center -->|"method"| N_routes_dataroutes_dataroutes_constructor[".constructor[]"]
    center -->|"method"| N_routes_dataroutes_dataroutes_setuproutes[".setupRoutes[]"]
    center -->|"method"| N_routes_dataroutes_dataroutes_parsepaginationparams[".parsePaginationParams[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_24]] - `method` [EXTRACTED]
- [[.parsePaginationParams()]] - `method` [EXTRACTED]
- [[.setupRoutes()_7]] - `method` [EXTRACTED]
- [[DataRoutes.ts]] - `contains` [EXTRACTED]
- [[data-routes-coercion.test.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[DataRoutes]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None