---
source_file: "vendor/claude-mem/src/supervisor/index.ts"
type: "code"
community: "Community None"
degree: 15
location: "L147"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# getSupervisor()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 15

## Architecture Graph
```mermaid
graph LR
    center["getSupervisor[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"calls"| N_services_worker_service_workerservice_start[".start[]"]
    center -->|"calls"| N_services_worker_service_workerservice_runmcpselfcheck[".runMcpSelfCheck[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_sessionmanager_ts["SessionManager.ts"]
    center -->|"calls"| N_worker_sessionmanager_sessionmanager_deletesession[".deleteSession[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_server_server_ts["Server.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_sync_chromamcpmanager_ts["ChromaMcpManager.ts"]
    center -->|"calls"| N_sync_chromamcpmanager_chromamcpmanager_connectinternal[".connectInternal[]"]
    center -->|"calls"| N_sync_chromamcpmanager_chromamcpmanager_stop[".stop[]"]
    center -->|"calls"| N_sync_chromamcpmanager_chromamcpmanager_registermanagedprocess[".registerManagedProcess[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_infrastructure_gracefulshutdown_ts["GracefulShutdown.ts"]
    center -->|"calls"| N_infrastructure_gracefulshutdown_performgracefulshutdown["performGracefulShutdown[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_infrastructure_processmanager_ts["ProcessManager.ts"]
    center -->|"calls"| N_infrastructure_processmanager_spawndaemon["spawnDaemon[]"]
    center -->|"contains"| N_vendor_claude_mem_src_supervisor_index_ts["index.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.connectInternal()]] - `calls` [INFERRED]
- [[.deleteSession()]] - `calls` [INFERRED]
- [[.registerManagedProcess()]] - `calls` [INFERRED]
- [[.runMcpSelfCheck()]] - `calls` [INFERRED]
- [[.start()]] - `calls` [INFERRED]
- [[.stop()_1]] - `calls` [INFERRED]
- [[ChromaMcpManager.ts]] - `imports` [EXTRACTED]
- [[GracefulShutdown.ts]] - `imports` [EXTRACTED]
- [[ProcessManager.ts]] - `imports` [EXTRACTED]
- [[Server.ts]] - `imports` [EXTRACTED]
- [[SessionManager.ts]] - `imports` [EXTRACTED]
- [[index.ts_11]] - `contains` [EXTRACTED]
- [[performGracefulShutdown()]] - `calls` [INFERRED]
- [[spawnDaemon()]] - `calls` [INFERRED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getSupervisor()]]
```

#graphify/code #graphify/INFERRED #community/Community_None