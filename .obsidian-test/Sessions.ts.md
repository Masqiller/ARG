---
source_file: "vendor/claude-mem/src/services/sqlite/Sessions.ts"
type: "code"
community: "Community None"
degree: 11
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Sessions.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 11

## Architecture Graph
```mermaid
graph LR
    center["Sessions.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_zombie_prevention_test_ts["zombie-prevention.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_sqlite_transactions_test_ts["transactions.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_sqlite_sessions_test_ts["sessions.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_sqlite_prompts_test_ts["prompts.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_sqlite_data_integrity_test_ts["data-integrity.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_sqlite_observations_test_ts["observations.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_sqlite_summaries_test_ts["summaries.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_services_sqlite_pendingmessagestore_test_ts["PendingMessageStore.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_services_sqlite_observations_store_subagent_label_test_ts["store-subagent-label.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[PendingMessageStore.test.ts]] - `imports_from` [EXTRACTED]
- [[data-integrity.test.ts]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[observations.test.ts]] - `imports_from` [EXTRACTED]
- [[prompts.test.ts_1]] - `imports_from` [EXTRACTED]
- [[sessions.test.ts]] - `imports_from` [EXTRACTED]
- [[store-subagent-label.test.ts]] - `imports_from` [EXTRACTED]
- [[summaries.test.ts]] - `imports_from` [EXTRACTED]
- [[transactions.test.ts]] - `imports_from` [EXTRACTED]
- [[zombie-prevention.test.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Sessions.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None