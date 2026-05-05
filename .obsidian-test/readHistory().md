---
source_file: "vendor/external_plugins/caveman/hooks/caveman-config.js"
type: "code"
community: "Community None"
degree: 2
location: "L254"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# readHistory()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["readHistory[]"]:::centerNode
    center -->|"calls"| N_hooks_caveman_stats_aggregatehistory["aggregateHistory[]"]
    center -->|"contains"| N_vendor_external_plugins_caveman_hooks_caveman_config_js["caveman-config.js"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[aggregateHistory()]] - `calls` [INFERRED]
- [[caveman-config.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[readHistory()]]
```

#graphify/code #graphify/INFERRED #community/Community_None