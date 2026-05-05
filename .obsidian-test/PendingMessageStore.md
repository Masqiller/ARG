---
source_file: "vendor/claude-mem/src/services/sqlite/PendingMessageStore.ts"
type: "code"
community: "Community None"
degree: 16
location: "L22"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# PendingMessageStore

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 16

## Architecture Graph
```mermaid
graph LR
    center["PendingMessageStore"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_zombie_prevention_test_ts["zombie-prevention.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_sqlite_data_integrity_test_ts["data-integrity.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_services_queue_sessionqueueprocessor_test_ts["SessionQueueProcessor.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_services_sqlite_pendingmessagestore_test_ts["PendingMessageStore.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_sessionmanager_ts["SessionManager.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_queue_sessionqueueprocessor_ts["SessionQueueProcessor.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_sqlite_sessionstore_ts["SessionStore.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_sqlite_pendingmessagestore_ts["PendingMessageStore.ts"]
    center -->|"method"| N_sqlite_pendingmessagestore_pendingmessagestore_constructor[".constructor[]"]
    center -->|"method"| N_sqlite_pendingmessagestore_pendingmessagestore_enqueue[".enqueue[]"]
    center -->|"method"| N_sqlite_pendingmessagestore_pendingmessagestore_claimnextmessage[".claimNextMessage[]"]
    center -->|"method"| N_sqlite_pendingmessagestore_pendingmessagestore_clearpendingforsession[".clearPendingForSession[]"]
    center -->|"method"| N_sqlite_pendingmessagestore_pendingmessagestore_resetprocessingtopending[".resetProcessingToPending[]"]
    center -->|"method"| N_sqlite_pendingmessagestore_pendingmessagestore_getpendingcount[".getPendingCount[]"]
    center -->|"method"| N_sqlite_pendingmessagestore_pendingmessagestore_peekpendingtypes[".peekPendingTypes[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.claimNextMessage()]] - `method` [EXTRACTED]
- [[.clearPendingForSession()_1]] - `method` [EXTRACTED]
- [[.constructor()_37]] - `method` [EXTRACTED]
- [[.enqueue()]] - `method` [EXTRACTED]
- [[.getPendingCount()]] - `method` [EXTRACTED]
- [[.peekPendingTypes()]] - `method` [EXTRACTED]
- [[.resetProcessingToPending()]] - `method` [EXTRACTED]
- [[.toPendingMessage()]] - `method` [EXTRACTED]
- [[PendingMessageStore.test.ts]] - `imports` [EXTRACTED]
- [[PendingMessageStore.ts]] - `contains` [EXTRACTED]
- [[SessionManager.ts]] - `imports` [EXTRACTED]
- [[SessionQueueProcessor.test.ts]] - `imports` [EXTRACTED]
- [[SessionQueueProcessor.ts]] - `imports` [EXTRACTED]
- [[SessionStore.ts]] - `imports` [EXTRACTED]
- [[data-integrity.test.ts]] - `imports` [EXTRACTED]
- [[zombie-prevention.test.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[PendingMessageStore]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None