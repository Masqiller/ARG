---
source_file: "vendor/claude-mem/src/npx-cli/utils/paths.ts"
type: "code"
community: "Community None"
degree: 6
location: "L81"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ensureDirectoryExists()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["ensureDirectoryExists[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"calls"| N_commands_install_registermarketplace["registerMarketplace[]"]
    center -->|"calls"| N_commands_install_copyplugintomarketplace["copyPluginToMarketplace[]"]
    center -->|"calls"| N_commands_install_copyplugintocache["copyPluginToCache[]"]
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_utils_paths_ts["paths.ts"]
    center -->|"calls"| N_utils_paths_writejsonfileatomic["writeJsonFileAtomic[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[copyPluginToCache()]] - `calls` [INFERRED]
- [[copyPluginToMarketplace()]] - `calls` [INFERRED]
- [[install.ts]] - `imports` [EXTRACTED]
- [[paths.ts_1]] - `contains` [EXTRACTED]
- [[registerMarketplace()]] - `calls` [INFERRED]
- [[writeJsonFileAtomic()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ensureDirectoryExists()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None