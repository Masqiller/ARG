---
source_file: "vendor/claude-mem/src/services/worker/knowledge/KnowledgeAgent.ts"
type: "code"
community: "Community None"
degree: 20
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# KnowledgeAgent.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 20

## Architecture Graph
```mermaid
graph LR
    center["KnowledgeAgent.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports"| N_shared_paths_ensuredir["ensureDir[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_settingsdefaultsmanager_ts["SettingsDefaultsManager.ts"]
    center -->|"imports"| N_shared_settingsdefaultsmanager_settingsdefaultsmanager["SettingsDefaultsManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_find_claude_executable_ts["find-claude-executable.ts"]
    center -->|"imports"| N_shared_find_claude_executable_findclaudeexecutable["findClaudeExecutable[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_envmanager_ts["EnvManager.ts"]
    center -->|"imports"| N_shared_envmanager_buildisolatedenvwithfreshoauth["buildIsolatedEnvWithFreshOAuth[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_corpusroutes_ts["CorpusRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_knowledge_corpusstore_ts["CorpusStore.ts"]
    center -->|"imports"| N_knowledge_corpusstore_corpusstore["CorpusStore"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_knowledge_corpusrenderer_ts["CorpusRenderer.ts"]
    center -->|"imports"| N_knowledge_corpusrenderer_corpusrenderer["CorpusRenderer"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_knowledge_types_ts["types.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CorpusRenderer]] - `imports` [EXTRACTED]
- [[CorpusRenderer.ts]] - `imports_from` [EXTRACTED]
- [[CorpusRoutes.ts]] - `imports_from` [EXTRACTED]
- [[CorpusStore]] - `imports` [EXTRACTED]
- [[CorpusStore.ts]] - `imports_from` [EXTRACTED]
- [[EnvManager.ts]] - `imports_from` [EXTRACTED]
- [[KnowledgeAgent]] - `contains` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[SettingsDefaultsManager]] - `imports` [EXTRACTED]
- [[SettingsDefaultsManager.ts]] - `imports_from` [EXTRACTED]
- [[buildIsolatedEnvWithFreshOAuth()]] - `imports` [EXTRACTED]
- [[ensureDir()]] - `imports` [EXTRACTED]
- [[env-sanitizer.ts]] - `imports_from` [EXTRACTED]
- [[find-claude-executable.ts]] - `imports_from` [EXTRACTED]
- [[findClaudeExecutable()]] - `imports` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[sanitizeEnv()]] - `imports` [EXTRACTED]
- [[types.ts_3]] - `imports_from` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[KnowledgeAgent.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None