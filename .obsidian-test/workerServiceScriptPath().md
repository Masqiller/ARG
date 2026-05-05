---
source_file: "vendor/claude-mem/src/npx-cli/commands/runtime.ts"
type: "code"
community: "Community None"
degree: 4
location: "L28"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# workerServiceScriptPath()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["workerServiceScriptPath[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_commands_runtime_ts["runtime.ts"]
    center -->|"calls"| N_commands_runtime_spawnbunworkercommand["spawnBunWorkerCommand[]"]
    center -->|"calls"| N_commands_runtime_runadoptcommand["runAdoptCommand[]"]
    center -->|"calls"| N_utils_paths_marketplacedirectory["marketplaceDirectory[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[marketplaceDirectory()]] - `calls` [INFERRED]
- [[runAdoptCommand()]] - `calls` [EXTRACTED]
- [[runtime.ts]] - `contains` [EXTRACTED]
- [[spawnBunWorkerCommand()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[workerServiceScriptPath()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None