---
source_file: "vendor/claude-mem/src/npx-cli/utils/paths.ts"
type: "code"
community: "Community None"
degree: 9
location: "L52"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# readPluginVersion()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["readPluginVersion[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_index_ts["index.ts"]
    center -->|"calls"| N_npx_cli_index_printhelp["printHelp[]"]
    center -->|"calls"| N_npx_cli_index_main["main[]"]
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"calls"| N_commands_install_runinstallcommand["runInstallCommand[]"]
    center -->|"calls"| N_commands_install_runrepaircommand["runRepairCommand[]"]
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_utils_paths_ts["paths.ts"]
    center -->|"calls"| N_utils_paths_npmpackagerootdirectory["npmPackageRootDirectory[]"]
    center -->|"calls"| N_utils_paths_npmpackageplugindirectory["npmPackagePluginDirectory[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[index.ts_3]] - `imports` [EXTRACTED]
- [[install.ts]] - `imports` [EXTRACTED]
- [[main()_21]] - `calls` [INFERRED]
- [[npmPackagePluginDirectory()]] - `calls` [EXTRACTED]
- [[npmPackageRootDirectory()]] - `calls` [EXTRACTED]
- [[paths.ts_1]] - `contains` [EXTRACTED]
- [[printHelp()]] - `calls` [INFERRED]
- [[runInstallCommand()]] - `calls` [INFERRED]
- [[runRepairCommand()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[readPluginVersion()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None