---
source_file: "vendor/claude-mem/src/services/worker/BranchManager.ts"
type: "code"
community: "Community None"
degree: 10
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# BranchManager.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["BranchManager.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_worker_branchmanager_isvalidbranchname["isValidBranchName[]"]
    center -->|"contains"| N_worker_branchmanager_execgit["execGit[]"]
    center -->|"contains"| N_worker_branchmanager_execnpm["execNpm[]"]
    center -->|"contains"| N_worker_branchmanager_getbranchinfo["getBranchInfo[]"]
    center -->|"contains"| N_worker_branchmanager_switchbranch["switchBranch[]"]
    center -->|"contains"| N_worker_branchmanager_pullupdates["pullUpdates[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_settingsroutes_ts["SettingsRoutes.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[SettingsRoutes.ts]] - `imports_from` [EXTRACTED]
- [[execGit()]] - `contains` [EXTRACTED]
- [[execNpm()]] - `contains` [EXTRACTED]
- [[getBranchInfo()]] - `contains` [EXTRACTED]
- [[isValidBranchName()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[pullUpdates()]] - `contains` [EXTRACTED]
- [[switchBranch()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[BranchManager.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None