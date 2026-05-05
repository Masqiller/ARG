---
source_file: "vendor/claude-mem/src/services/infrastructure/WorktreeAdoption.ts"
type: "code"
community: "Community None"
degree: 3
location: "L82"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# listWorktrees()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["listWorktrees[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_worktreeadoption_ts["WorktreeAdoption.ts"]
    center -->|"calls"| N_infrastructure_worktreeadoption_gitcapture["gitCapture[]"]
    center -->|"calls"| N_infrastructure_worktreeadoption_adoptmergedworktrees["adoptMergedWorktrees[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[WorktreeAdoption.ts]] - `contains` [EXTRACTED]
- [[adoptMergedWorktrees()]] - `calls` [EXTRACTED]
- [[gitCapture()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[listWorktrees()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None