---
source_file: "vendor/external_plugins/caveman/hooks/caveman-stats.js"
type: "code"
community: "Community None"
degree: 4
location: "L42"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# formatUsd()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["formatUsd[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_hooks_caveman_stats_js["caveman-stats.js"]
    center -->|"calls"| N_hooks_caveman_stats_formathistory["formatHistory[]"]
    center -->|"calls"| N_hooks_caveman_stats_formatshare["formatShare[]"]
    center -->|"calls"| N_hooks_caveman_stats_formatstats["formatStats[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[caveman-stats.js]] - `contains` [EXTRACTED]
- [[formatHistory()]] - `calls` [EXTRACTED]
- [[formatShare()]] - `calls` [EXTRACTED]
- [[formatStats()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[formatUsd()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None