---
source_file: "vendor/claude-mem/src/services/sqlite/observations/recent.ts"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# recent.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["recent.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_dataroutes_ts["DataRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_observations_types_ts["types.ts"]
    center -->|"contains"| N_observations_recent_getrecentobservations["getRecentObservations[]"]
    center -->|"contains"| N_observations_recent_getallrecentobservations["getAllRecentObservations[]"]
    center -->|"contains"| N_observations_recent_getfirstobservationcreatedat["getFirstObservationCreatedAt[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[DataRoutes.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[getAllRecentObservations()]] - `contains` [EXTRACTED]
- [[getFirstObservationCreatedAt()]] - `contains` [EXTRACTED]
- [[getRecentObservations()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_7]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[recent.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None