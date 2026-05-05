---
source_file: "vendor/claude-mem/src/cli/hook-command.ts"
type: "code"
community: "Community None"
degree: 3
location: "L12"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isWorkerUnavailableError()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["isWorkerUnavailableError[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_hook_command_test_ts["hook-command.test.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_cli_hook_command_ts["hook-command.ts"]
    center -->|"calls"| N_cli_hook_command_hookcommand["hookCommand[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[hook-command.test.ts]] - `imports` [EXTRACTED]
- [[hook-command.ts]] - `contains` [EXTRACTED]
- [[hookCommand()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isWorkerUnavailableError()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None