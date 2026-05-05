---
source_file: "vendor/claude-mem/src/npx-cli/commands/install.ts"
type: "code"
community: "Community None"
degree: 13
location: "L729"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# runInstallCommand()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["runInstallCommand[]"]:::centerNode
    center -->|"calls"| N_npx_cli_index_main["main[]"]
    center -->|"calls"| N_npx_cli_banner_playbanner["playBanner[]"]
    center -->|"calls"| N_commands_ide_detection_detectinstalledides["detectInstalledIDEs[]"]
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"calls"| N_commands_install_getsetting["getSetting[]"]
    center -->|"calls"| N_commands_install_runtasks["runTasks[]"]
    center -->|"calls"| N_commands_install_setupides["setupIDEs[]"]
    center -->|"calls"| N_commands_install_promptforideselection["promptForIDESelection[]"]
    center -->|"calls"| N_commands_install_promptprovider["promptProvider[]"]
    center -->|"calls"| N_commands_install_promptclaudemodel["promptClaudeModel[]"]
    center -->|"calls"| N_utils_paths_readpluginversion["readPluginVersion[]"]
    center -->|"calls"| N_utils_paths_marketplacedirectory["marketplaceDirectory[]"]
    center -->|"calls"| N_install_shutdown_helper_shutdownworkerandwait["shutdownWorkerAndWait[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[detectInstalledIDEs()]] - `calls` [INFERRED]
- [[getSetting()]] - `calls` [EXTRACTED]
- [[install.ts]] - `contains` [EXTRACTED]
- [[main()_21]] - `calls` [INFERRED]
- [[marketplaceDirectory()]] - `calls` [INFERRED]
- [[playBanner()]] - `calls` [INFERRED]
- [[promptClaudeModel()]] - `calls` [EXTRACTED]
- [[promptForIDESelection()]] - `calls` [EXTRACTED]
- [[promptProvider()]] - `calls` [EXTRACTED]
- [[readPluginVersion()]] - `calls` [INFERRED]
- [[runTasks()]] - `calls` [EXTRACTED]
- [[setupIDEs()]] - `calls` [EXTRACTED]
- [[shutdownWorkerAndWait()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[runInstallCommand()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None