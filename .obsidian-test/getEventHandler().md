---
source_file: "vendor/claude-mem/src/cli/handlers/index.ts"
type: "code"
community: "Community None"
degree: 3
location: "L32"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getEventHandler()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["getEventHandler[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_cli_hook_command_ts["hook-command.ts"]
    center -->|"calls"| N_cli_hook_command_hookcommand["hookCommand[]"]
    center -->|"contains"| N_vendor_claude_mem_src_cli_handlers_index_ts["index.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[hook-command.ts]] - `imports` [EXTRACTED]
- [[hookCommand()]] - `calls` [INFERRED]
- [[index.ts_2]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getEventHandler()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None