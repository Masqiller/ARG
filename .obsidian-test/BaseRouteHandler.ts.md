---
source_file: "vendor/claude-mem/src/services/worker/http/BaseRouteHandler.ts"
type: "code"
community: "Community None"
degree: 18
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# BaseRouteHandler.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 18

## Architecture Graph
```mermaid
graph LR
    center["BaseRouteHandler.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_server_errorhandler_ts["ErrorHandler.ts"]
    center -->|"imports"| N_server_errorhandler_apperror["AppError"]
    center -->|"contains"| N_http_baseroutehandler_wraphandler["wrapHandler[]"]
    center -->|"contains"| N_http_baseroutehandler_parseintparam["parseIntParam[]"]
    center -->|"contains"| N_http_baseroutehandler_badrequest["badRequest[]"]
    center -->|"contains"| N_http_baseroutehandler_notfound["notFound[]"]
    center -->|"contains"| N_http_baseroutehandler_handleerror["handleError[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_chromaroutes_ts["ChromaRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_memoryroutes_ts["MemoryRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_viewerroutes_ts["ViewerRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_logsroutes_ts["LogsRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_settingsroutes_ts["SettingsRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AppError]] - `imports` [EXTRACTED]
- [[ChromaRoutes.ts]] - `imports_from` [EXTRACTED]
- [[CorpusRoutes.ts]] - `imports_from` [EXTRACTED]
- [[DataRoutes.ts]] - `imports_from` [EXTRACTED]
- [[ErrorHandler.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[LogsRoutes.ts]] - `imports_from` [EXTRACTED]
- [[MemoryRoutes.ts]] - `imports_from` [EXTRACTED]
- [[SearchRoutes.ts]] - `imports_from` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports_from` [EXTRACTED]
- [[SettingsRoutes.ts]] - `imports_from` [EXTRACTED]
- [[ViewerRoutes.ts]] - `imports_from` [EXTRACTED]
- [[badRequest()]] - `contains` [EXTRACTED]
- [[handleError()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[notFound()]] - `contains` [EXTRACTED]
- [[parseIntParam()]] - `contains` [EXTRACTED]
- [[wrapHandler()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[BaseRouteHandler.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None