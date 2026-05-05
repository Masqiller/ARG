---
source_file: "vendor/claude-mem/src/services/sqlite/summaries/get.ts"
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
    center -->|"imports_from"| N_vendor_claude_mem_src_types_database_ts["database.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_summaries_types_ts["types.ts"]
    center -->|"contains"| N_summaries_get_getsummaryforsession["getSummaryForSession[]"]
    center -->|"contains"| N_summaries_get_getsummarybyid["getSummaryById[]"]
    center -->|"contains"| N_summaries_get_getsummariesbyids["getSummariesByIds[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[database.ts]] - `imports_from` [EXTRACTED]
- [[getSummariesByIds()]] - `contains` [EXTRACTED]
- [[getSummaryById()]] - `contains` [EXTRACTED]
- [[getSummaryForSession()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_8]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[get.ts_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None