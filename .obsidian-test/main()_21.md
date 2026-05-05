---
source_file: "vendor/claude-mem/src/npx-cli/index.ts"
type: "code"
community: "Community None"
degree: 18
location: "L78"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# main()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 18

## Architecture Graph
```mermaid
graph LR
    center["main[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_index_ts["index.ts"]
    center -->|"calls"| N_npx_cli_index_printhelp["printHelp[]"]
    center -->|"calls"| N_npx_cli_index_parseinstalloptions["parseInstallOptions[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_npx_cli_commands_uninstall_ts["uninstall.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_npx_cli_commands_runtime_ts["runtime.ts"]
    center -->|"calls"| N_commands_install_runinstallcommand["runInstallCommand[]"]
    center -->|"calls"| N_commands_install_runrepaircommand["runRepairCommand[]"]
    center -->|"calls"| N_commands_uninstall_rununinstallcommand["runUninstallCommand[]"]
    center -->|"calls"| N_utils_paths_readpluginversion["readPluginVersion[]"]
    center -->|"calls"| N_commands_runtime_runstartcommand["runStartCommand[]"]
    center -->|"calls"| N_commands_runtime_runstopcommand["runStopCommand[]"]
    center -->|"calls"| N_commands_runtime_runrestartcommand["runRestartCommand[]"]
    center -->|"calls"| N_commands_runtime_runstatuscommand["runStatusCommand[]"]
    center -->|"calls"| N_commands_runtime_runsearchcommand["runSearchCommand[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[index.ts_3]] - `contains` [EXTRACTED]
- [[install.ts]] - `imports_from` [EXTRACTED]
- [[parseInstallOptions()]] - `calls` [EXTRACTED]
- [[printHelp()]] - `calls` [EXTRACTED]
- [[readPluginVersion()]] - `calls` [INFERRED]
- [[runAdoptCommand()]] - `calls` [INFERRED]
- [[runCleanupCommand()]] - `calls` [INFERRED]
- [[runInstallCommand()]] - `calls` [INFERRED]
- [[runRepairCommand()]] - `calls` [INFERRED]
- [[runRestartCommand()]] - `calls` [INFERRED]
- [[runSearchCommand()]] - `calls` [INFERRED]
- [[runStartCommand()]] - `calls` [INFERRED]
- [[runStatusCommand()]] - `calls` [INFERRED]
- [[runStopCommand()]] - `calls` [INFERRED]
- [[runTranscriptWatchCommand()]] - `calls` [INFERRED]
- [[runUninstallCommand()]] - `calls` [INFERRED]
- [[runtime.ts]] - `imports_from` [EXTRACTED]
- [[uninstall.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[main()_21]]
```

#graphify/code #graphify/INFERRED #community/Community_None