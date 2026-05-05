---
source_file: "vendor/claude-mem/src/services/sqlite/observations/get.ts"
type: "code"
community: "Community None"
degree: 9
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# get.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["get.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_types_database_ts["database.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_dataroutes_ts["DataRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_observations_types_ts["types.ts"]
    center -->|"contains"| N_observations_get_getobservationbyid["getObservationById[]"]
    center -->|"contains"| N_observations_get_getobservationsbyids["getObservationsByIds[]"]
    center -->|"contains"| N_observations_get_getobservationsforsession["getObservationsForSession[]"]
    center -->|"contains"| N_observations_get_getobservationsbyfilepath["getObservationsByFilePath[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[DataRoutes.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[database.ts]] - `imports_from` [EXTRACTED]
- [[getObservationById()]] - `contains` [EXTRACTED]
- [[getObservationsByFilePath()]] - `contains` [EXTRACTED]
- [[getObservationsByIds()]] - `contains` [EXTRACTED]
- [[getObservationsForSession()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_7]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[get.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None