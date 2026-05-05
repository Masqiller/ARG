---
source_file: "vendor/claude-mem/src/services/sqlite/SessionSearch.ts"
type: "code"
community: "Community None"
degree: 23
location: "L18"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SessionSearch

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 23

## Architecture Graph
```mermaid
graph LR
    center["SessionSearch"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_searchmanager_timeline_anchor_test_ts["SearchManager.timeline-anchor.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_searchmanager_ts["SearchManager.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_databasemanager_ts["DatabaseManager.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_search_searchorchestrator_ts["SearchOrchestrator.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_search_strategies_sqlitesearchstrategy_ts["SQLiteSearchStrategy.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_search_strategies_hybridsearchstrategy_ts["HybridSearchStrategy.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_sqlite_sessionsearch_ts["SessionSearch.ts"]
    center -->|"method"| N_sqlite_sessionsearch_sessionsearch_constructor[".constructor[]"]
    center -->|"method"| N_sqlite_sessionsearch_sessionsearch_ensureftstables[".ensureFTSTables[]"]
    center -->|"method"| N_sqlite_sessionsearch_sessionsearch_isfts5available[".isFts5Available[]"]
    center -->|"method"| N_sqlite_sessionsearch_sessionsearch_createftstablesandtriggers[".createFTSTablesAndTriggers[]"]
    center -->|"method"| N_sqlite_sessionsearch_sessionsearch_buildfilterclause[".buildFilterClause[]"]
    center -->|"method"| N_sqlite_sessionsearch_sessionsearch_buildorderclause[".buildOrderClause[]"]
    center -->|"method"| N_sqlite_sessionsearch_sessionsearch_searchobservations[".searchObservations[]"]
    center -->|"method"| N_sqlite_sessionsearch_sessionsearch_searchsessions[".searchSessions[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.buildFilterClause()]] - `method` [EXTRACTED]
- [[.buildOrderClause()]] - `method` [EXTRACTED]
- [[.close()_10]] - `method` [EXTRACTED]
- [[.constructor()_38]] - `method` [EXTRACTED]
- [[.createFTSTablesAndTriggers()]] - `method` [EXTRACTED]
- [[.ensureFTSTables()]] - `method` [EXTRACTED]
- [[.findByConcept()_3]] - `method` [EXTRACTED]
- [[.findByFile()_3]] - `method` [EXTRACTED]
- [[.findByType()_3]] - `method` [EXTRACTED]
- [[.getUserPromptsBySession()]] - `method` [EXTRACTED]
- [[.hasDirectChildFile()]] - `method` [EXTRACTED]
- [[.hasDirectChildFileSession()]] - `method` [EXTRACTED]
- [[.isFts5Available()]] - `method` [EXTRACTED]
- [[.searchObservations()_1]] - `method` [EXTRACTED]
- [[.searchSessions()_1]] - `method` [EXTRACTED]
- [[.searchUserPrompts()_1]] - `method` [EXTRACTED]
- [[DatabaseManager.ts]] - `imports` [EXTRACTED]
- [[HybridSearchStrategy.ts]] - `imports` [EXTRACTED]
- [[SQLiteSearchStrategy.ts]] - `imports` [EXTRACTED]
- [[SearchManager.timeline-anchor.test.ts]] - `imports` [EXTRACTED]
- [[SearchManager.ts]] - `imports` [EXTRACTED]
- [[SearchOrchestrator.ts]] - `imports` [EXTRACTED]
- [[SessionSearch.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SessionSearch]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None