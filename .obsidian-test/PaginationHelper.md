---
source_file: "vendor/claude-mem/src/services/worker/PaginationHelper.ts"
type: "code"
community: "Community None"
degree: 11
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# PaginationHelper

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 11

## Architecture Graph
```mermaid
graph LR
    center["PaginationHelper"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_paginationhelper_ts["PaginationHelper.ts"]
    center -->|"method"| N_worker_paginationhelper_paginationhelper_constructor[".constructor[]"]
    center -->|"method"| N_worker_paginationhelper_paginationhelper_stripprojectpath[".stripProjectPath[]"]
    center -->|"method"| N_worker_paginationhelper_paginationhelper_stripprojectpaths[".stripProjectPaths[]"]
    center -->|"method"| N_worker_paginationhelper_paginationhelper_sanitizeobservation[".sanitizeObservation[]"]
    center -->|"method"| N_worker_paginationhelper_paginationhelper_getobservations[".getObservations[]"]
    center -->|"method"| N_worker_paginationhelper_paginationhelper_getsummaries[".getSummaries[]"]
    center -->|"method"| N_worker_paginationhelper_paginationhelper_getprompts[".getPrompts[]"]
    center -->|"method"| N_worker_paginationhelper_paginationhelper_paginate[".paginate[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_dataroutes_ts["DataRoutes.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_7]] - `method` [EXTRACTED]
- [[.getObservations()]] - `method` [EXTRACTED]
- [[.getPrompts()]] - `method` [EXTRACTED]
- [[.getSummaries()]] - `method` [EXTRACTED]
- [[.paginate()]] - `method` [EXTRACTED]
- [[.sanitizeObservation()]] - `method` [EXTRACTED]
- [[.stripProjectPath()]] - `method` [EXTRACTED]
- [[.stripProjectPaths()]] - `method` [EXTRACTED]
- [[DataRoutes.ts]] - `imports` [EXTRACTED]
- [[PaginationHelper.ts]] - `contains` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[PaginationHelper]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None