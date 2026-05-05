---
source_file: "scripts/infinite_arg_loop.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# infinite_arg_loop.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["infinite_arg_loop.ts"]:::centerNode
    center -->|"imports"| N_src_vibe_router_viberouter["VibeRouter"]
    center -->|"contains"| N_scripts_infinite_arg_loop_infiniteloop["infiniteLoop[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[VibeRouter]] - `imports` [EXTRACTED]
- [[infiniteLoop()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[infinite_arg_loop.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None