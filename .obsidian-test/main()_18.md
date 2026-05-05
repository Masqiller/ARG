---
source_file: "vendor/external_plugins/caveman/hooks/caveman-stats.js"
type: "code"
community: "Community None"
degree: 14
location: "L272"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# main()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 14

## Architecture Graph
```mermaid
graph LR
    center["main[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_hooks_caveman_stats_js["caveman-stats.js"]
    center -->|"calls"| N_hooks_caveman_stats_findrecentsession["findRecentSession[]"]
    center -->|"calls"| N_hooks_caveman_stats_parsesession["parseSession[]"]
    center -->|"calls"| N_hooks_caveman_stats_findcompressedpairs["findCompressedPairs[]"]
    center -->|"calls"| N_hooks_caveman_stats_summarizecompressed["summarizeCompressed[]"]
    center -->|"calls"| N_hooks_caveman_stats_derivesavings["deriveSavings[]"]
    center -->|"calls"| N_hooks_caveman_stats_parseduration["parseDuration[]"]
    center -->|"calls"| N_hooks_caveman_stats_aggregatehistory["aggregateHistory[]"]
    center -->|"calls"| N_hooks_caveman_stats_humanizetokens["humanizeTokens[]"]
    center -->|"calls"| N_hooks_caveman_stats_formathistory["formatHistory[]"]
    center -->|"calls"| N_hooks_caveman_stats_formatshare["formatShare[]"]
    center -->|"calls"| N_hooks_caveman_stats_formatstats["formatStats[]"]
    center -->|"calls"| N_hooks_caveman_config_appendflag["appendFlag[]"]
    center -->|"calls"| N_hooks_caveman_config_safewriteflag["safeWriteFlag[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[aggregateHistory()]] - `calls` [EXTRACTED]
- [[appendFlag()]] - `calls` [INFERRED]
- [[caveman-stats.js]] - `contains` [EXTRACTED]
- [[deriveSavings()]] - `calls` [EXTRACTED]
- [[findCompressedPairs()]] - `calls` [EXTRACTED]
- [[findRecentSession()]] - `calls` [EXTRACTED]
- [[formatHistory()]] - `calls` [EXTRACTED]
- [[formatShare()]] - `calls` [EXTRACTED]
- [[formatStats()]] - `calls` [EXTRACTED]
- [[humanizeTokens()]] - `calls` [EXTRACTED]
- [[parseDuration()]] - `calls` [EXTRACTED]
- [[parseSession()]] - `calls` [EXTRACTED]
- [[safeWriteFlag()]] - `calls` [INFERRED]
- [[summarizeCompressed()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[main()_18]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None