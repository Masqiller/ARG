---
source_file: "vendor/claude-mem/src/services/integrations/OpenClawInstaller.ts"
type: "code"
community: "Community None"
degree: 20
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# OpenClawInstaller.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 20

## Architecture Graph
```mermaid
graph LR
    center["OpenClawInstaller.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_settingsdefaultsmanager_ts["SettingsDefaultsManager.ts"]
    center -->|"imports"| N_shared_settingsdefaultsmanager_settingsdefaultsmanager["SettingsDefaultsManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_integrations_openclawinstaller_getopenclawconfigdirectory["getOpenClawConfigDirectory[]"]
    center -->|"contains"| N_integrations_openclawinstaller_getopenclawextensionsdirectory["getOpenClawExtensionsDirectory[]"]
    center -->|"contains"| N_integrations_openclawinstaller_getopenclawclaudememextensiondirectory["getOpenClawClaudeMemExtensionDirectory[]"]
    center -->|"contains"| N_integrations_openclawinstaller_getopenclawconfigfilepath["getOpenClawConfigFilePath[]"]
    center -->|"contains"| N_integrations_openclawinstaller_findprebuiltplugindirectory["findPreBuiltPluginDirectory[]"]
    center -->|"contains"| N_integrations_openclawinstaller_findpluginmanifestpath["findPluginManifestPath[]"]
    center -->|"contains"| N_integrations_openclawinstaller_findpluginskillsdirectory["findPluginSkillsDirectory[]"]
    center -->|"contains"| N_integrations_openclawinstaller_readopenclawconfig["readOpenClawConfig[]"]
    center -->|"contains"| N_integrations_openclawinstaller_writeopenclawconfig["writeOpenClawConfig[]"]
    center -->|"contains"| N_integrations_openclawinstaller_registerplugininopenclawconfig["registerPluginInOpenClawConfig[]"]
    center -->|"contains"| N_integrations_openclawinstaller_unregisterpluginfromopenclawconfig["unregisterPluginFromOpenClawConfig[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[SettingsDefaultsManager]] - `imports` [EXTRACTED]
- [[SettingsDefaultsManager.ts]] - `imports_from` [EXTRACTED]
- [[checkOpenClawStatus()]] - `contains` [EXTRACTED]
- [[copyPluginFilesAndRegister()]] - `contains` [EXTRACTED]
- [[findPluginManifestPath()]] - `contains` [EXTRACTED]
- [[findPluginSkillsDirectory()]] - `contains` [EXTRACTED]
- [[findPreBuiltPluginDirectory()]] - `contains` [EXTRACTED]
- [[getOpenClawClaudeMemExtensionDirectory()]] - `contains` [EXTRACTED]
- [[getOpenClawConfigDirectory()]] - `contains` [EXTRACTED]
- [[getOpenClawConfigFilePath()]] - `contains` [EXTRACTED]
- [[getOpenClawExtensionsDirectory()]] - `contains` [EXTRACTED]
- [[installOpenClawIntegration()]] - `contains` [EXTRACTED]
- [[installOpenClawPlugin()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[readOpenClawConfig()]] - `contains` [EXTRACTED]
- [[registerPluginInOpenClawConfig()]] - `contains` [EXTRACTED]
- [[uninstallOpenClawPlugin()]] - `contains` [EXTRACTED]
- [[unregisterPluginFromOpenClawConfig()]] - `contains` [EXTRACTED]
- [[writeOpenClawConfig()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[OpenClawInstaller.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None