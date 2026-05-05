---
source_file: "vendor/claude-mem/src/npx-cli/commands/runtime.ts"
type: "code"
community: "Community None"
degree: 6
location: "L9"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ensureInstalledOrExit()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["ensureInstalledOrExit[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_commands_runtime_ts["runtime.ts"]
    center -->|"calls"| N_commands_runtime_spawnbunworkercommand["spawnBunWorkerCommand[]"]
    center -->|"calls"| N_commands_runtime_runadoptcommand["runAdoptCommand[]"]
    center -->|"calls"| N_commands_runtime_runsearchcommand["runSearchCommand[]"]
    center -->|"calls"| N_commands_runtime_runtranscriptwatchcommand["runTranscriptWatchCommand[]"]
    center -->|"calls"| N_utils_paths_isplugininstalled["isPluginInstalled[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[isPluginInstalled()]] - `calls` [INFERRED]
- [[runAdoptCommand()]] - `calls` [EXTRACTED]
- [[runSearchCommand()]] - `calls` [EXTRACTED]
- [[runTranscriptWatchCommand()]] - `calls` [EXTRACTED]
- [[runtime.ts]] - `contains` [EXTRACTED]
- [[spawnBunWorkerCommand()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ensureInstalledOrExit()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None