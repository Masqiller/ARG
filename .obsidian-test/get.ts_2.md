---
source_file: "vendor/claude-mem/src/services/sqlite/sessions/get.ts"
type: "code"
community: "Community None"
degree: 7
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
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["get.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessions_types_ts["types.ts"]
    center -->|"contains"| N_sessions_get_getsessionbyid["getSessionById[]"]
    center -->|"contains"| N_sessions_get_getsdksessionsbysessionids["getSdkSessionsBySessionIds[]"]
    center -->|"contains"| N_sessions_get_getrecentsessionswithstatus["getRecentSessionsWithStatus[]"]
    center -->|"contains"| N_sessions_get_getsessionsummarybyid["getSessionSummaryById[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[getRecentSessionsWithStatus()]] - `contains` [EXTRACTED]
- [[getSdkSessionsBySessionIds()]] - `contains` [EXTRACTED]
- [[getSessionById()]] - `contains` [EXTRACTED]
- [[getSessionSummaryById()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_9]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[get.ts_2]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None