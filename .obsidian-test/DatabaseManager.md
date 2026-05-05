---
source_file: "vendor/claude-mem/src/services/worker/DatabaseManager.ts"
type: "code"
community: "Community None"
degree: 23
location: "L11"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# DatabaseManager

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 23

## Architecture Graph
```mermaid
graph LR
    center["DatabaseManager"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_gemini_provider_test_ts["gemini_provider.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_worker_agents_response_processor_test_ts["response-processor.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_sessionmanager_ts["SessionManager.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_paginationhelper_ts["PaginationHelper.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_databasemanager_ts["DatabaseManager.ts"]
    center -->|"method"| N_worker_databasemanager_databasemanager_initialize[".initialize[]"]
    center -->|"method"| N_worker_databasemanager_databasemanager_close[".close[]"]
    center -->|"method"| N_worker_databasemanager_databasemanager_getsessionstore[".getSessionStore[]"]
    center -->|"method"| N_worker_databasemanager_databasemanager_getsessionsearch[".getSessionSearch[]"]
    center -->|"method"| N_worker_databasemanager_databasemanager_getchromasync[".getChromaSync[]"]
    center -->|"method"| N_worker_databasemanager_databasemanager_getsessionbyid[".getSessionById[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_claudeprovider_ts["ClaudeProvider.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_openrouterprovider_ts["OpenRouterProvider.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_geminiprovider_ts["GeminiProvider.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.close()_5]] - `method` [EXTRACTED]
- [[.getChromaSync()]] - `method` [EXTRACTED]
- [[.getSessionById()]] - `method` [EXTRACTED]
- [[.getSessionSearch()]] - `method` [EXTRACTED]
- [[.getSessionStore()_1]] - `method` [EXTRACTED]
- [[.initialize()_1]] - `method` [EXTRACTED]
- [[ClaudeProvider.ts]] - `imports` [EXTRACTED]
- [[DataRoutes.ts]] - `imports` [EXTRACTED]
- [[DatabaseManager.ts]] - `contains` [EXTRACTED]
- [[GeminiProvider.ts]] - `imports` [EXTRACTED]
- [[MemoryRoutes.ts]] - `imports` [EXTRACTED]
- [[OpenRouterProvider.ts]] - `imports` [EXTRACTED]
- [[PaginationHelper.ts]] - `imports` [EXTRACTED]
- [[ResponseProcessor.ts]] - `imports` [EXTRACTED]
- [[SessionCompletionHandler.ts]] - `imports` [EXTRACTED]
- [[SessionManager.ts]] - `imports` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports` [EXTRACTED]
- [[SettingsManager.ts]] - `imports` [EXTRACTED]
- [[ViewerRoutes.ts]] - `imports` [EXTRACTED]
- [[gemini_provider.test.ts]] - `imports` [EXTRACTED]
- [[response-processor.test.ts]] - `imports` [EXTRACTED]
- [[shared.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[DatabaseManager]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None