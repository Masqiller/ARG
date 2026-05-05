---
source_file: "vendor/claude-mem/src/utils/worktree.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# worktree.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["worktree.ts"]:::centerNode
    center -->|"contains"| N_utils_worktree_detectworktree["detectWorktree[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_project_name_ts["project-name.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[detectWorktree()]] - `contains` [EXTRACTED]
- [[project-name.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[worktree.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None