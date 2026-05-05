---
source_file: "vendor/claude-mem/src/utils/worktree.ts"
type: "code"
community: "Community None"
degree: 3
location: "L19"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# detectWorktree()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["detectWorktree[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_utils_worktree_ts["worktree.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_utils_project_name_ts["project-name.ts"]
    center -->|"calls"| N_utils_project_name_getprojectcontext["getProjectContext[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[getProjectContext()]] - `calls` [INFERRED]
- [[project-name.ts]] - `imports` [EXTRACTED]
- [[worktree.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[detectWorktree()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None