---
source_file: "vendor/external_plugins/caveman/hooks/caveman-config.js"
type: "code"
community: "Community None"
degree: 2
location: "L39"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getDefaultMode()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["getDefaultMode[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_hooks_caveman_config_js["caveman-config.js"]
    center -->|"calls"| N_hooks_caveman_config_getconfigpath["getConfigPath[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[caveman-config.js]] - `contains` [EXTRACTED]
- [[getConfigPath()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getDefaultMode()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None