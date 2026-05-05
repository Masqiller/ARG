---
source_file: "vendor/claude-mem/src/services/sqlite/summaries/recent.ts"
type: "code"
community: "Community None"
degree: 6
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
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["recent.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_summaries_types_ts["types.ts"]
    center -->|"contains"| N_summaries_recent_getrecentsummaries["getRecentSummaries[]"]
    center -->|"contains"| N_summaries_recent_getrecentsummarieswithsessioninfo["getRecentSummariesWithSessionInfo[]"]
    center -->|"contains"| N_summaries_recent_getallrecentsummaries["getAllRecentSummaries[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[getAllRecentSummaries()]] - `contains` [EXTRACTED]
- [[getRecentSummaries()]] - `contains` [EXTRACTED]
- [[getRecentSummariesWithSessionInfo()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_8]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[recent.ts_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None