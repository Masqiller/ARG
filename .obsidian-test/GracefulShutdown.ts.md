---
source_file: "vendor/claude-mem/src/services/infrastructure/GracefulShutdown.ts"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# GracefulShutdown.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["GracefulShutdown.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_index_ts["index.ts"]
    center -->|"imports"| N_supervisor_index_getsupervisor["getSupervisor[]"]
    center -->|"contains"| N_infrastructure_gracefulshutdown_performgracefulshutdown["performGracefulShutdown[]"]
    center -->|"contains"| N_infrastructure_gracefulshutdown_closehttpserver["closeHttpServer[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[closeHttpServer()]] - `contains` [EXTRACTED]
- [[getSupervisor()]] - `imports` [EXTRACTED]
- [[index.ts_11]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[performGracefulShutdown()]] - `contains` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[GracefulShutdown.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None