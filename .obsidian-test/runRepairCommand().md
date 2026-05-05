---
source_file: "vendor/claude-mem/src/npx-cli/commands/install.ts"
type: "code"
community: "Community None"
degree: 5
location: "L1068"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# runRepairCommand()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["runRepairCommand[]"]:::centerNode
    center -->|"calls"| N_npx_cli_index_main["main[]"]
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"calls"| N_commands_install_runtasks["runTasks[]"]
    center -->|"calls"| N_utils_paths_readpluginversion["readPluginVersion[]"]
    center -->|"calls"| N_utils_paths_plugincachedirectory["pluginCacheDirectory[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[install.ts]] - `contains` [EXTRACTED]
- [[main()_21]] - `calls` [INFERRED]
- [[pluginCacheDirectory()]] - `calls` [INFERRED]
- [[readPluginVersion()]] - `calls` [INFERRED]
- [[runTasks()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[runRepairCommand()]]
```

#graphify/code #graphify/INFERRED #community/Community_None