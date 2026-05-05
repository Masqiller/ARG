---
source_file: "vendor/claude-mem/src/services/sqlite/summaries/types.ts"
type: "code"
community: "Community None"
degree: 8
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# types.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["types.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_sqlite_transactions_test_ts["transactions.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_sqlite_summaries_test_ts["summaries.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_transactions_ts["transactions.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_summaries_store_ts["store.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_summaries_get_ts["get.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_summaries_recent_ts["recent.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[get.ts_1]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[recent.ts_1]] - `imports_from` [EXTRACTED]
- [[store.ts_1]] - `imports_from` [EXTRACTED]
- [[summaries.test.ts]] - `imports_from` [EXTRACTED]
- [[transactions.test.ts]] - `imports_from` [EXTRACTED]
- [[transactions.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[types.ts_8]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None