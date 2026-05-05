---
source_file: "vendor/external_plugins/caveman/hooks/caveman-stats.js"
type: "code"
community: "Community None"
degree: 3
location: "L156"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# aggregateHistory()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["aggregateHistory[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_hooks_caveman_stats_js["caveman-stats.js"]
    center -->|"calls"| N_hooks_caveman_stats_main["main[]"]
    center -->|"calls"| N_hooks_caveman_config_readhistory["readHistory[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[caveman-stats.js]] - `contains` [EXTRACTED]
- [[main()_18]] - `calls` [EXTRACTED]
- [[readHistory()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[aggregateHistory()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None