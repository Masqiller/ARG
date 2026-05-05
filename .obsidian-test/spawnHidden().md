---
source_file: "vendor/claude-mem/src/shared/spawn.ts"
type: "code"
community: "Community None"
degree: 12
location: "L6"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# spawnHidden()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 12

## Architecture Graph
```mermaid
graph LR
    center["spawnHidden[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"calls"| N_shared_worker_utils_ensureworkerrunning["ensureWorkerRunning[]"]
    center -->|"contains"| N_vendor_claude_mem_src_shared_spawn_ts["spawn.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_runtime_ts["runtime.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_infrastructure_processmanager_ts["ProcessManager.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_supervisor_process_registry_ts["process-registry.ts"]
    center -->|"calls"| N_commands_runtime_spawnbunworkercommand["spawnBunWorkerCommand[]"]
    center -->|"calls"| N_commands_runtime_runadoptcommand["runAdoptCommand[]"]
    center -->|"calls"| N_commands_runtime_runtranscriptwatchcommand["runTranscriptWatchCommand[]"]
    center -->|"calls"| N_infrastructure_processmanager_spawndaemon["spawnDaemon[]"]
    center -->|"calls"| N_supervisor_process_registry_spawnsdkprocess["spawnSdkProcess[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ProcessManager.ts]] - `imports` [EXTRACTED]
- [[ensureWorkerRunning()]] - `calls` [INFERRED]
- [[install.ts]] - `imports` [EXTRACTED]
- [[process-registry.ts]] - `imports` [EXTRACTED]
- [[runAdoptCommand()]] - `calls` [INFERRED]
- [[runTranscriptWatchCommand()]] - `calls` [INFERRED]
- [[runtime.ts]] - `imports` [EXTRACTED]
- [[spawn.ts]] - `contains` [EXTRACTED]
- [[spawnBunWorkerCommand()]] - `calls` [INFERRED]
- [[spawnDaemon()]] - `calls` [INFERRED]
- [[spawnSdkProcess()]] - `calls` [INFERRED]
- [[worker-utils.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[spawnHidden()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None