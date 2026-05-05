---
source_file: "vendor/claude-mem/src/npx-cli/utils/paths.ts"
type: "code"
community: "Community None"
degree: 19
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# paths.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 19

## Architecture Graph
```mermaid
graph LR
    center["paths.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_npx_cli_index_ts["index.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_npx_cli_commands_ide_detection_ts["ide-detection.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_npx_cli_commands_runtime_ts["runtime.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_npx_cli_commands_uninstall_ts["uninstall.ts"]
    center -->|"contains"| N_utils_paths_claudeconfigdirectory["claudeConfigDirectory[]"]
    center -->|"contains"| N_utils_paths_marketplacedirectory["marketplaceDirectory[]"]
    center -->|"contains"| N_utils_paths_pluginsdirectory["pluginsDirectory[]"]
    center -->|"contains"| N_utils_paths_knownmarketplacespath["knownMarketplacesPath[]"]
    center -->|"contains"| N_utils_paths_installedpluginspath["installedPluginsPath[]"]
    center -->|"contains"| N_utils_paths_claudesettingspath["claudeSettingsPath[]"]
    center -->|"contains"| N_utils_paths_plugincachedirectory["pluginCacheDirectory[]"]
    center -->|"contains"| N_utils_paths_npmpackagerootdirectory["npmPackageRootDirectory[]"]
    center -->|"contains"| N_utils_paths_npmpackageplugindirectory["npmPackagePluginDirectory[]"]
    center -->|"contains"| N_utils_paths_readpluginversion["readPluginVersion[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[bun-resolver.ts]] - `imports_from` [EXTRACTED]
- [[claudeConfigDirectory()]] - `contains` [EXTRACTED]
- [[claudeSettingsPath()]] - `contains` [EXTRACTED]
- [[ensureDirectoryExists()]] - `contains` [EXTRACTED]
- [[ide-detection.ts]] - `imports_from` [EXTRACTED]
- [[index.ts_3]] - `imports_from` [EXTRACTED]
- [[install.ts]] - `imports_from` [EXTRACTED]
- [[installedPluginsPath()]] - `contains` [EXTRACTED]
- [[isPluginInstalled()]] - `contains` [EXTRACTED]
- [[knownMarketplacesPath()]] - `contains` [EXTRACTED]
- [[marketplaceDirectory()]] - `contains` [EXTRACTED]
- [[npmPackagePluginDirectory()]] - `contains` [EXTRACTED]
- [[npmPackageRootDirectory()]] - `contains` [EXTRACTED]
- [[pluginCacheDirectory()]] - `contains` [EXTRACTED]
- [[pluginsDirectory()]] - `contains` [EXTRACTED]
- [[readPluginVersion()]] - `contains` [EXTRACTED]
- [[runtime.ts]] - `imports_from` [EXTRACTED]
- [[uninstall.ts]] - `imports_from` [EXTRACTED]
- [[writeJsonFileAtomic()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[paths.ts_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None