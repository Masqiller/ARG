---
source_file: "vendor/claude-mem/src/services/sqlite/Database.ts"
type: "code"
community: "Community None"
degree: 14
location: "L17"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ClaudeMemDatabase

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 14

## Architecture Graph
```mermaid
graph LR
    center["ClaudeMemDatabase"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_zombie_prevention_test_ts["zombie-prevention.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_sqlite_transactions_test_ts["transactions.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_sqlite_sessions_test_ts["sessions.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_sqlite_prompts_test_ts["prompts.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_sqlite_data_integrity_test_ts["data-integrity.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_sqlite_observations_test_ts["observations.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_sqlite_summaries_test_ts["summaries.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_services_sqlite_schema_repair_test_ts["schema-repair.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_services_sqlite_pendingmessagestore_test_ts["PendingMessageStore.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_services_sqlite_observations_store_subagent_label_test_ts["store-subagent-label.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_infrastructure_cleanup_v12_4_3_test_ts["cleanup-v12_4_3.test.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_sqlite_database_ts["Database.ts"]
    center -->|"method"| N_sqlite_database_claudememdatabase_constructor[".constructor[]"]
    center -->|"method"| N_sqlite_database_claudememdatabase_close[".close[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.close()_7]] - `method` [EXTRACTED]
- [[.constructor()_35]] - `method` [EXTRACTED]
- [[Database.ts]] - `contains` [EXTRACTED]
- [[PendingMessageStore.test.ts]] - `imports` [EXTRACTED]
- [[cleanup-v12_4_3.test.ts]] - `imports` [EXTRACTED]
- [[data-integrity.test.ts]] - `imports` [EXTRACTED]
- [[observations.test.ts]] - `imports` [EXTRACTED]
- [[prompts.test.ts_1]] - `imports` [EXTRACTED]
- [[schema-repair.test.ts]] - `imports` [EXTRACTED]
- [[sessions.test.ts]] - `imports` [EXTRACTED]
- [[store-subagent-label.test.ts]] - `imports` [EXTRACTED]
- [[summaries.test.ts]] - `imports` [EXTRACTED]
- [[transactions.test.ts]] - `imports` [EXTRACTED]
- [[zombie-prevention.test.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ClaudeMemDatabase]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None