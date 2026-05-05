---
source_file: "vendor/claude-mem/src/npx-cli/commands/uninstall.ts"
type: "code"
community: "Community None"
degree: 4
location: "L159"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# runUninstallCommand()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["runUninstallCommand[]"]:::centerNode
    center -->|"calls"| N_npx_cli_index_main["main[]"]
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_commands_uninstall_ts["uninstall.ts"]
    center -->|"calls"| N_utils_paths_isplugininstalled["isPluginInstalled[]"]
    center -->|"calls"| N_install_shutdown_helper_shutdownworkerandwait["shutdownWorkerAndWait[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[isPluginInstalled()]] - `calls` [INFERRED]
- [[main()_21]] - `calls` [INFERRED]
- [[shutdownWorkerAndWait()]] - `calls` [INFERRED]
- [[uninstall.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[runUninstallCommand()]]
```

#graphify/code #graphify/INFERRED #community/Community_None