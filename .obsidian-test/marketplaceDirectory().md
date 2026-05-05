---
source_file: "vendor/claude-mem/src/npx-cli/utils/paths.ts"
type: "code"
community: "Community None"
degree: 15
location: "L12"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# marketplaceDirectory()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 15

## Architecture Graph
```mermaid
graph LR
    center["marketplaceDirectory[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_runtime_ts["runtime.ts"]
    center -->|"calls"| N_commands_runtime_workerservicescriptpath["workerServiceScriptPath[]"]
    center -->|"calls"| N_commands_runtime_spawnbunworkercommand["spawnBunWorkerCommand[]"]
    center -->|"calls"| N_commands_runtime_runadoptcommand["runAdoptCommand[]"]
    center -->|"calls"| N_commands_runtime_runtranscriptwatchcommand["runTranscriptWatchCommand[]"]
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"calls"| N_commands_install_registermarketplace["registerMarketplace[]"]
    center -->|"calls"| N_commands_install_copyplugintomarketplace["copyPluginToMarketplace[]"]
    center -->|"calls"| N_commands_install_runnpminstallinmarketplace["runNpmInstallInMarketplace[]"]
    center -->|"calls"| N_commands_install_runinstallcommand["runInstallCommand[]"]
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_uninstall_ts["uninstall.ts"]
    center -->|"calls"| N_commands_uninstall_removemarketplacedirectory["removeMarketplaceDirectory[]"]
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_utils_paths_ts["paths.ts"]
    center -->|"calls"| N_utils_paths_claudeconfigdirectory["claudeConfigDirectory[]"]
    center -->|"calls"| N_utils_paths_isplugininstalled["isPluginInstalled[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[claudeConfigDirectory()]] - `calls` [EXTRACTED]
- [[copyPluginToMarketplace()]] - `calls` [INFERRED]
- [[install.ts]] - `imports` [EXTRACTED]
- [[isPluginInstalled()]] - `calls` [EXTRACTED]
- [[paths.ts_1]] - `contains` [EXTRACTED]
- [[registerMarketplace()]] - `calls` [INFERRED]
- [[removeMarketplaceDirectory()]] - `calls` [INFERRED]
- [[runAdoptCommand()]] - `calls` [INFERRED]
- [[runInstallCommand()]] - `calls` [INFERRED]
- [[runNpmInstallInMarketplace()]] - `calls` [INFERRED]
- [[runTranscriptWatchCommand()]] - `calls` [INFERRED]
- [[runtime.ts]] - `imports` [EXTRACTED]
- [[spawnBunWorkerCommand()]] - `calls` [INFERRED]
- [[uninstall.ts]] - `imports` [EXTRACTED]
- [[workerServiceScriptPath()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[marketplaceDirectory()]]
```

#graphify/code #graphify/INFERRED #community/Community_None