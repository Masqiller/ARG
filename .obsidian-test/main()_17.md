---
source_file: "vendor/external_plugins/caveman/tools/caveman-init.js"
type: "code"
community: "Community None"
degree: 5
location: "L129"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# main()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["main[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_tools_caveman_init_js["caveman-init.js"]
    center -->|"calls"| N_tools_caveman_init_loadrulebody["loadRuleBody[]"]
    center -->|"calls"| N_tools_caveman_init_processagent["processAgent[]"]
    center -->|"calls"| N_tools_caveman_init_parseargs["parseArgs[]"]
    center -->|"calls"| N_tools_caveman_init_help["help[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[caveman-init.js]] - `contains` [EXTRACTED]
- [[help()]] - `calls` [EXTRACTED]
- [[loadRuleBody()]] - `calls` [EXTRACTED]
- [[parseArgs()]] - `calls` [EXTRACTED]
- [[processAgent()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[main()_17]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None