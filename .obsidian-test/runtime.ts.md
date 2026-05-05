---
source_file: "vendor/claude-mem/src/npx-cli/commands/runtime.ts"
type: "code"
community: "Community None"
degree: 22
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# runtime.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 22

## Architecture Graph
```mermaid
graph LR
    center["runtime.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_spawn_ts["spawn.ts"]
    center -->|"imports"| N_shared_spawn_spawnhidden["spawnHidden[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_settingsdefaultsmanager_ts["SettingsDefaultsManager.ts"]
    center -->|"imports"| N_shared_settingsdefaultsmanager_settingsdefaultsmanager["SettingsDefaultsManager"]
    center -->|"imports_from"| N_npx_cli_index_main["main[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_npx_cli_utils_bun_resolver_ts["bun-resolver.ts"]
    center -->|"imports"| N_utils_bun_resolver_resolvebunbinarypath["resolveBunBinaryPath[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_npx_cli_utils_paths_ts["paths.ts"]
    center -->|"imports"| N_utils_paths_isplugininstalled["isPluginInstalled[]"]
    center -->|"imports"| N_utils_paths_marketplacedirectory["marketplaceDirectory[]"]
    center -->|"contains"| N_commands_runtime_ensureinstalledorexit["ensureInstalledOrExit[]"]
    center -->|"contains"| N_commands_runtime_resolvebunorexit["resolveBunOrExit[]"]
    center -->|"contains"| N_commands_runtime_workerservicescriptpath["workerServiceScriptPath[]"]
    center -->|"contains"| N_commands_runtime_spawnbunworkercommand["spawnBunWorkerCommand[]"]
    center -->|"contains"| N_commands_runtime_runstartcommand["runStartCommand[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[SettingsDefaultsManager]] - `imports` [EXTRACTED]
- [[SettingsDefaultsManager.ts]] - `imports_from` [EXTRACTED]
- [[bun-resolver.ts]] - `imports_from` [EXTRACTED]
- [[ensureInstalledOrExit()]] - `contains` [EXTRACTED]
- [[isPluginInstalled()]] - `imports` [EXTRACTED]
- [[main()_21]] - `imports_from` [EXTRACTED]
- [[marketplaceDirectory()]] - `imports` [EXTRACTED]
- [[paths.ts_1]] - `imports_from` [EXTRACTED]
- [[resolveBunBinaryPath()]] - `imports` [EXTRACTED]
- [[resolveBunOrExit()]] - `contains` [EXTRACTED]
- [[runAdoptCommand()]] - `contains` [EXTRACTED]
- [[runCleanupCommand()]] - `contains` [EXTRACTED]
- [[runRestartCommand()]] - `contains` [EXTRACTED]
- [[runSearchCommand()]] - `contains` [EXTRACTED]
- [[runStartCommand()]] - `contains` [EXTRACTED]
- [[runStatusCommand()]] - `contains` [EXTRACTED]
- [[runStopCommand()]] - `contains` [EXTRACTED]
- [[runTranscriptWatchCommand()]] - `contains` [EXTRACTED]
- [[spawn.ts]] - `imports_from` [EXTRACTED]
- [[spawnBunWorkerCommand()]] - `contains` [EXTRACTED]
- [[spawnHidden()]] - `imports` [EXTRACTED]
- [[workerServiceScriptPath()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[runtime.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None