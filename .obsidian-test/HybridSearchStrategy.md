---
source_file: "vendor/claude-mem/src/services/worker/search/strategies/HybridSearchStrategy.ts"
type: "code"
community: "Community None"
degree: 12
location: "L15"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# HybridSearchStrategy

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 12

## Architecture Graph
```mermaid
graph LR
    center["HybridSearchStrategy"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_search_strategies_hybrid_search_strategy_test_ts["hybrid-search-strategy.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_search_searchorchestrator_ts["SearchOrchestrator.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_search_strategies_hybridsearchstrategy_ts["HybridSearchStrategy.ts"]
    center -->|"method"| N_strategies_hybridsearchstrategy_hybridsearchstrategy_constructor[".constructor[]"]
    center -->|"method"| N_strategies_hybridsearchstrategy_hybridsearchstrategy_canhandle[".canHandle[]"]
    center -->|"method"| N_strategies_hybridsearchstrategy_hybridsearchstrategy_search[".search[]"]
    center -->|"method"| N_strategies_hybridsearchstrategy_hybridsearchstrategy_findbyconcept[".findByConcept[]"]
    center -->|"method"| N_strategies_hybridsearchstrategy_hybridsearchstrategy_findbytype[".findByType[]"]
    center -->|"method"| N_strategies_hybridsearchstrategy_hybridsearchstrategy_findbyfile[".findByFile[]"]
    center -->|"method"| N_strategies_hybridsearchstrategy_hybridsearchstrategy_rankandhydrate[".rankAndHydrate[]"]
    center -->|"method"| N_strategies_hybridsearchstrategy_hybridsearchstrategy_rankandhydrateforfile[".rankAndHydrateForFile[]"]
    center -->|"method"| N_strategies_hybridsearchstrategy_hybridsearchstrategy_intersectwithranking[".intersectWithRanking[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.canHandle()_1]] - `method` [EXTRACTED]
- [[.constructor()_16]] - `method` [EXTRACTED]
- [[.findByConcept()_2]] - `method` [EXTRACTED]
- [[.findByFile()_2]] - `method` [EXTRACTED]
- [[.findByType()_2]] - `method` [EXTRACTED]
- [[.intersectWithRanking()]] - `method` [EXTRACTED]
- [[.rankAndHydrate()]] - `method` [EXTRACTED]
- [[.rankAndHydrateForFile()]] - `method` [EXTRACTED]
- [[.search()_3]] - `method` [EXTRACTED]
- [[HybridSearchStrategy.ts]] - `contains` [EXTRACTED]
- [[SearchOrchestrator.ts]] - `imports` [EXTRACTED]
- [[hybrid-search-strategy.test.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[HybridSearchStrategy]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None