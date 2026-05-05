---
source_file: "vendor/claude-mem/src/services/worker/search/types.ts"
type: "code"
community: "Community None"
degree: 14
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# types.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 14

## Architecture Graph
```mermaid
graph LR
    center["types.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_search_result_formatter_test_ts["result-formatter.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_search_search_orchestrator_test_ts["search-orchestrator.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_search_strategies_sqlite_search_strategy_test_ts["sqlite-search-strategy.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_search_strategies_chroma_search_strategy_test_ts["chroma-search-strategy.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_search_strategies_hybrid_search_strategy_test_ts["hybrid-search-strategy.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_resultformatter_ts["ResultFormatter.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_searchorchestrator_ts["SearchOrchestrator.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_timelinebuilder_ts["TimelineBuilder.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_types_ts["types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_strategies_sqlitesearchstrategy_ts["SQLiteSearchStrategy.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_strategies_hybridsearchstrategy_ts["HybridSearchStrategy.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_strategies_chromasearchstrategy_ts["ChromaSearchStrategy.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_strategies_searchstrategy_ts["SearchStrategy.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_filters_datefilter_ts["DateFilter.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ChromaSearchStrategy.ts]] - `imports_from` [EXTRACTED]
- [[DateFilter.ts]] - `imports_from` [EXTRACTED]
- [[HybridSearchStrategy.ts]] - `imports_from` [EXTRACTED]
- [[ResultFormatter.ts]] - `imports_from` [EXTRACTED]
- [[SQLiteSearchStrategy.ts]] - `imports_from` [EXTRACTED]
- [[SearchOrchestrator.ts]] - `imports_from` [EXTRACTED]
- [[SearchStrategy.ts]] - `imports_from` [EXTRACTED]
- [[TimelineBuilder.ts]] - `imports_from` [EXTRACTED]
- [[chroma-search-strategy.test.ts]] - `imports_from` [EXTRACTED]
- [[hybrid-search-strategy.test.ts]] - `imports_from` [EXTRACTED]
- [[result-formatter.test.ts]] - `imports_from` [EXTRACTED]
- [[search-orchestrator.test.ts]] - `imports_from` [EXTRACTED]
- [[sqlite-search-strategy.test.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_6]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[types.ts_2]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None