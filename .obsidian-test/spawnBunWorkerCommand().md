---
source_file: "vendor/claude-mem/src/npx-cli/commands/runtime.ts"
type: "code"
community: "Community None"
degree: 12
location: "L32"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# spawnBunWorkerCommand()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 12

## Architecture Graph
```mermaid
graph LR
    center["spawnBunWorkerCommand[]"]:::centerNode
    center -->|"calls"| N_shared_spawn_spawnhidden["spawnHidden[]"]
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_commands_runtime_ts["runtime.ts"]
    center -->|"calls"| N_commands_runtime_ensureinstalledorexit["ensureInstalledOrExit[]"]
    center -->|"calls"| N_commands_runtime_resolvebunorexit["resolveBunOrExit[]"]
    center -->|"calls"| N_commands_runtime_workerservicescriptpath["workerServiceScriptPath[]"]
    center -->|"calls"| N_commands_runtime_runstartcommand["runStartCommand[]"]
    center -->|"calls"| N_commands_runtime_runstopcommand["runStopCommand[]"]
    center -->|"calls"| N_commands_runtime_runrestartcommand["runRestartCommand[]"]
    center -->|"calls"| N_commands_runtime_runstatuscommand["runStatusCommand[]"]
    center -->|"calls"| N_commands_runtime_runcleanupcommand["runCleanupCommand[]"]
    center -->|"calls"| N_commands_runtime_runtranscriptwatchcommand["runTranscriptWatchCommand[]"]
    center -->|"calls"| N_utils_paths_marketplacedirectory["marketplaceDirectory[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ensureInstalledOrExit()]] - `calls` [EXTRACTED]
- [[marketplaceDirectory()]] - `calls` [INFERRED]
- [[resolveBunOrExit()]] - `calls` [EXTRACTED]
- [[runCleanupCommand()]] - `calls` [EXTRACTED]
- [[runRestartCommand()]] - `calls` [EXTRACTED]
- [[runStartCommand()]] - `calls` [EXTRACTED]
- [[runStatusCommand()]] - `calls` [EXTRACTED]
- [[runStopCommand()]] - `calls` [EXTRACTED]
- [[runTranscriptWatchCommand()]] - `calls` [EXTRACTED]
- [[runtime.ts]] - `contains` [EXTRACTED]
- [[spawnHidden()]] - `calls` [INFERRED]
- [[workerServiceScriptPath()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[spawnBunWorkerCommand()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None