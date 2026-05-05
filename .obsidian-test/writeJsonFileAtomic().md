---
source_file: "vendor/claude-mem/src/npx-cli/utils/paths.ts"
type: "code"
community: "Community None"
degree: 10
location: "L89"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# writeJsonFileAtomic()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["writeJsonFileAtomic[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"calls"| N_commands_install_registermarketplace["registerMarketplace[]"]
    center -->|"calls"| N_commands_install_registerplugin["registerPlugin[]"]
    center -->|"calls"| N_commands_install_enableplugininclaudesettings["enablePluginInClaudeSettings[]"]
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_uninstall_ts["uninstall.ts"]
    center -->|"calls"| N_commands_uninstall_removefromknownmarketplaces["removeFromKnownMarketplaces[]"]
    center -->|"calls"| N_commands_uninstall_removefrominstalledplugins["removeFromInstalledPlugins[]"]
    center -->|"calls"| N_commands_uninstall_removefromclaudesettings["removeFromClaudeSettings[]"]
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_utils_paths_ts["paths.ts"]
    center -->|"calls"| N_utils_paths_ensuredirectoryexists["ensureDirectoryExists[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[enablePluginInClaudeSettings()]] - `calls` [INFERRED]
- [[ensureDirectoryExists()]] - `calls` [EXTRACTED]
- [[install.ts]] - `imports` [EXTRACTED]
- [[paths.ts_1]] - `contains` [EXTRACTED]
- [[registerMarketplace()]] - `calls` [INFERRED]
- [[registerPlugin()]] - `calls` [INFERRED]
- [[removeFromClaudeSettings()]] - `calls` [INFERRED]
- [[removeFromInstalledPlugins()]] - `calls` [INFERRED]
- [[removeFromKnownMarketplaces()]] - `calls` [INFERRED]
- [[uninstall.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[writeJsonFileAtomic()]]
```

#graphify/code #graphify/INFERRED #community/Community_None