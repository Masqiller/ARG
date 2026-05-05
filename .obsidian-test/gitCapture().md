---
source_file: "vendor/claude-mem/src/services/infrastructure/WorktreeAdoption.ts"
type: "code"
community: "Community None"
degree: 4
location: "L39"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# gitCapture()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["gitCapture[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_worktreeadoption_ts["WorktreeAdoption.ts"]
    center -->|"calls"| N_infrastructure_worktreeadoption_resolvemainrepopath["resolveMainRepoPath[]"]
    center -->|"calls"| N_infrastructure_worktreeadoption_listworktrees["listWorktrees[]"]
    center -->|"calls"| N_infrastructure_worktreeadoption_listmergedbranches["listMergedBranches[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[WorktreeAdoption.ts]] - `contains` [EXTRACTED]
- [[listMergedBranches()]] - `calls` [EXTRACTED]
- [[listWorktrees()]] - `calls` [EXTRACTED]
- [[resolveMainRepoPath()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[gitCapture()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None