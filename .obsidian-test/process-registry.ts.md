---
source_file: "vendor/claude-mem/src/supervisor/process-registry.ts"
type: "code"
community: "Community None"
degree: 30
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# process-registry.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 30

## Architecture Graph
```mermaid
graph LR
    center["process-registry.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_supervisor_process_registry_test_ts["process-registry.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_supervisor_shutdown_test_ts["shutdown.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_spawn_ts["spawn.ts"]
    center -->|"imports"| N_shared_spawn_spawnhidden["spawnHidden[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_sessionmanager_ts["SessionManager.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_claudeprovider_ts["ClaudeProvider.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_session_generatorexithandler_ts["GeneratorExitHandler.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_server_server_ts["Server.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_infrastructure_processmanager_ts["ProcessManager.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_env_sanitizer_ts["env-sanitizer.ts"]
    center -->|"imports"| N_supervisor_env_sanitizer_sanitizeenv["sanitizeEnv[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_shutdown_ts["shutdown.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_index_ts["index.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_health_checker_ts["health-checker.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ClaudeProvider.ts]] - `imports_from` [EXTRACTED]
- [[GeneratorExitHandler.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[ProcessManager.ts]] - `imports_from` [EXTRACTED]
- [[ProcessRegistry]] - `contains` [EXTRACTED]
- [[Server.ts]] - `imports_from` [EXTRACTED]
- [[SessionManager.ts]] - `imports_from` [EXTRACTED]
- [[captureProcessStartToken()]] - `contains` [EXTRACTED]
- [[createProcessRegistry()]] - `contains` [EXTRACTED]
- [[createSdkSpawnFactory()]] - `contains` [EXTRACTED]
- [[ensureSdkProcessExit()]] - `contains` [EXTRACTED]
- [[env-sanitizer.ts]] - `imports_from` [EXTRACTED]
- [[getActiveSdkCount()]] - `contains` [EXTRACTED]
- [[getProcessRegistry()]] - `contains` [EXTRACTED]
- [[getSdkProcessForSession()]] - `contains` [EXTRACTED]
- [[health-checker.ts]] - `imports_from` [EXTRACTED]
- [[index.ts_11]] - `imports_from` [EXTRACTED]
- [[isPidAlive()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[notifySlotAvailable()]] - `contains` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[process-registry.test.ts]] - `imports_from` [EXTRACTED]
- [[sanitizeEnv()]] - `imports` [EXTRACTED]
- [[shutdown.test.ts]] - `imports_from` [EXTRACTED]
- [[shutdown.ts]] - `imports_from` [EXTRACTED]
- [[spawn.ts]] - `imports_from` [EXTRACTED]
- [[spawnHidden()]] - `imports` [EXTRACTED]
- [[spawnSdkProcess()]] - `contains` [EXTRACTED]
- [[verifyPidFileOwnership()]] - `contains` [EXTRACTED]
- [[waitForSlot()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[process-registry.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None