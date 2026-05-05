---
source_file: "vendor/claude-mem/src/services/infrastructure/ProcessManager.ts"
type: "code"
community: "Community None"
degree: 9
location: "L408"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# spawnDaemon()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["spawnDaemon[]"]:::centerNode
    center -->|"calls"| N_shared_spawn_spawnhidden["spawnHidden[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_spawner_ts["worker-spawner.ts"]
    center -->|"calls"| N_services_worker_spawner_ensureworkerstarted["ensureWorkerStarted[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"calls"| N_services_worker_service_main["main[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_processmanager_ts["ProcessManager.ts"]
    center -->|"calls"| N_infrastructure_processmanager_resolveworkerruntimepath["resolveWorkerRuntimePath[]"]
    center -->|"calls"| N_supervisor_index_getsupervisor["getSupervisor[]"]
    center -->|"calls"| N_supervisor_env_sanitizer_sanitizeenv["sanitizeEnv[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ProcessManager.ts]] - `contains` [EXTRACTED]
- [[ensureWorkerStarted()]] - `calls` [INFERRED]
- [[getSupervisor()]] - `calls` [INFERRED]
- [[main()_22]] - `calls` [INFERRED]
- [[resolveWorkerRuntimePath()]] - `calls` [EXTRACTED]
- [[sanitizeEnv()]] - `calls` [INFERRED]
- [[spawnHidden()]] - `calls` [INFERRED]
- [[worker-service.ts]] - `imports` [EXTRACTED]
- [[worker-spawner.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[spawnDaemon()]]
```

#graphify/code #graphify/INFERRED #community/Community_None