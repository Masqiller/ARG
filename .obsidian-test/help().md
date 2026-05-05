---
source_file: "vendor/external_plugins/caveman/tools/caveman-init.js"
type: "code"
community: "Community None"
degree: 2
location: "L112"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# help()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["help[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_tools_caveman_init_js["caveman-init.js"]
    center -->|"calls"| N_tools_caveman_init_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[caveman-init.js]] - `contains` [EXTRACTED]
- [[main()_17]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[help()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None