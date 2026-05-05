---
source_file: "vendor/external_plugins/caveman/hooks/caveman-config.js"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# caveman-config.js

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["caveman-config.js"]:::centerNode
    center -->|"contains"| N_hooks_caveman_config_getconfigdir["getConfigDir[]"]
    center -->|"contains"| N_hooks_caveman_config_getconfigpath["getConfigPath[]"]
    center -->|"contains"| N_hooks_caveman_config_getdefaultmode["getDefaultMode[]"]
    center -->|"contains"| N_hooks_caveman_config_safewriteflag["safeWriteFlag[]"]
    center -->|"contains"| N_hooks_caveman_config_readflag["readFlag[]"]
    center -->|"contains"| N_hooks_caveman_config_appendflag["appendFlag[]"]
    center -->|"contains"| N_hooks_caveman_config_readhistory["readHistory[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[appendFlag()]] - `contains` [EXTRACTED]
- [[getConfigDir()]] - `contains` [EXTRACTED]
- [[getConfigPath()]] - `contains` [EXTRACTED]
- [[getDefaultMode()]] - `contains` [EXTRACTED]
- [[readFlag()]] - `contains` [EXTRACTED]
- [[readHistory()]] - `contains` [EXTRACTED]
- [[safeWriteFlag()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[caveman-config.js]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None