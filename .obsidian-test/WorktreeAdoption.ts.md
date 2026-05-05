---
source_file: "vendor/claude-mem/src/services/infrastructure/WorktreeAdoption.ts"
type: "code"
community: "Community None"
degree: 15
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# WorktreeAdoption.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 15

## Architecture Graph
```mermaid
graph LR
    center["WorktreeAdoption.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sync_chromasync_ts["ChromaSync.ts"]
    center -->|"imports"| N_sync_chromasync_chromasync["ChromaSync"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_project_name_ts["project-name.ts"]
    center -->|"imports"| N_utils_project_name_getprojectcontext["getProjectContext[]"]
    center -->|"contains"| N_infrastructure_worktreeadoption_dryrunrollback["DryRunRollback"]
    center -->|"contains"| N_infrastructure_worktreeadoption_gitcapture["gitCapture[]"]
    center -->|"contains"| N_infrastructure_worktreeadoption_resolvemainrepopath["resolveMainRepoPath[]"]
    center -->|"contains"| N_infrastructure_worktreeadoption_listworktrees["listWorktrees[]"]
    center -->|"contains"| N_infrastructure_worktreeadoption_listmergedbranches["listMergedBranches[]"]
    center -->|"contains"| N_infrastructure_worktreeadoption_adoptmergedworktrees["adoptMergedWorktrees[]"]
    center -->|"contains"| N_infrastructure_worktreeadoption_adoptmergedworktreesforallknownrepos["adoptMergedWorktreesForAllKnownRepos[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ChromaSync]] - `imports` [EXTRACTED]
- [[ChromaSync.ts]] - `imports_from` [EXTRACTED]
- [[DryRunRollback]] - `contains` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[adoptMergedWorktrees()]] - `contains` [EXTRACTED]
- [[adoptMergedWorktreesForAllKnownRepos()]] - `contains` [EXTRACTED]
- [[getProjectContext()]] - `imports` [EXTRACTED]
- [[gitCapture()]] - `contains` [EXTRACTED]
- [[listMergedBranches()]] - `contains` [EXTRACTED]
- [[listWorktrees()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[project-name.ts]] - `imports_from` [EXTRACTED]
- [[resolveMainRepoPath()]] - `contains` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[WorktreeAdoption.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None