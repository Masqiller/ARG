---
source_file: "vendor/claude-mem/src/services/infrastructure/GracefulShutdown.ts"
type: "code"
community: "Community None"
degree: 5
location: "L30"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# performGracefulShutdown()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["performGracefulShutdown[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"calls"| N_services_worker_service_workerservice_shutdown[".shutdown[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_gracefulshutdown_ts["GracefulShutdown.ts"]
    center -->|"calls"| N_infrastructure_gracefulshutdown_closehttpserver["closeHttpServer[]"]
    center -->|"calls"| N_supervisor_index_getsupervisor["getSupervisor[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.shutdown()]] - `calls` [INFERRED]
- [[GracefulShutdown.ts]] - `contains` [EXTRACTED]
- [[closeHttpServer()]] - `calls` [EXTRACTED]
- [[getSupervisor()]] - `calls` [INFERRED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[performGracefulShutdown()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None