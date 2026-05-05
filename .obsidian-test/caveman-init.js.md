---
source_file: "vendor/external_plugins/caveman/tools/caveman-init.js"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# caveman-init.js

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["caveman-init.js"]:::centerNode
    center -->|"contains"| N_tools_caveman_init_loadrulebody["loadRuleBody[]"]
    center -->|"contains"| N_tools_caveman_init_processagent["processAgent[]"]
    center -->|"contains"| N_tools_caveman_init_parseargs["parseArgs[]"]
    center -->|"contains"| N_tools_caveman_init_help["help[]"]
    center -->|"contains"| N_tools_caveman_init_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[help()]] - `contains` [EXTRACTED]
- [[loadRuleBody()]] - `contains` [EXTRACTED]
- [[main()_17]] - `contains` [EXTRACTED]
- [[parseArgs()]] - `contains` [EXTRACTED]
- [[processAgent()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[caveman-init.js]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None