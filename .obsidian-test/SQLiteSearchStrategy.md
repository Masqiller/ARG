---
source_file: "vendor/claude-mem/src/services/worker/search/strategies/SQLiteSearchStrategy.ts"
type: "code"
community: "Community None"
degree: 10
location: "L14"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SQLiteSearchStrategy

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["SQLiteSearchStrategy"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_search_strategies_sqlite_search_strategy_test_ts["sqlite-search-strategy.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_search_searchorchestrator_ts["SearchOrchestrator.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_search_strategies_sqlitesearchstrategy_ts["SQLiteSearchStrategy.ts"]
    center -->|"method"| N_strategies_sqlitesearchstrategy_sqlitesearchstrategy_constructor[".constructor[]"]
    center -->|"method"| N_strategies_sqlitesearchstrategy_sqlitesearchstrategy_canhandle[".canHandle[]"]
    center -->|"method"| N_strategies_sqlitesearchstrategy_sqlitesearchstrategy_search[".search[]"]
    center -->|"method"| N_strategies_sqlitesearchstrategy_sqlitesearchstrategy_executesqlitesearch[".executeSqliteSearch[]"]
    center -->|"method"| N_strategies_sqlitesearchstrategy_sqlitesearchstrategy_findbyconcept[".findByConcept[]"]
    center -->|"method"| N_strategies_sqlitesearchstrategy_sqlitesearchstrategy_findbytype[".findByType[]"]
    center -->|"method"| N_strategies_sqlitesearchstrategy_sqlitesearchstrategy_findbyfile[".findByFile[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.canHandle()]] - `method` [EXTRACTED]
- [[.constructor()_15]] - `method` [EXTRACTED]
- [[.executeSqliteSearch()]] - `method` [EXTRACTED]
- [[.findByConcept()_1]] - `method` [EXTRACTED]
- [[.findByFile()_1]] - `method` [EXTRACTED]
- [[.findByType()_1]] - `method` [EXTRACTED]
- [[.search()_2]] - `method` [EXTRACTED]
- [[SQLiteSearchStrategy.ts]] - `contains` [EXTRACTED]
- [[SearchOrchestrator.ts]] - `imports` [EXTRACTED]
- [[sqlite-search-strategy.test.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SQLiteSearchStrategy]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None