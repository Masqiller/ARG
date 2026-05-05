---
source_file: "vendor/claude-mem/src/shared/EnvManager.ts"
type: "code"
community: "Community None"
degree: 17
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# EnvManager.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 17

## Architecture Graph
```mermaid
graph LR
    center["EnvManager.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_shared_envmanager_parseenvfile["parseEnvFile[]"]
    center -->|"contains"| N_shared_envmanager_serializeenvfile["serializeEnvFile[]"]
    center -->|"contains"| N_shared_envmanager_loadclaudememenv["loadClaudeMemEnv[]"]
    center -->|"contains"| N_shared_envmanager_saveclaudememenv["saveClaudeMemEnv[]"]
    center -->|"contains"| N_shared_envmanager_buildisolatedenv["buildIsolatedEnv[]"]
    center -->|"contains"| N_shared_envmanager_buildisolatedenvwithfreshoauth["buildIsolatedEnvWithFreshOAuth[]"]
    center -->|"contains"| N_shared_envmanager_getcredential["getCredential[]"]
    center -->|"contains"| N_shared_envmanager_hasanthropicapikey["hasAnthropicApiKey[]"]
    center -->|"contains"| N_shared_envmanager_getauthmethoddescription["getAuthMethodDescription[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_claudeprovider_ts["ClaudeProvider.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_openrouterprovider_ts["OpenRouterProvider.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ClaudeProvider.ts]] - `imports_from` [EXTRACTED]
- [[GeminiProvider.ts]] - `imports_from` [EXTRACTED]
- [[KnowledgeAgent.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[OpenRouterProvider.ts]] - `imports_from` [EXTRACTED]
- [[buildIsolatedEnv()]] - `contains` [EXTRACTED]
- [[buildIsolatedEnvWithFreshOAuth()]] - `contains` [EXTRACTED]
- [[getAuthMethodDescription()]] - `contains` [EXTRACTED]
- [[getCredential()]] - `contains` [EXTRACTED]
- [[hasAnthropicApiKey()]] - `contains` [EXTRACTED]
- [[loadClaudeMemEnv()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[parseEnvFile()]] - `contains` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[saveClaudeMemEnv()]] - `contains` [EXTRACTED]
- [[serializeEnvFile()]] - `contains` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[EnvManager.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None