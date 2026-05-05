---
source_file: "vendor/claude-mem/src/services/infrastructure/WorktreeAdoption.ts"
type: "code"
community: "Community None"
degree: 5
location: "L315"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# adoptMergedWorktreesForAllKnownRepos()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["adoptMergedWorktreesForAllKnownRepos[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"calls"| N_services_worker_service_workerservice_initializebackground[".initializeBackground[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_worktreeadoption_ts["WorktreeAdoption.ts"]
    center -->|"calls"| N_infrastructure_worktreeadoption_resolvemainrepopath["resolveMainRepoPath[]"]
    center -->|"calls"| N_infrastructure_worktreeadoption_adoptmergedworktrees["adoptMergedWorktrees[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.initializeBackground()]] - `calls` [INFERRED]
- [[WorktreeAdoption.ts]] - `contains` [EXTRACTED]
- [[adoptMergedWorktrees()]] - `calls` [EXTRACTED]
- [[resolveMainRepoPath()]] - `calls` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[adoptMergedWorktreesForAllKnownRepos()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None