---
source_file: "vendor/claude-mem/src/services/infrastructure/ProcessManager.ts"
type: "code"
community: "Community None"
degree: 36
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ProcessManager.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 36

## Architecture Graph
```mermaid
graph LR
    center["ProcessManager.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_hook_constants_ts["hook-constants.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_spawn_ts["spawn.ts"]
    center -->|"imports"| N_shared_spawn_spawnhidden["spawnHidden[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_spawner_ts["worker-spawner.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_env_sanitizer_ts["env-sanitizer.ts"]
    center -->|"imports"| N_supervisor_env_sanitizer_sanitizeenv["sanitizeEnv[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_index_ts["index.ts"]
    center -->|"imports"| N_supervisor_index_getsupervisor["getSupervisor[]"]
    center -->|"imports"| N_supervisor_index_validateworkerpidfile["validateWorkerPidFile[]"]
    center -->|"contains"| N_infrastructure_processmanager_isbunexecutablepath["isBunExecutablePath[]"]
    center -->|"contains"| N_infrastructure_processmanager_lookupbinaryinpath["lookupBinaryInPath[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[captureProcessStartToken()]] - `imports` [EXTRACTED]
- [[classifyCwdForRemap()]] - `contains` [EXTRACTED]
- [[cleanStalePidFile()]] - `contains` [EXTRACTED]
- [[env-sanitizer.ts]] - `imports_from` [EXTRACTED]
- [[executeCwdRemap()]] - `contains` [EXTRACTED]
- [[getChildProcesses()]] - `contains` [EXTRACTED]
- [[getPlatformTimeout()]] - `contains` [EXTRACTED]
- [[getSupervisor()]] - `imports` [EXTRACTED]
- [[gitQuery()]] - `contains` [EXTRACTED]
- [[hook-constants.ts]] - `imports_from` [EXTRACTED]
- [[index.ts_11]] - `imports_from` [EXTRACTED]
- [[isBunExecutablePath()]] - `contains` [EXTRACTED]
- [[isPidFileRecent()]] - `contains` [EXTRACTED]
- [[isProcessAlive()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[lookupBinaryInPath()]] - `contains` [EXTRACTED]
- [[parseElapsedTime()]] - `contains` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[process-registry.ts]] - `imports_from` [EXTRACTED]
- [[readPidFile()]] - `contains` [EXTRACTED]
- [[removePidFile()]] - `contains` [EXTRACTED]
- [[resolveWorkerRuntimePath()]] - `contains` [EXTRACTED]
- [[resolveWorkerRuntimePathUncached()]] - `contains` [EXTRACTED]
- [[runOneTimeChromaMigration()]] - `contains` [EXTRACTED]
- [[runOneTimeCwdRemap()]] - `contains` [EXTRACTED]
- [[sanitizeEnv()]] - `imports` [EXTRACTED]
- [[spawn.ts]] - `imports_from` [EXTRACTED]
- [[spawnDaemon()]] - `contains` [EXTRACTED]
- [[spawnHidden()]] - `imports` [EXTRACTED]
- [[touchPidFile()]] - `contains` [EXTRACTED]
- [[validateWorkerPidFile()]] - `imports` [EXTRACTED]
- [[verifyPidFileOwnership()]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]
- [[worker-spawner.ts]] - `imports_from` [EXTRACTED]
- [[writePidFile()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ProcessManager.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None