---
source_file: "vendor/claude-mem/src/services/worker/http/routes/SettingsRoutes.ts"
type: "code"
community: "Community None"
degree: 23
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SettingsRoutes.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 23

## Architecture Graph
```mermaid
graph LR
    center["SettingsRoutes.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"imports"| N_shared_worker_utils_clearportcache["clearPortCache[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports"| N_shared_paths_getpackageroot["getPackageRoot[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_settingsdefaultsmanager_ts["SettingsDefaultsManager.ts"]
    center -->|"imports"| N_shared_settingsdefaultsmanager_settingsdefaultsmanager["SettingsDefaultsManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_branchmanager_ts["BranchManager.ts"]
    center -->|"imports"| N_worker_branchmanager_getbranchinfo["getBranchInfo[]"]
    center -->|"imports"| N_worker_branchmanager_switchbranch["switchBranch[]"]
    center -->|"imports"| N_worker_branchmanager_pullupdates["pullUpdates[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_settingsmanager_ts["SettingsManager.ts"]
    center -->|"imports"| N_worker_settingsmanager_settingsmanager["SettingsManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_baseroutehandler_ts["BaseRouteHandler.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_middleware_validatebody_ts["validateBody.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[BaseRouteHandler.ts]] - `imports_from` [EXTRACTED]
- [[BranchManager.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[ModeManager]] - `imports` [EXTRACTED]
- [[ModeManager.ts]] - `imports_from` [EXTRACTED]
- [[SettingsDefaultsManager]] - `imports` [EXTRACTED]
- [[SettingsDefaultsManager.ts]] - `imports_from` [EXTRACTED]
- [[SettingsManager]] - `imports` [EXTRACTED]
- [[SettingsManager.ts]] - `imports_from` [EXTRACTED]
- [[SettingsRoutes]] - `contains` [EXTRACTED]
- [[clearPortCache()]] - `imports` [EXTRACTED]
- [[flushResponseThen()]] - `imports` [EXTRACTED]
- [[flushResponseThen.ts]] - `imports_from` [EXTRACTED]
- [[getBranchInfo()]] - `imports` [EXTRACTED]
- [[getPackageRoot()]] - `imports` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[pullUpdates()]] - `imports` [EXTRACTED]
- [[switchBranch()]] - `imports` [EXTRACTED]
- [[validateBody()]] - `imports` [EXTRACTED]
- [[validateBody.ts]] - `imports_from` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]
- [[worker-utils.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SettingsRoutes.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None