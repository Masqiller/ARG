---
source_file: "vendor/claude-mem/src/services/worker/OpenRouterProvider.ts"
type: "code"
community: "Community None"
degree: 33
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# OpenRouterProvider.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 33

## Architecture Graph
```mermaid
graph LR
    center["OpenRouterProvider.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_provider_classifiers_test_ts["provider-classifiers.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_settingsdefaultsmanager_ts["SettingsDefaultsManager.ts"]
    center -->|"imports"| N_shared_settingsdefaultsmanager_settingsdefaultsmanager["SettingsDefaultsManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_envmanager_ts["EnvManager.ts"]
    center -->|"imports"| N_shared_envmanager_getcredential["getCredential[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_sdk_prompts_ts["prompts.ts"]
    center -->|"imports"| N_sdk_prompts_buildinitprompt["buildInitPrompt[]"]
    center -->|"imports"| N_sdk_prompts_buildobservationprompt["buildObservationPrompt[]"]
    center -->|"imports"| N_sdk_prompts_buildsummaryprompt["buildSummaryPrompt[]"]
    center -->|"imports"| N_sdk_prompts_buildcontinuationprompt["buildContinuationPrompt[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_types_ts["worker-types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_sessionmanager_ts["SessionManager.ts"]
    center -->|"imports"| N_worker_sessionmanager_sessionmanager["SessionManager"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ClassifiedProviderError]] - `imports` [EXTRACTED]
- [[DatabaseManager]] - `imports` [EXTRACTED]
- [[DatabaseManager.ts]] - `imports_from` [EXTRACTED]
- [[EnvManager.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[ModeManager]] - `imports` [EXTRACTED]
- [[ModeManager.ts]] - `imports_from` [EXTRACTED]
- [[OpenRouterProvider]] - `contains` [EXTRACTED]
- [[SessionManager]] - `imports` [EXTRACTED]
- [[SessionManager.ts]] - `imports_from` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports_from` [EXTRACTED]
- [[SettingsDefaultsManager]] - `imports` [EXTRACTED]
- [[SettingsDefaultsManager.ts]] - `imports_from` [EXTRACTED]
- [[buildContinuationPrompt()]] - `imports` [EXTRACTED]
- [[buildInitPrompt()]] - `imports` [EXTRACTED]
- [[buildObservationPrompt()]] - `imports` [EXTRACTED]
- [[buildSummaryPrompt()]] - `imports` [EXTRACTED]
- [[classifyOpenRouterError()]] - `contains` [EXTRACTED]
- [[getCredential()]] - `imports` [EXTRACTED]
- [[index.ts_4]] - `imports_from` [EXTRACTED]
- [[isOpenRouterAvailable()]] - `contains` [EXTRACTED]
- [[isOpenRouterSelected()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[parseRetryAfterMs()]] - `contains` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[prompts.ts]] - `imports_from` [EXTRACTED]
- [[provider-classifiers.test.ts]] - `imports_from` [EXTRACTED]
- [[provider-errors.ts]] - `imports_from` [EXTRACTED]
- [[retry.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_5]] - `imports_from` [EXTRACTED]
- [[withRetry()]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]
- [[worker-types.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[OpenRouterProvider.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None