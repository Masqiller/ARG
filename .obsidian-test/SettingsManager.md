---
source_file: "vendor/claude-mem/src/services/worker/SettingsManager.ts"
type: "code"
community: "Community None"
degree: 6
location: "L6"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SettingsManager

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["SettingsManager"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_settingsmanager_ts["SettingsManager.ts"]
    center -->|"method"| N_worker_settingsmanager_settingsmanager_constructor[".constructor[]"]
    center -->|"method"| N_worker_settingsmanager_settingsmanager_getsettings[".getSettings[]"]
    center -->|"method"| N_worker_settingsmanager_settingsmanager_updatesettings[".updateSettings[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_settingsroutes_ts["SettingsRoutes.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_12]] - `method` [EXTRACTED]
- [[.getSettings()]] - `method` [EXTRACTED]
- [[.updateSettings()]] - `method` [EXTRACTED]
- [[SettingsManager.ts]] - `contains` [EXTRACTED]
- [[SettingsRoutes.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SettingsManager]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None