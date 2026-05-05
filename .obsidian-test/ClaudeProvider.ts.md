---
source_file: "vendor/claude-mem/src/services/worker/ClaudeProvider.ts"
type: "code"
community: "Community None"
degree: 40
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ClaudeProvider.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 40

## Architecture Graph
```mermaid
graph LR
    center["ClaudeProvider.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_provider_classifiers_test_ts["provider-classifiers.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports"| N_shared_paths_ensuredir["ensureDir[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_settingsdefaultsmanager_ts["SettingsDefaultsManager.ts"]
    center -->|"imports"| N_shared_settingsdefaultsmanager_settingsdefaultsmanager["SettingsDefaultsManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_find_claude_executable_ts["find-claude-executable.ts"]
    center -->|"imports"| N_shared_find_claude_executable_findclaudeexecutable["findClaudeExecutable[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_envmanager_ts["EnvManager.ts"]
    center -->|"imports"| N_shared_envmanager_buildisolatedenvwithfreshoauth["buildIsolatedEnvWithFreshOAuth[]"]
    center -->|"imports"| N_shared_envmanager_getauthmethoddescription["getAuthMethodDescription[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_sdk_prompts_ts["prompts.ts"]
    center -->|"imports"| N_sdk_prompts_buildinitprompt["buildInitPrompt[]"]
    center -->|"imports"| N_sdk_prompts_buildobservationprompt["buildObservationPrompt[]"]
    center -->|"imports"| N_sdk_prompts_buildsummaryprompt["buildSummaryPrompt[]"]
    center -->|"imports"| N_sdk_prompts_buildcontinuationprompt["buildContinuationPrompt[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ClassifiedProviderError]] - `imports` [EXTRACTED]
- [[ClaudeProvider]] - `contains` [EXTRACTED]
- [[DatabaseManager]] - `imports` [EXTRACTED]
- [[DatabaseManager.ts]] - `imports_from` [EXTRACTED]
- [[EnvManager.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[ModeManager]] - `imports` [EXTRACTED]
- [[ModeManager.ts]] - `imports_from` [EXTRACTED]
- [[RateLimitStore.ts]] - `imports_from` [EXTRACTED]
- [[SessionManager]] - `imports` [EXTRACTED]
- [[SessionManager.ts]] - `imports_from` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports_from` [EXTRACTED]
- [[SettingsDefaultsManager]] - `imports` [EXTRACTED]
- [[SettingsDefaultsManager.ts]] - `imports_from` [EXTRACTED]
- [[buildContinuationPrompt()]] - `imports` [EXTRACTED]
- [[buildInitPrompt()]] - `imports` [EXTRACTED]
- [[buildIsolatedEnvWithFreshOAuth()]] - `imports` [EXTRACTED]
- [[buildObservationPrompt()]] - `imports` [EXTRACTED]
- [[buildSummaryPrompt()]] - `imports` [EXTRACTED]
- [[classifyClaudeError()]] - `contains` [EXTRACTED]
- [[createSdkSpawnFactory()]] - `imports` [EXTRACTED]
- [[ensureDir()]] - `imports` [EXTRACTED]
- [[ensureSdkProcessExit()]] - `imports` [EXTRACTED]
- [[env-sanitizer.ts]] - `imports_from` [EXTRACTED]
- [[find-claude-executable.ts]] - `imports_from` [EXTRACTED]
- [[findClaudeExecutable()]] - `imports` [EXTRACTED]
- [[getAuthMethodDescription()]] - `imports` [EXTRACTED]
- [[getSdkProcessForSession()]] - `imports` [EXTRACTED]
- [[index.ts_4]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[process-registry.ts]] - `imports_from` [EXTRACTED]
- [[prompts.ts]] - `imports_from` [EXTRACTED]
- [[provider-classifiers.test.ts]] - `imports_from` [EXTRACTED]
- [[provider-errors.ts]] - `imports_from` [EXTRACTED]
- [[sanitizeEnv()]] - `imports` [EXTRACTED]
- [[shouldAbortForQuota()]] - `imports` [EXTRACTED]
- [[waitForSlot()]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]
- [[worker-types.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ClaudeProvider.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None