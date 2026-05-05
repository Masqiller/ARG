---
source_file: "vendor/claude-mem/src/npx-cli/commands/uninstall.ts"
type: "code"
community: "Community None"
degree: 23
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# uninstall.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 23

## Architecture Graph
```mermaid
graph LR
    center["uninstall.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_settingsdefaultsmanager_ts["SettingsDefaultsManager.ts"]
    center -->|"imports"| N_shared_settingsdefaultsmanager_settingsdefaultsmanager["SettingsDefaultsManager"]
    center -->|"imports_from"| N_npx_cli_index_main["main[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_npx_cli_utils_paths_ts["paths.ts"]
    center -->|"imports"| N_utils_paths_claudesettingspath["claudeSettingsPath[]"]
    center -->|"imports"| N_utils_paths_installedpluginspath["installedPluginsPath[]"]
    center -->|"imports"| N_utils_paths_isplugininstalled["isPluginInstalled[]"]
    center -->|"imports"| N_utils_paths_knownmarketplacespath["knownMarketplacesPath[]"]
    center -->|"imports"| N_utils_paths_marketplacedirectory["marketplaceDirectory[]"]
    center -->|"imports"| N_utils_paths_pluginsdirectory["pluginsDirectory[]"]
    center -->|"imports"| N_utils_paths_writejsonfileatomic["writeJsonFileAtomic[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_json_utils_ts["json-utils.ts"]
    center -->|"imports"| N_utils_json_utils_readjsonsafe["readJsonSafe[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_install_shutdown_helper_ts["shutdown-helper.ts"]
    center -->|"imports"| N_install_shutdown_helper_shutdownworkerandwait["shutdownWorkerAndWait[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[SettingsDefaultsManager]] - `imports` [EXTRACTED]
- [[SettingsDefaultsManager.ts]] - `imports_from` [EXTRACTED]
- [[claudeSettingsPath()]] - `imports` [EXTRACTED]
- [[installedPluginsPath()]] - `imports` [EXTRACTED]
- [[isPluginInstalled()]] - `imports` [EXTRACTED]
- [[json-utils.ts]] - `imports_from` [EXTRACTED]
- [[knownMarketplacesPath()]] - `imports` [EXTRACTED]
- [[main()_21]] - `imports_from` [EXTRACTED]
- [[marketplaceDirectory()]] - `imports` [EXTRACTED]
- [[paths.ts_1]] - `imports_from` [EXTRACTED]
- [[pluginsDirectory()]] - `imports` [EXTRACTED]
- [[readJsonSafe()]] - `imports` [EXTRACTED]
- [[removeCacheDirectory()]] - `contains` [EXTRACTED]
- [[removeFromClaudeSettings()]] - `contains` [EXTRACTED]
- [[removeFromInstalledPlugins()]] - `contains` [EXTRACTED]
- [[removeFromKnownMarketplaces()]] - `contains` [EXTRACTED]
- [[removeMarketplaceDirectory()]] - `contains` [EXTRACTED]
- [[removeStrayClaudeMemPaths()]] - `contains` [EXTRACTED]
- [[runUninstallCommand()]] - `contains` [EXTRACTED]
- [[shutdown-helper.ts]] - `imports_from` [EXTRACTED]
- [[shutdownWorkerAndWait()]] - `imports` [EXTRACTED]
- [[stripLegacyClaudeMemAlias()]] - `contains` [EXTRACTED]
- [[writeJsonFileAtomic()]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[uninstall.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None