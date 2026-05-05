---
source_file: "vendor/claude-mem/src/shared/SettingsDefaultsManager.ts"
type: "code"
community: "Community None"
degree: 40
location: "L69"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SettingsDefaultsManager

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 40

## Architecture Graph
```mermaid
graph LR
    center["SettingsDefaultsManager"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_gemini_provider_test_ts["gemini_provider.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_shared_settings_defaults_manager_test_ts["settings-defaults-manager.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_shared_welcome_hint_default_test_ts["welcome-hint-default.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_claude_md_commands_ts["claude-md-commands.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_shared_hook_settings_ts["hook-settings.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_shared_settingsdefaultsmanager_ts["SettingsDefaultsManager.ts"]
    center -->|"method"| N_shared_settingsdefaultsmanager_settingsdefaultsmanager_getalldefaults[".getAllDefaults[]"]
    center -->|"method"| N_shared_settingsdefaultsmanager_settingsdefaultsmanager_get[".get[]"]
    center -->|"method"| N_shared_settingsdefaultsmanager_settingsdefaultsmanager_getint[".getInt[]"]
    center -->|"method"| N_shared_settingsdefaultsmanager_settingsdefaultsmanager_getbool[".getBool[]"]
    center -->|"method"| N_shared_settingsdefaultsmanager_settingsdefaultsmanager_applyenvoverrides[".applyEnvOverrides[]"]
    center -->|"method"| N_shared_settingsdefaultsmanager_settingsdefaultsmanager_loadfromfile[".loadFromFile[]"]
    center -->|"imports"| N_vendor_claude_mem_src_shared_find_claude_executable_ts["find-claude-executable.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.applyEnvOverrides()]] - `method` [EXTRACTED]
- [[.get()_7]] - `method` [EXTRACTED]
- [[.getAllDefaults()]] - `method` [EXTRACTED]
- [[.getBool()]] - `method` [EXTRACTED]
- [[.getInt()]] - `method` [EXTRACTED]
- [[.loadFromFile()]] - `method` [EXTRACTED]
- [[ChromaMcpManager.ts]] - `imports` [EXTRACTED]
- [[ChromaRoutes.ts]] - `imports` [EXTRACTED]
- [[ChromaSyncState.ts]] - `imports` [EXTRACTED]
- [[ClaudeProvider.ts]] - `imports` [EXTRACTED]
- [[ContextConfigLoader.ts]] - `imports` [EXTRACTED]
- [[DatabaseManager.ts]] - `imports` [EXTRACTED]
- [[GeminiProvider.ts]] - `imports` [EXTRACTED]
- [[KnowledgeAgent.ts]] - `imports` [EXTRACTED]
- [[LogsRoutes.ts]] - `imports` [EXTRACTED]
- [[OpenClawInstaller.ts]] - `imports` [EXTRACTED]
- [[OpenRouterProvider.ts]] - `imports` [EXTRACTED]
- [[ResponseProcessor.ts]] - `imports` [EXTRACTED]
- [[SearchRoutes.ts]] - `imports` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports` [EXTRACTED]
- [[SettingsDefaultsManager.ts]] - `contains` [EXTRACTED]
- [[SettingsRoutes.ts]] - `imports` [EXTRACTED]
- [[TelegramNotifier.ts]] - `imports` [EXTRACTED]
- [[claude-md-commands.ts]] - `imports` [EXTRACTED]
- [[claude-md-utils.ts]] - `imports` [EXTRACTED]
- [[export-memories.ts]] - `imports` [EXTRACTED]
- [[find-claude-executable.ts]] - `imports` [EXTRACTED]
- [[gemini_provider.test.ts]] - `imports` [EXTRACTED]
- [[hook-settings.ts]] - `imports` [EXTRACTED]
- [[install.ts]] - `imports` [EXTRACTED]
- [[paths.ts]] - `imports` [EXTRACTED]
- [[regenerate-claude-md.ts]] - `imports` [EXTRACTED]
- [[runtime.ts]] - `imports` [EXTRACTED]
- [[settings-defaults-manager.test.ts]] - `imports` [EXTRACTED]
- [[shared.ts]] - `imports` [EXTRACTED]
- [[uninstall.ts]] - `imports` [EXTRACTED]
- [[welcome-hint-default.test.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]
- [[worker-spawner.ts]] - `imports` [EXTRACTED]
- [[worker-utils.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SettingsDefaultsManager]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None