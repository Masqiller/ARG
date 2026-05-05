---
source_file: "vendor/claude-mem/src/shared/paths.ts"
type: "code"
community: "Community None"
degree: 12
location: "L110"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getPackageRoot()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 12

## Architecture Graph
```mermaid
graph LR
    center["getPackageRoot[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"calls"| N_shared_paths_getpackagecommandsdir["getPackageCommandsDir[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_middleware_ts["middleware.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_viewerroutes_ts["ViewerRoutes.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_settingsroutes_ts["SettingsRoutes.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_dataroutes_ts["DataRoutes.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_domain_modemanager_ts["ModeManager.ts"]
    center -->|"calls"| N_http_middleware_createmiddleware["createMiddleware[]"]
    center -->|"calls"| N_routes_viewerroutes_viewerroutes_setuproutes[".setupRoutes[]"]
    center -->|"calls"| N_routes_settingsroutes_settingsroutes_ismcpenabled[".isMcpEnabled[]"]
    center -->|"calls"| N_routes_settingsroutes_settingsroutes_togglemcp[".toggleMcp[]"]
    center -->|"calls"| N_domain_modemanager_modemanager_constructor[".constructor[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_34]] - `calls` [INFERRED]
- [[.isMcpEnabled()]] - `calls` [INFERRED]
- [[.setupRoutes()_2]] - `calls` [INFERRED]
- [[.toggleMcp()]] - `calls` [INFERRED]
- [[DataRoutes.ts]] - `imports` [EXTRACTED]
- [[ModeManager.ts]] - `imports` [EXTRACTED]
- [[SettingsRoutes.ts]] - `imports` [EXTRACTED]
- [[ViewerRoutes.ts]] - `imports` [EXTRACTED]
- [[createMiddleware()]] - `calls` [INFERRED]
- [[getPackageCommandsDir()]] - `calls` [EXTRACTED]
- [[middleware.ts]] - `imports` [EXTRACTED]
- [[paths.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getPackageRoot()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None