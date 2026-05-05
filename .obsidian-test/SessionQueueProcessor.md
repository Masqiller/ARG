---
source_file: "vendor/claude-mem/src/services/queue/SessionQueueProcessor.ts"
type: "code"
community: "Community None"
degree: 8
location: "L14"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SessionQueueProcessor

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["SessionQueueProcessor"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_services_queue_sessionqueueprocessor_test_ts["SessionQueueProcessor.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_sessionmanager_ts["SessionManager.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_queue_sessionqueueprocessor_ts["SessionQueueProcessor.ts"]
    center -->|"method"| N_queue_sessionqueueprocessor_sessionqueueprocessor_constructor[".constructor[]"]
    center -->|"method"| N_queue_sessionqueueprocessor_sessionqueueprocessor_createiterator[".createIterator[]"]
    center -->|"method"| N_queue_sessionqueueprocessor_sessionqueueprocessor_topendingmessagewithid[".toPendingMessageWithId[]"]
    center -->|"method"| N_queue_sessionqueueprocessor_sessionqueueprocessor_handlewaitphase[".handleWaitPhase[]"]
    center -->|"method"| N_queue_sessionqueueprocessor_sessionqueueprocessor_waitformessage[".waitForMessage[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_31]] - `method` [EXTRACTED]
- [[.createIterator()]] - `method` [EXTRACTED]
- [[.handleWaitPhase()]] - `method` [EXTRACTED]
- [[.toPendingMessageWithId()]] - `method` [EXTRACTED]
- [[.waitForMessage()]] - `method` [EXTRACTED]
- [[SessionManager.ts]] - `imports` [EXTRACTED]
- [[SessionQueueProcessor.test.ts]] - `imports` [EXTRACTED]
- [[SessionQueueProcessor.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SessionQueueProcessor]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None