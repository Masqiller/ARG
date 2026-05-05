---
source_file: "vendor/claude-mem/src/services/worker/http/routes/MemoryRoutes.ts"
type: "code"
community: "Community None"
degree: 5
location: "L16"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# MemoryRoutes

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["MemoryRoutes"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_http_routes_memory_routes_test_ts["memory-routes.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_http_routes_memoryroutes_ts["MemoryRoutes.ts"]
    center -->|"method"| N_routes_memoryroutes_memoryroutes_constructor[".constructor[]"]
    center -->|"method"| N_routes_memoryroutes_memoryroutes_setuproutes[".setupRoutes[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_19]] - `method` [EXTRACTED]
- [[.setupRoutes()_1]] - `method` [EXTRACTED]
- [[MemoryRoutes.ts]] - `contains` [EXTRACTED]
- [[memory-routes.test.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[MemoryRoutes]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None