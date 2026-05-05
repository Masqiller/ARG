---
source_file: "vendor/claude-mem/src/shared/paths.ts"
type: "code"
community: "Community None"
degree: 16
location: "L70"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ensureDir()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 16

## Architecture Graph
```mermaid
graph LR
    center["ensureDir[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"calls"| N_shared_paths_ensurealldatadirs["ensureAllDataDirs[]"]
    center -->|"calls"| N_shared_paths_ensuremodesdir["ensureModesDir[]"]
    center -->|"calls"| N_shared_paths_ensureallclaudedirs["ensureAllClaudeDirs[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_claudeprovider_ts["ClaudeProvider.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_knowledge_knowledgeagent_ts["KnowledgeAgent.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_sqlite_database_ts["Database.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_sqlite_sessionstore_ts["SessionStore.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_sqlite_sessionsearch_ts["SessionSearch.ts"]
    center -->|"calls"| N_worker_claudeprovider_claudeprovider_startsession[".startSession[]"]
    center -->|"calls"| N_knowledge_knowledgeagent_knowledgeagent_prime[".prime[]"]
    center -->|"calls"| N_knowledge_knowledgeagent_knowledgeagent_executequery[".executeQuery[]"]
    center -->|"calls"| N_sqlite_database_claudememdatabase_constructor[".constructor[]"]
    center -->|"calls"| N_sqlite_database_databasemanager_initialize[".initialize[]"]
    center -->|"calls"| N_sqlite_sessionstore_sessionstore_constructor[".constructor[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_35]] - `calls` [INFERRED]
- [[.constructor()_36]] - `calls` [INFERRED]
- [[.constructor()_38]] - `calls` [INFERRED]
- [[.executeQuery()]] - `calls` [INFERRED]
- [[.initialize()_2]] - `calls` [INFERRED]
- [[.prime()]] - `calls` [INFERRED]
- [[.startSession()]] - `calls` [INFERRED]
- [[ClaudeProvider.ts]] - `imports` [EXTRACTED]
- [[Database.ts]] - `imports` [EXTRACTED]
- [[KnowledgeAgent.ts]] - `imports` [EXTRACTED]
- [[SessionSearch.ts]] - `imports` [EXTRACTED]
- [[SessionStore.ts]] - `imports` [EXTRACTED]
- [[ensureAllClaudeDirs()]] - `calls` [EXTRACTED]
- [[ensureAllDataDirs()]] - `calls` [EXTRACTED]
- [[ensureModesDir()]] - `calls` [EXTRACTED]
- [[paths.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ensureDir()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None