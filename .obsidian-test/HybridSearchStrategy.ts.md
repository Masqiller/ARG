---
source_file: "vendor/claude-mem/src/services/worker/search/strategies/HybridSearchStrategy.ts"
type: "code"
community: "Community None"
degree: 13
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# HybridSearchStrategy.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["HybridSearchStrategy.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_search_strategies_hybrid_search_strategy_test_ts["hybrid-search-strategy.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_searchorchestrator_ts["SearchOrchestrator.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_types_ts["types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_strategies_searchstrategy_ts["SearchStrategy.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sync_chromasync_ts["ChromaSync.ts"]
    center -->|"imports"| N_sync_chromasync_chromasync["ChromaSync"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessionstore_ts["SessionStore.ts"]
    center -->|"imports"| N_sqlite_sessionstore_sessionstore["SessionStore"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessionsearch_ts["SessionSearch.ts"]
    center -->|"imports"| N_sqlite_sessionsearch_sessionsearch["SessionSearch"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_strategies_hybridsearchstrategy_hybridsearchstrategy["HybridSearchStrategy"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ChromaSync]] - `imports` [EXTRACTED]
- [[ChromaSync.ts]] - `imports_from` [EXTRACTED]
- [[HybridSearchStrategy]] - `contains` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[SearchOrchestrator.ts]] - `imports_from` [EXTRACTED]
- [[SearchStrategy.ts]] - `imports_from` [EXTRACTED]
- [[SessionSearch]] - `imports` [EXTRACTED]
- [[SessionSearch.ts]] - `imports_from` [EXTRACTED]
- [[SessionStore]] - `imports` [EXTRACTED]
- [[SessionStore.ts]] - `imports_from` [EXTRACTED]
- [[hybrid-search-strategy.test.ts]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_2]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[HybridSearchStrategy.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None