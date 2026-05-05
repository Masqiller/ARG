---
source_file: "vendor/claude-mem/src/cli/claude-md-commands.ts"
type: "code"
community: "Community None"
degree: 5
location: "L277"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# regenerateFolder()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["regenerateFolder[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_cli_claude_md_commands_ts["claude-md-commands.ts"]
    center -->|"calls"| N_cli_claude_md_commands_findobservationsbyfolder["findObservationsByFolder[]"]
    center -->|"calls"| N_cli_claude_md_commands_formatobservationsforclaudemd["formatObservationsForClaudeMd[]"]
    center -->|"calls"| N_cli_claude_md_commands_writeclaudemdtofolder["writeClaudeMdToFolder[]"]
    center -->|"calls"| N_cli_claude_md_commands_processallfoldersforgeneration["processAllFoldersForGeneration[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[claude-md-commands.ts]] - `contains` [EXTRACTED]
- [[findObservationsByFolder()]] - `calls` [EXTRACTED]
- [[formatObservationsForClaudeMd()]] - `calls` [EXTRACTED]
- [[processAllFoldersForGeneration()]] - `calls` [EXTRACTED]
- [[writeClaudeMdToFolder()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[regenerateFolder()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None