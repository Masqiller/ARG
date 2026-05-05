---
source_file: "vendor/claude-mem/src/supervisor/index.ts"
type: "code"
community: "Community None"
degree: 25
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# index.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 25

## Architecture Graph
```mermaid
graph LR
    center["index.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_supervisor_index_test_ts["index.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_sessionmanager_ts["SessionManager.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_server_server_ts["Server.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sync_chromamcpmanager_ts["ChromaMcpManager.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_infrastructure_gracefulshutdown_ts["GracefulShutdown.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_infrastructure_processmanager_ts["ProcessManager.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_shutdown_ts["shutdown.ts"]
    center -->|"imports"| N_supervisor_shutdown_runshutdowncascade["runShutdownCascade[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_process_registry_ts["process-registry.ts"]
    center -->|"imports"| N_supervisor_process_registry_getprocessregistry["getProcessRegistry[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ChromaMcpManager.ts]] - `imports_from` [EXTRACTED]
- [[GracefulShutdown.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[ProcessManager.ts]] - `imports_from` [EXTRACTED]
- [[ProcessRegistry]] - `imports` [EXTRACTED]
- [[Server.ts]] - `imports_from` [EXTRACTED]
- [[SessionManager.ts]] - `imports_from` [EXTRACTED]
- [[Supervisor]] - `contains` [EXTRACTED]
- [[configureSupervisorSignalHandlers()]] - `contains` [EXTRACTED]
- [[getProcessRegistry()]] - `imports` [EXTRACTED]
- [[getSupervisor()]] - `contains` [EXTRACTED]
- [[health-checker.ts]] - `imports_from` [EXTRACTED]
- [[index.test.ts]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[process-registry.ts]] - `imports_from` [EXTRACTED]
- [[runShutdownCascade()]] - `imports` [EXTRACTED]
- [[shutdown.ts]] - `imports_from` [EXTRACTED]
- [[startHealthChecker()]] - `imports` [EXTRACTED]
- [[startSupervisor()]] - `contains` [EXTRACTED]
- [[stopHealthChecker()]] - `imports` [EXTRACTED]
- [[validateWorkerPidFile()]] - `contains` [EXTRACTED]
- [[verifyPidFileOwnership()]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]
- [[worker-utils.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[index.ts_11]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None