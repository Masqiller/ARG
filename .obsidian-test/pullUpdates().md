---
source_file: "vendor/claude-mem/src/services/worker/BranchManager.ts"
type: "code"
community: "Community None"
degree: 6
location: "L208"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# pullUpdates()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["pullUpdates[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_branchmanager_ts["BranchManager.ts"]
    center -->|"calls"| N_worker_branchmanager_isvalidbranchname["isValidBranchName[]"]
    center -->|"calls"| N_worker_branchmanager_execgit["execGit[]"]
    center -->|"calls"| N_worker_branchmanager_execnpm["execNpm[]"]
    center -->|"calls"| N_worker_branchmanager_getbranchinfo["getBranchInfo[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_settingsroutes_ts["SettingsRoutes.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[BranchManager.ts]] - `contains` [EXTRACTED]
- [[SettingsRoutes.ts]] - `imports` [EXTRACTED]
- [[execGit()]] - `calls` [EXTRACTED]
- [[execNpm()]] - `calls` [EXTRACTED]
- [[getBranchInfo()]] - `calls` [EXTRACTED]
- [[isValidBranchName()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[pullUpdates()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None