---
source_file: "vendor/claude-mem/src/services/worker/search/strategies/ChromaSearchStrategy.ts"
type: "code"
community: "Community None"
degree: 10
location: "L16"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ChromaSearchStrategy

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["ChromaSearchStrategy"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_search_strategies_chroma_search_strategy_test_ts["chroma-search-strategy.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_search_searchorchestrator_ts["SearchOrchestrator.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_search_strategies_chromasearchstrategy_ts["ChromaSearchStrategy.ts"]
    center -->|"method"| N_strategies_chromasearchstrategy_chromasearchstrategy_constructor[".constructor[]"]
    center -->|"method"| N_strategies_chromasearchstrategy_chromasearchstrategy_canhandle[".canHandle[]"]
    center -->|"method"| N_strategies_chromasearchstrategy_chromasearchstrategy_search[".search[]"]
    center -->|"method"| N_strategies_chromasearchstrategy_chromasearchstrategy_executechromasearch[".executeChromaSearch[]"]
    center -->|"method"| N_strategies_chromasearchstrategy_chromasearchstrategy_buildwherefilter[".buildWhereFilter[]"]
    center -->|"method"| N_strategies_chromasearchstrategy_chromasearchstrategy_filterbyrecency[".filterByRecency[]"]
    center -->|"method"| N_strategies_chromasearchstrategy_chromasearchstrategy_categorizebydoctype[".categorizeByDocType[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.buildWhereFilter()]] - `method` [EXTRACTED]
- [[.canHandle()_2]] - `method` [EXTRACTED]
- [[.categorizeByDocType()]] - `method` [EXTRACTED]
- [[.constructor()_17]] - `method` [EXTRACTED]
- [[.executeChromaSearch()]] - `method` [EXTRACTED]
- [[.filterByRecency()]] - `method` [EXTRACTED]
- [[.search()_4]] - `method` [EXTRACTED]
- [[ChromaSearchStrategy.ts]] - `contains` [EXTRACTED]
- [[SearchOrchestrator.ts]] - `imports` [EXTRACTED]
- [[chroma-search-strategy.test.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ChromaSearchStrategy]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None