---
source_file: "vendor/claude-mem/tests/hook-command.test.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# hook-command.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["hook-command.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_hook_command_ts["hook-command.ts"]
    center -->|"imports"| N_cli_hook_command_isworkerunavailableerror["isWorkerUnavailableError[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[hook-command.ts]] - `imports_from` [EXTRACTED]
- [[isWorkerUnavailableError()]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[hook-command.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None