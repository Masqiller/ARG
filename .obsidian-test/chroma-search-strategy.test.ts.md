---
source_file: "vendor/claude-mem/tests/worker/search/strategies/chroma-search-strategy.test.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# chroma-search-strategy.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["chroma-search-strategy.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_strategies_chromasearchstrategy_ts["ChromaSearchStrategy.ts"]
    center -->|"imports"| N_strategies_chromasearchstrategy_chromasearchstrategy["ChromaSearchStrategy"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_types_ts["types.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ChromaSearchStrategy]] - `imports` [EXTRACTED]
- [[ChromaSearchStrategy.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_2]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[chroma-search-strategy.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None