---
source_file: "vendor/claude-mem/src/cli/claude-md-commands.ts"
type: "code"
community: "Community None"
degree: 3
location: "L317"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# processAllFoldersForGeneration()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["processAllFoldersForGeneration[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_cli_claude_md_commands_ts["claude-md-commands.ts"]
    center -->|"calls"| N_cli_claude_md_commands_regeneratefolder["regenerateFolder[]"]
    center -->|"calls"| N_cli_claude_md_commands_generateclaudemd["generateClaudeMd[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[claude-md-commands.ts]] - `contains` [EXTRACTED]
- [[generateClaudeMd()]] - `calls` [EXTRACTED]
- [[regenerateFolder()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[processAllFoldersForGeneration()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None