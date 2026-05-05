---
source_file: "vendor/claude-mem/src/npx-cli/utils/paths.ts"
type: "code"
community: "Community None"
degree: 9
location: "L16"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# pluginsDirectory()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["pluginsDirectory[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"calls"| N_commands_install_registermarketplace["registerMarketplace[]"]
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_uninstall_ts["uninstall.ts"]
    center -->|"calls"| N_commands_uninstall_removecachedirectory["removeCacheDirectory[]"]
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_utils_paths_ts["paths.ts"]
    center -->|"calls"| N_utils_paths_claudeconfigdirectory["claudeConfigDirectory[]"]
    center -->|"calls"| N_utils_paths_knownmarketplacespath["knownMarketplacesPath[]"]
    center -->|"calls"| N_utils_paths_installedpluginspath["installedPluginsPath[]"]
    center -->|"calls"| N_utils_paths_plugincachedirectory["pluginCacheDirectory[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[claudeConfigDirectory()]] - `calls` [EXTRACTED]
- [[install.ts]] - `imports` [EXTRACTED]
- [[installedPluginsPath()]] - `calls` [EXTRACTED]
- [[knownMarketplacesPath()]] - `calls` [EXTRACTED]
- [[paths.ts_1]] - `contains` [EXTRACTED]
- [[pluginCacheDirectory()]] - `calls` [EXTRACTED]
- [[registerMarketplace()]] - `calls` [INFERRED]
- [[removeCacheDirectory()]] - `calls` [INFERRED]
- [[uninstall.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[pluginsDirectory()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None