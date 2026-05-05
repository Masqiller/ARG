---
source_file: "vendor/external_plugins/caveman/hooks/caveman-stats.js"
type: "code"
community: "Community None"
degree: 14
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# caveman-stats.js

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 14

## Architecture Graph
```mermaid
graph LR
    center["caveman-stats.js"]:::centerNode
    center -->|"contains"| N_hooks_caveman_stats_priceformodel["priceForModel[]"]
    center -->|"contains"| N_hooks_caveman_stats_formatusd["formatUsd[]"]
    center -->|"contains"| N_hooks_caveman_stats_findrecentsession["findRecentSession[]"]
    center -->|"contains"| N_hooks_caveman_stats_parsesession["parseSession[]"]
    center -->|"contains"| N_hooks_caveman_stats_findcompressedpairs["findCompressedPairs[]"]
    center -->|"contains"| N_hooks_caveman_stats_summarizecompressed["summarizeCompressed[]"]
    center -->|"contains"| N_hooks_caveman_stats_derivesavings["deriveSavings[]"]
    center -->|"contains"| N_hooks_caveman_stats_parseduration["parseDuration[]"]
    center -->|"contains"| N_hooks_caveman_stats_aggregatehistory["aggregateHistory[]"]
    center -->|"contains"| N_hooks_caveman_stats_humanizetokens["humanizeTokens[]"]
    center -->|"contains"| N_hooks_caveman_stats_formathistory["formatHistory[]"]
    center -->|"contains"| N_hooks_caveman_stats_formatshare["formatShare[]"]
    center -->|"contains"| N_hooks_caveman_stats_formatstats["formatStats[]"]
    center -->|"contains"| N_hooks_caveman_stats_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[aggregateHistory()]] - `contains` [EXTRACTED]
- [[deriveSavings()]] - `contains` [EXTRACTED]
- [[findCompressedPairs()]] - `contains` [EXTRACTED]
- [[findRecentSession()]] - `contains` [EXTRACTED]
- [[formatHistory()]] - `contains` [EXTRACTED]
- [[formatShare()]] - `contains` [EXTRACTED]
- [[formatStats()]] - `contains` [EXTRACTED]
- [[formatUsd()]] - `contains` [EXTRACTED]
- [[humanizeTokens()]] - `contains` [EXTRACTED]
- [[main()_18]] - `contains` [EXTRACTED]
- [[parseDuration()]] - `contains` [EXTRACTED]
- [[parseSession()]] - `contains` [EXTRACTED]
- [[priceForModel()]] - `contains` [EXTRACTED]
- [[summarizeCompressed()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[caveman-stats.js]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None