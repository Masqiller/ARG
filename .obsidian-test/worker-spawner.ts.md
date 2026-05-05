---
source_file: "vendor/claude-mem/src/services/worker-spawner.ts"
type: "code"
community: "Community None"
degree: 23
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# worker-spawner.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 23

## Architecture Graph
```mermaid
graph LR
    center["worker-spawner.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_services_worker_spawner_test_ts["worker-spawner.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_servers_mcp_server_ts["mcp-server.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_hook_constants_ts["hook-constants.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_settingsdefaultsmanager_ts["SettingsDefaultsManager.ts"]
    center -->|"imports"| N_shared_settingsdefaultsmanager_settingsdefaultsmanager["SettingsDefaultsManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_infrastructure_processmanager_ts["ProcessManager.ts"]
    center -->|"imports"| N_infrastructure_processmanager_cleanstalepidfile["cleanStalePidFile[]"]
    center -->|"imports"| N_infrastructure_processmanager_getplatformtimeout["getPlatformTimeout[]"]
    center -->|"imports"| N_infrastructure_processmanager_spawndaemon["spawnDaemon[]"]
    center -->|"imports"| N_infrastructure_processmanager_touchpidfile["touchPidFile[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_infrastructure_healthmonitor_ts["HealthMonitor.ts"]
    center -->|"imports"| N_infrastructure_healthmonitor_isportinuse["isPortInUse[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[HealthMonitor.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[ProcessManager.ts]] - `imports_from` [EXTRACTED]
- [[SettingsDefaultsManager]] - `imports` [EXTRACTED]
- [[SettingsDefaultsManager.ts]] - `imports_from` [EXTRACTED]
- [[cleanStalePidFile()]] - `imports` [EXTRACTED]
- [[clearWorkerSpawnAttempted()]] - `contains` [EXTRACTED]
- [[ensureWorkerStarted()]] - `contains` [EXTRACTED]
- [[getPlatformTimeout()]] - `imports` [EXTRACTED]
- [[getWorkerSpawnLockPath()]] - `contains` [EXTRACTED]
- [[hook-constants.ts]] - `imports_from` [EXTRACTED]
- [[install.ts]] - `imports_from` [EXTRACTED]
- [[isPortInUse()_1]] - `imports` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[markWorkerSpawnAttempted()]] - `contains` [EXTRACTED]
- [[mcp-server.ts]] - `imports_from` [EXTRACTED]
- [[shouldSkipSpawnOnWindows()]] - `contains` [EXTRACTED]
- [[spawnDaemon()]] - `imports` [EXTRACTED]
- [[touchPidFile()]] - `imports` [EXTRACTED]
- [[waitForHealth()_1]] - `imports` [EXTRACTED]
- [[waitForReadiness()]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]
- [[worker-spawner.test.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[worker-spawner.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None