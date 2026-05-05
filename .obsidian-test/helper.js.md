---
source_file: "vendor/external_plugins/superpowers/skills/brainstorming/scripts/helper.js"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# helper.js

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["helper.js"]:::centerNode
    center -->|"contains"| N_scripts_helper_connect["connect[]"]
    center -->|"contains"| N_scripts_helper_sendevent["sendEvent[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[connect()]] - `contains` [EXTRACTED]
- [[sendEvent()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[helper.js]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None