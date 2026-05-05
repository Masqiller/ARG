---
source_file: "vendor/external_plugins/caveman/hooks/caveman-stats.js"
type: "code"
community: "Community None"
degree: 4
location: "L220"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# formatStats()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["formatStats[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_hooks_caveman_stats_js["caveman-stats.js"]
    center -->|"calls"| N_hooks_caveman_stats_priceformodel["priceForModel[]"]
    center -->|"calls"| N_hooks_caveman_stats_formatusd["formatUsd[]"]
    center -->|"calls"| N_hooks_caveman_stats_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[caveman-stats.js]] - `contains` [EXTRACTED]
- [[formatUsd()]] - `calls` [EXTRACTED]
- [[main()_18]] - `calls` [EXTRACTED]
- [[priceForModel()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[formatStats()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None