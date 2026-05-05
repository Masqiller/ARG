---
source_file: "vendor/claude-mem/src/services/queue/SessionQueueProcessor.ts"
type: "code"
community: "Community None"
degree: 8
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SessionQueueProcessor.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["SessionQueueProcessor.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_services_queue_sessionqueueprocessor_test_ts["SessionQueueProcessor.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_types_ts["worker-types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_sessionmanager_ts["SessionManager.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_pendingmessagestore_ts["PendingMessageStore.ts"]
    center -->|"imports"| N_sqlite_pendingmessagestore_pendingmessagestore["PendingMessageStore"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_queue_sessionqueueprocessor_sessionqueueprocessor["SessionQueueProcessor"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[PendingMessageStore]] - `imports` [EXTRACTED]
- [[PendingMessageStore.ts]] - `imports_from` [EXTRACTED]
- [[SessionManager.ts]] - `imports_from` [EXTRACTED]
- [[SessionQueueProcessor]] - `contains` [EXTRACTED]
- [[SessionQueueProcessor.test.ts]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[worker-types.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SessionQueueProcessor.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None