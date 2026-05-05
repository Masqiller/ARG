---
source_file: "vendor/claude-mem/src/services/worker/BranchManager.ts"
type: "code"
community: "Community None"
degree: 4
location: "L37"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# execGit()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["execGit[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_branchmanager_ts["BranchManager.ts"]
    center -->|"calls"| N_worker_branchmanager_getbranchinfo["getBranchInfo[]"]
    center -->|"calls"| N_worker_branchmanager_switchbranch["switchBranch[]"]
    center -->|"calls"| N_worker_branchmanager_pullupdates["pullUpdates[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[BranchManager.ts]] - `contains` [EXTRACTED]
- [[getBranchInfo()]] - `calls` [EXTRACTED]
- [[pullUpdates()]] - `calls` [EXTRACTED]
- [[switchBranch()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[execGit()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None