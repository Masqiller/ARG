---
source_file: "vendor/claude-mem/src/services/worker-types.ts"
type: "code"
community: "Community None"
degree: 20
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# worker-types.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 20

## Architecture Graph
```mermaid
graph LR
    center["worker-types.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_zombie_prevention_test_ts["zombie-prevention.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_agents_session_cleanup_helper_test_ts["session-cleanup-helper.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_agents_response_processor_test_ts["response-processor.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_services_sqlite_pendingmessagestore_test_ts["PendingMessageStore.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_restartguard_ts["RestartGuard.ts"]
    center -->|"imports"| N_worker_restartguard_restartguard["RestartGuard"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_ssebroadcaster_ts["SSEBroadcaster.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_sessionmanager_ts["SessionManager.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_paginationhelper_ts["PaginationHelper.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_databasemanager_ts["DatabaseManager.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_claudeprovider_ts["ClaudeProvider.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_openrouterprovider_ts["OpenRouterProvider.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_geminiprovider_ts["GeminiProvider.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_settingsmanager_ts["SettingsManager.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_agents_sessioncleanuphelper_ts["SessionCleanupHelper.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ClaudeProvider.ts]] - `imports_from` [EXTRACTED]
- [[DatabaseManager.ts]] - `imports_from` [EXTRACTED]
- [[GeminiProvider.ts]] - `imports_from` [EXTRACTED]
- [[GeneratorExitHandler.ts]] - `imports_from` [EXTRACTED]
- [[OpenRouterProvider.ts]] - `imports_from` [EXTRACTED]
- [[PaginationHelper.ts]] - `imports_from` [EXTRACTED]
- [[PendingMessageStore.test.ts]] - `imports_from` [EXTRACTED]
- [[PendingMessageStore.ts]] - `imports_from` [EXTRACTED]
- [[ResponseProcessor.ts]] - `imports_from` [EXTRACTED]
- [[RestartGuard]] - `imports` [EXTRACTED]
- [[RestartGuard.ts]] - `imports_from` [EXTRACTED]
- [[SSEBroadcaster.ts]] - `imports_from` [EXTRACTED]
- [[SessionCleanupHelper.ts]] - `imports_from` [EXTRACTED]
- [[SessionManager.ts]] - `imports_from` [EXTRACTED]
- [[SessionQueueProcessor.ts]] - `imports_from` [EXTRACTED]
- [[SettingsManager.ts]] - `imports_from` [EXTRACTED]
- [[response-processor.test.ts]] - `imports_from` [EXTRACTED]
- [[session-cleanup-helper.test.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_1]] - `imports_from` [EXTRACTED]
- [[zombie-prevention.test.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[worker-types.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None