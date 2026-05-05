---
source_file: "vendor/claude-mem/src/shared/find-claude-executable.ts"
type: "code"
community: "Community None"
degree: 10
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# find-claude-executable.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["find-claude-executable.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_settingsdefaultsmanager_ts["SettingsDefaultsManager.ts"]
    center -->|"imports"| N_shared_settingsdefaultsmanager_settingsdefaultsmanager["SettingsDefaultsManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_shared_find_claude_executable_lookslikedesktopapppath["looksLikeDesktopAppPath[]"]
    center -->|"contains"| N_shared_find_claude_executable_verifyclaudeversion["verifyClaudeVersion[]"]
    center -->|"contains"| N_shared_find_claude_executable_findclaudeexecutable["findClaudeExecutable[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_claudeprovider_ts["ClaudeProvider.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_knowledge_knowledgeagent_ts["KnowledgeAgent.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ClaudeProvider.ts]] - `imports_from` [EXTRACTED]
- [[KnowledgeAgent.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[SettingsDefaultsManager]] - `imports` [EXTRACTED]
- [[SettingsDefaultsManager.ts]] - `imports_from` [EXTRACTED]
- [[findClaudeExecutable()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[looksLikeDesktopAppPath()]] - `contains` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[verifyClaudeVersion()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[find-claude-executable.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None