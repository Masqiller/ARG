---
source_file: "vendor/claude-mem/src/services/worker/SettingsManager.ts"
type: "code"
community: "Community None"
degree: 8
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SettingsManager.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["SettingsManager.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_types_ts["worker-types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_databasemanager_ts["DatabaseManager.ts"]
    center -->|"imports"| N_worker_databasemanager_databasemanager["DatabaseManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_worker_settingsmanager_settingsmanager["SettingsManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_settingsroutes_ts["SettingsRoutes.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[DatabaseManager]] - `imports` [EXTRACTED]
- [[DatabaseManager.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[SettingsManager]] - `contains` [EXTRACTED]
- [[SettingsRoutes.ts]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]
- [[worker-types.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SettingsManager.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None