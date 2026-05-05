---
source_file: "vendor/claude-mem/tests/services/queue/SessionQueueProcessor.test.ts"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SessionQueueProcessor.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["SessionQueueProcessor.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_queue_sessionqueueprocessor_ts["SessionQueueProcessor.ts"]
    center -->|"imports"| N_queue_sessionqueueprocessor_sessionqueueprocessor["SessionQueueProcessor"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_pendingmessagestore_ts["PendingMessageStore.ts"]
    center -->|"imports"| N_sqlite_pendingmessagestore_pendingmessagestore["PendingMessageStore"]
    center -->|"contains"| N_queue_sessionqueueprocessor_test_createmockstore["createMockStore[]"]
    center -->|"contains"| N_queue_sessionqueueprocessor_test_createmockmessage["createMockMessage[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[PendingMessageStore]] - `imports` [EXTRACTED]
- [[PendingMessageStore.ts]] - `imports_from` [EXTRACTED]
- [[SessionQueueProcessor]] - `imports` [EXTRACTED]
- [[SessionQueueProcessor.ts]] - `imports_from` [EXTRACTED]
- [[createMockMessage()]] - `contains` [EXTRACTED]
- [[createMockStore()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SessionQueueProcessor.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None