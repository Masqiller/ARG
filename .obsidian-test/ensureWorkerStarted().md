---
source_file: "vendor/claude-mem/src/services/worker-spawner.ts"
type: "code"
community: "Community None"
degree: 13
location: "L70"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ensureWorkerStarted()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["ensureWorkerStarted[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_services_worker_spawner_test_ts["worker-spawner.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_servers_mcp_server_ts["mcp-server.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_spawner_ts["worker-spawner.ts"]
    center -->|"calls"| N_services_worker_spawner_shouldskipspawnonwindows["shouldSkipSpawnOnWindows[]"]
    center -->|"calls"| N_services_worker_spawner_markworkerspawnattempted["markWorkerSpawnAttempted[]"]
    center -->|"calls"| N_services_worker_spawner_clearworkerspawnattempted["clearWorkerSpawnAttempted[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"calls"| N_infrastructure_processmanager_cleanstalepidfile["cleanStalePidFile[]"]
    center -->|"calls"| N_infrastructure_processmanager_getplatformtimeout["getPlatformTimeout[]"]
    center -->|"calls"| N_infrastructure_healthmonitor_waitforreadiness["waitForReadiness[]"]
    center -->|"calls"| N_infrastructure_processmanager_spawndaemon["spawnDaemon[]"]
    center -->|"calls"| N_infrastructure_processmanager_touchpidfile["touchPidFile[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cleanStalePidFile()]] - `calls` [INFERRED]
- [[clearWorkerSpawnAttempted()]] - `calls` [EXTRACTED]
- [[getPlatformTimeout()]] - `calls` [INFERRED]
- [[install.ts]] - `imports` [EXTRACTED]
- [[markWorkerSpawnAttempted()]] - `calls` [EXTRACTED]
- [[mcp-server.ts]] - `imports` [EXTRACTED]
- [[shouldSkipSpawnOnWindows()]] - `calls` [EXTRACTED]
- [[spawnDaemon()]] - `calls` [INFERRED]
- [[touchPidFile()]] - `calls` [INFERRED]
- [[waitForReadiness()]] - `calls` [INFERRED]
- [[worker-service.ts]] - `imports` [EXTRACTED]
- [[worker-spawner.test.ts]] - `imports` [EXTRACTED]
- [[worker-spawner.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ensureWorkerStarted()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None