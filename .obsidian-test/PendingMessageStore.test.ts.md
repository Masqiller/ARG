---
source_file: "vendor/claude-mem/tests/services/sqlite/PendingMessageStore.test.ts"
type: "code"
community: "Community None"
degree: 8
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# PendingMessageStore.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["PendingMessageStore.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_database_ts["Database.ts"]
    center -->|"imports"| N_sqlite_database_claudememdatabase["ClaudeMemDatabase"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_pendingmessagestore_ts["PendingMessageStore.ts"]
    center -->|"imports"| N_sqlite_pendingmessagestore_pendingmessagestore["PendingMessageStore"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessions_ts["Sessions.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_types_ts["worker-types.ts"]
    center -->|"contains"| N_sqlite_pendingmessagestore_test_enqueuemessage["enqueueMessage[]"]
    center -->|"contains"| N_sqlite_pendingmessagestore_test_makemessagestaleprocessing["makeMessageStaleProcessing[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ClaudeMemDatabase]] - `imports` [EXTRACTED]
- [[Database.ts]] - `imports_from` [EXTRACTED]
- [[PendingMessageStore]] - `imports` [EXTRACTED]
- [[PendingMessageStore.ts]] - `imports_from` [EXTRACTED]
- [[Sessions.ts]] - `imports_from` [EXTRACTED]
- [[enqueueMessage()]] - `contains` [EXTRACTED]
- [[makeMessageStaleProcessing()]] - `contains` [EXTRACTED]
- [[worker-types.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[PendingMessageStore.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None