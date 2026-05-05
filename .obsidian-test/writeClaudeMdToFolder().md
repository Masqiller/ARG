---
source_file: "vendor/claude-mem/src/cli/claude-md-commands.ts"
type: "code"
community: "Community None"
degree: 2
location: "L237"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# writeClaudeMdToFolder()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["writeClaudeMdToFolder[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_cli_claude_md_commands_ts["claude-md-commands.ts"]
    center -->|"calls"| N_cli_claude_md_commands_regeneratefolder["regenerateFolder[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[claude-md-commands.ts]] - `contains` [EXTRACTED]
- [[regenerateFolder()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[writeClaudeMdToFolder()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None