---
source_file: "vendor/claude-mem/tests/zombie-prevention.test.ts"
type: "code"
community: "Community None"
degree: 9
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# zombie-prevention.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["zombie-prevention.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_database_ts["Database.ts"]
    center -->|"imports"| N_sqlite_database_claudememdatabase["ClaudeMemDatabase"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_pendingmessagestore_ts["PendingMessageStore.ts"]
    center -->|"imports"| N_sqlite_pendingmessagestore_pendingmessagestore["PendingMessageStore"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessions_ts["Sessions.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_types_ts["worker-types.ts"]
    center -->|"contains"| N_tests_zombie_prevention_test_createmocksession["createMockSession[]"]
    center -->|"contains"| N_tests_zombie_prevention_test_createdbsession["createDbSession[]"]
    center -->|"contains"| N_tests_zombie_prevention_test_enqueuetestmessage["enqueueTestMessage[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ClaudeMemDatabase]] - `imports` [EXTRACTED]
- [[Database.ts]] - `imports_from` [EXTRACTED]
- [[PendingMessageStore]] - `imports` [EXTRACTED]
- [[PendingMessageStore.ts]] - `imports_from` [EXTRACTED]
- [[Sessions.ts]] - `imports_from` [EXTRACTED]
- [[createDbSession()]] - `contains` [EXTRACTED]
- [[createMockSession()]] - `contains` [EXTRACTED]
- [[enqueueTestMessage()]] - `contains` [EXTRACTED]
- [[worker-types.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[zombie-prevention.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None