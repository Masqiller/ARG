---
source_file: "vendor/claude-mem/src/services/worker/http/middleware/validateBody.ts"
type: "code"
community: "Community None"
degree: 8
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# validateBody.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["validateBody.ts"]:::centerNode
    center -->|"contains"| N_middleware_validatebody_validatebody["validateBody[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_memoryroutes_ts["MemoryRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_logsroutes_ts["LogsRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_settingsroutes_ts["SettingsRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_corpusroutes_ts["CorpusRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_dataroutes_ts["DataRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_searchroutes_ts["SearchRoutes.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CorpusRoutes.ts]] - `imports_from` [EXTRACTED]
- [[DataRoutes.ts]] - `imports_from` [EXTRACTED]
- [[LogsRoutes.ts]] - `imports_from` [EXTRACTED]
- [[MemoryRoutes.ts]] - `imports_from` [EXTRACTED]
- [[SearchRoutes.ts]] - `imports_from` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports_from` [EXTRACTED]
- [[SettingsRoutes.ts]] - `imports_from` [EXTRACTED]
- [[validateBody()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[validateBody.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None