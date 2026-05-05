---
source_file: "vendor/claude-mem/src/services/worker/http/middleware/validateBody.ts"
type: "code"
community: "Community None"
degree: 15
location: "L5"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# validateBody()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 15

## Architecture Graph
```mermaid
graph LR
    center["validateBody[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_http_middleware_validatebody_ts["validateBody.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_memoryroutes_ts["MemoryRoutes.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_logsroutes_ts["LogsRoutes.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_settingsroutes_ts["SettingsRoutes.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_corpusroutes_ts["CorpusRoutes.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_dataroutes_ts["DataRoutes.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_searchroutes_ts["SearchRoutes.ts"]
    center -->|"calls"| N_routes_memoryroutes_memoryroutes_setuproutes[".setupRoutes[]"]
    center -->|"calls"| N_routes_logsroutes_logsroutes_setuproutes[".setupRoutes[]"]
    center -->|"calls"| N_routes_settingsroutes_settingsroutes_setuproutes[".setupRoutes[]"]
    center -->|"calls"| N_routes_sessionroutes_sessionroutes_setuproutes[".setupRoutes[]"]
    center -->|"calls"| N_routes_corpusroutes_corpusroutes_setuproutes[".setupRoutes[]"]
    center -->|"calls"| N_routes_dataroutes_dataroutes_setuproutes[".setupRoutes[]"]
    center -->|"calls"| N_routes_searchroutes_searchroutes_setuproutes[".setupRoutes[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.setupRoutes()_1]] - `calls` [INFERRED]
- [[.setupRoutes()_3]] - `calls` [INFERRED]
- [[.setupRoutes()_4]] - `calls` [INFERRED]
- [[.setupRoutes()_5]] - `calls` [INFERRED]
- [[.setupRoutes()_6]] - `calls` [INFERRED]
- [[.setupRoutes()_7]] - `calls` [INFERRED]
- [[.setupRoutes()_8]] - `calls` [INFERRED]
- [[CorpusRoutes.ts]] - `imports` [EXTRACTED]
- [[DataRoutes.ts]] - `imports` [EXTRACTED]
- [[LogsRoutes.ts]] - `imports` [EXTRACTED]
- [[MemoryRoutes.ts]] - `imports` [EXTRACTED]
- [[SearchRoutes.ts]] - `imports` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports` [EXTRACTED]
- [[SettingsRoutes.ts]] - `imports` [EXTRACTED]
- [[validateBody.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[validateBody()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None