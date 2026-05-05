---
source_file: "vendor/claude-mem/src/npx-cli/index.ts"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# index.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["index.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_npx_cli_utils_paths_ts["paths.ts"]
    center -->|"imports"| N_utils_paths_readpluginversion["readPluginVersion[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"contains"| N_npx_cli_index_printhelp["printHelp[]"]
    center -->|"contains"| N_npx_cli_index_readflag["readFlag[]"]
    center -->|"contains"| N_npx_cli_index_parseinstalloptions["parseInstallOptions[]"]
    center -->|"contains"| N_npx_cli_index_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[install.ts]] - `imports_from` [EXTRACTED]
- [[main()_21]] - `contains` [EXTRACTED]
- [[parseInstallOptions()]] - `contains` [EXTRACTED]
- [[paths.ts_1]] - `imports_from` [EXTRACTED]
- [[printHelp()]] - `contains` [EXTRACTED]
- [[readFlag()_1]] - `contains` [EXTRACTED]
- [[readPluginVersion()]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[index.ts_3]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None