---
source_file: "vendor/claude-mem/src/services/worker/http/routes/SettingsRoutes.ts"
type: "code"
community: "Community None"
degree: 8
location: "L29"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SettingsRoutes

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["SettingsRoutes"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_http_routes_settingsroutes_ts["SettingsRoutes.ts"]
    center -->|"method"| N_routes_settingsroutes_settingsroutes_constructor[".constructor[]"]
    center -->|"method"| N_routes_settingsroutes_settingsroutes_setuproutes[".setupRoutes[]"]
    center -->|"method"| N_routes_settingsroutes_settingsroutes_validatesettings[".validateSettings[]"]
    center -->|"method"| N_routes_settingsroutes_settingsroutes_ismcpenabled[".isMcpEnabled[]"]
    center -->|"method"| N_routes_settingsroutes_settingsroutes_togglemcp[".toggleMcp[]"]
    center -->|"method"| N_routes_settingsroutes_settingsroutes_ensuresettingsfile[".ensureSettingsFile[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_21]] - `method` [EXTRACTED]
- [[.ensureSettingsFile()]] - `method` [EXTRACTED]
- [[.isMcpEnabled()]] - `method` [EXTRACTED]
- [[.setupRoutes()_4]] - `method` [EXTRACTED]
- [[.toggleMcp()]] - `method` [EXTRACTED]
- [[.validateSettings()]] - `method` [EXTRACTED]
- [[SettingsRoutes.ts]] - `contains` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SettingsRoutes]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None