---
source_file: "vendor/claude-mem/src/services/worker/http/routes/LogsRoutes.ts"
type: "code"
community: "Community None"
degree: 5
location: "L74"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# LogsRoutes

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["LogsRoutes"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_http_routes_logsroutes_ts["LogsRoutes.ts"]
    center -->|"method"| N_routes_logsroutes_logsroutes_getlogfilepath[".getLogFilePath[]"]
    center -->|"method"| N_routes_logsroutes_logsroutes_getlogsdir[".getLogsDir[]"]
    center -->|"method"| N_routes_logsroutes_logsroutes_setuproutes[".setupRoutes[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.getLogFilePath()]] - `method` [EXTRACTED]
- [[.getLogsDir()]] - `method` [EXTRACTED]
- [[.setupRoutes()_3]] - `method` [EXTRACTED]
- [[LogsRoutes.ts]] - `contains` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[LogsRoutes]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None