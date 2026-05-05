---
source_file: "vendor/claude-mem/src/services/worker/search/SearchOrchestrator.ts"
type: "code"
community: "Community None"
degree: 25
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SearchOrchestrator.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 25

## Architecture Graph
```mermaid
graph LR
    center["SearchOrchestrator.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_search_search_orchestrator_test_ts["search-orchestrator.test.ts"]
    center -->|"imports_from"| N_services_worker_service_workerservice_initializebackground[".initializeBackground[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_errors_ts["errors.ts"]
    center -->|"imports"| N_search_errors_chromaunavailableerror["ChromaUnavailableError"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_resultformatter_ts["ResultFormatter.ts"]
    center -->|"imports"| N_search_resultformatter_resultformatter["ResultFormatter"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessionsearch_ts["SessionSearch.ts"]
    center -->|"imports"| N_sqlite_sessionsearch_sessionsearch["SessionSearch"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessionstore_ts["SessionStore.ts"]
    center -->|"imports"| N_sqlite_sessionstore_sessionstore["SessionStore"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sync_chromasync_ts["ChromaSync.ts"]
    center -->|"imports"| N_sync_chromasync_chromasync["ChromaSync"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_strategies_chromasearchstrategy_ts["ChromaSearchStrategy.ts"]
    center -->|"imports"| N_strategies_chromasearchstrategy_chromasearchstrategy["ChromaSearchStrategy"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_strategies_sqlitesearchstrategy_ts["SQLiteSearchStrategy.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.initializeBackground()]] - `imports_from` [EXTRACTED]
- [[ChromaSearchStrategy]] - `imports` [EXTRACTED]
- [[ChromaSearchStrategy.ts]] - `imports_from` [EXTRACTED]
- [[ChromaSync]] - `imports` [EXTRACTED]
- [[ChromaSync.ts]] - `imports_from` [EXTRACTED]
- [[ChromaUnavailableError]] - `imports` [EXTRACTED]
- [[CorpusBuilder.ts]] - `imports_from` [EXTRACTED]
- [[HybridSearchStrategy]] - `imports` [EXTRACTED]
- [[HybridSearchStrategy.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[ResultFormatter]] - `imports` [EXTRACTED]
- [[ResultFormatter.ts]] - `imports_from` [EXTRACTED]
- [[SQLiteSearchStrategy]] - `imports` [EXTRACTED]
- [[SQLiteSearchStrategy.ts]] - `imports_from` [EXTRACTED]
- [[SearchOrchestrator]] - `contains` [EXTRACTED]
- [[SessionSearch]] - `imports` [EXTRACTED]
- [[SessionSearch.ts]] - `imports_from` [EXTRACTED]
- [[SessionStore]] - `imports` [EXTRACTED]
- [[SessionStore.ts]] - `imports_from` [EXTRACTED]
- [[TimelineBuilder]] - `imports` [EXTRACTED]
- [[TimelineBuilder.ts]] - `imports_from` [EXTRACTED]
- [[errors.ts_1]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[search-orchestrator.test.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_2]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SearchOrchestrator.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None