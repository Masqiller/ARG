---
source_file: "vendor/claude-mem/src/services/worker/SessionManager.ts"
type: "code"
community: "Community None"
degree: 33
location: "L12"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SessionManager

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 33

## Architecture Graph
```mermaid
graph LR
    center["SessionManager"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_gemini_provider_test_ts["gemini_provider.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_worker_agents_response_processor_test_ts["response-processor.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_sessionmanager_ts["SessionManager.ts"]
    center -->|"method"| N_worker_sessionmanager_sessionmanager_constructor[".constructor[]"]
    center -->|"method"| N_worker_sessionmanager_sessionmanager_getpendingstore[".getPendingStore[]"]
    center -->|"method"| N_worker_sessionmanager_sessionmanager_setonsessiondeleted[".setOnSessionDeleted[]"]
    center -->|"method"| N_worker_sessionmanager_sessionmanager_setonpendingmutate[".setOnPendingMutate[]"]
    center -->|"method"| N_worker_sessionmanager_sessionmanager_initializesession[".initializeSession[]"]
    center -->|"method"| N_worker_sessionmanager_sessionmanager_getsession[".getSession[]"]
    center -->|"method"| N_worker_sessionmanager_sessionmanager_queueobservation[".queueObservation[]"]
    center -->|"method"| N_worker_sessionmanager_sessionmanager_queuesummarize[".queueSummarize[]"]
    center -->|"method"| N_worker_sessionmanager_sessionmanager_clearpendingforsession[".clearPendingForSession[]"]
    center -->|"method"| N_worker_sessionmanager_sessionmanager_deletesession[".deleteSession[]"]
    center -->|"method"| N_worker_sessionmanager_sessionmanager_removesessionimmediate[".removeSessionImmediate[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.clearPendingForSession()]] - `method` [EXTRACTED]
- [[.constructor()_5]] - `method` [EXTRACTED]
- [[.deleteSession()]] - `method` [EXTRACTED]
- [[.getActiveSessionCount()]] - `method` [EXTRACTED]
- [[.getMessageIterator()]] - `method` [EXTRACTED]
- [[.getPendingMessageStore()]] - `method` [EXTRACTED]
- [[.getPendingStore()]] - `method` [EXTRACTED]
- [[.getSession()]] - `method` [EXTRACTED]
- [[.getTotalActiveWork()]] - `method` [EXTRACTED]
- [[.getTotalQueueDepth()]] - `method` [EXTRACTED]
- [[.hasPendingMessages()]] - `method` [EXTRACTED]
- [[.initializeSession()]] - `method` [EXTRACTED]
- [[.isAnySessionProcessing()]] - `method` [EXTRACTED]
- [[.queueObservation()]] - `method` [EXTRACTED]
- [[.queueSummarize()]] - `method` [EXTRACTED]
- [[.removeSessionImmediate()]] - `method` [EXTRACTED]
- [[.setOnPendingMutate()]] - `method` [EXTRACTED]
- [[.setOnSessionDeleted()]] - `method` [EXTRACTED]
- [[.shutdownAll()]] - `method` [EXTRACTED]
- [[ClaudeProvider.ts]] - `imports` [EXTRACTED]
- [[DataRoutes.ts]] - `imports` [EXTRACTED]
- [[GeminiProvider.ts]] - `imports` [EXTRACTED]
- [[GeneratorExitHandler.ts]] - `imports` [EXTRACTED]
- [[OpenRouterProvider.ts]] - `imports` [EXTRACTED]
- [[ResponseProcessor.ts]] - `imports` [EXTRACTED]
- [[SessionCompletionHandler.ts]] - `imports` [EXTRACTED]
- [[SessionManager.ts]] - `contains` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports` [EXTRACTED]
- [[ViewerRoutes.ts]] - `imports` [EXTRACTED]
- [[gemini_provider.test.ts]] - `imports` [EXTRACTED]
- [[response-processor.test.ts]] - `imports` [EXTRACTED]
- [[shared.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SessionManager]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None