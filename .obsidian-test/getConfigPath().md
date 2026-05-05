---
source_file: "vendor/external_plugins/caveman/hooks/caveman-config.js"
type: "code"
community: "Community None"
degree: 3
location: "L35"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getConfigPath()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["getConfigPath[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_hooks_caveman_config_js["caveman-config.js"]
    center -->|"calls"| N_hooks_caveman_config_getconfigdir["getConfigDir[]"]
    center -->|"calls"| N_hooks_caveman_config_getdefaultmode["getDefaultMode[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[caveman-config.js]] - `contains` [EXTRACTED]
- [[getConfigDir()]] - `calls` [EXTRACTED]
- [[getDefaultMode()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getConfigPath()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None