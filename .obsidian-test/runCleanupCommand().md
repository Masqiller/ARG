---
source_file: "vendor/claude-mem/src/npx-cli/commands/runtime.ts"
type: "code"
community: "Community None"
degree: 3
location: "L107"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# runCleanupCommand()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["runCleanupCommand[]"]:::centerNode
    center -->|"calls"| N_npx_cli_index_main["main[]"]
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_commands_runtime_ts["runtime.ts"]
    center -->|"calls"| N_commands_runtime_spawnbunworkercommand["spawnBunWorkerCommand[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[main()_21]] - `calls` [INFERRED]
- [[runtime.ts]] - `contains` [EXTRACTED]
- [[spawnBunWorkerCommand()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[runCleanupCommand()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None