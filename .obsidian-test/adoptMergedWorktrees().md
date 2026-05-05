---
source_file: "vendor/claude-mem/src/services/infrastructure/WorktreeAdoption.ts"
type: "code"
community: "Community None"
degree: 8
location: "L119"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# adoptMergedWorktrees()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["adoptMergedWorktrees[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"calls"| N_services_worker_service_main["main[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_worktreeadoption_ts["WorktreeAdoption.ts"]
    center -->|"calls"| N_infrastructure_worktreeadoption_resolvemainrepopath["resolveMainRepoPath[]"]
    center -->|"calls"| N_infrastructure_worktreeadoption_listworktrees["listWorktrees[]"]
    center -->|"calls"| N_infrastructure_worktreeadoption_listmergedbranches["listMergedBranches[]"]
    center -->|"calls"| N_infrastructure_worktreeadoption_adoptmergedworktreesforallknownrepos["adoptMergedWorktreesForAllKnownRepos[]"]
    center -->|"calls"| N_utils_project_name_getprojectcontext["getProjectContext[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[WorktreeAdoption.ts]] - `contains` [EXTRACTED]
- [[adoptMergedWorktreesForAllKnownRepos()]] - `calls` [EXTRACTED]
- [[getProjectContext()]] - `calls` [INFERRED]
- [[listMergedBranches()]] - `calls` [EXTRACTED]
- [[listWorktrees()]] - `calls` [EXTRACTED]
- [[main()_22]] - `calls` [INFERRED]
- [[resolveMainRepoPath()]] - `calls` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[adoptMergedWorktrees()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None