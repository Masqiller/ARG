---
source_file: "src/usb-manager.ts"
type: "code"
community: "Community None"
degree: 7
location: "L5"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# UniversalSessionBridge

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["UniversalSessionBridge"]:::centerNode
    center -->|"contains"| N_src_usb_manager_ts["usb-manager.ts"]
    center -->|"method"| N_src_usb_manager_universalsessionbridge_constructor[".constructor[]"]
    center -->|"method"| N_src_usb_manager_universalsessionbridge_getprojectroot[".getProjectRoot[]"]
    center -->|"method"| N_src_usb_manager_universalsessionbridge_init[".init[]"]
    center -->|"method"| N_src_usb_manager_universalsessionbridge_synccontext[".syncContext[]"]
    center -->|"method"| N_src_usb_manager_universalsessionbridge_recoverlatestcontext[".recoverLatestContext[]"]
    center -->|"imports"| N_src_vibe_router_ts["vibe-router.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_50]] - `method` [EXTRACTED]
- [[.getProjectRoot()]] - `method` [EXTRACTED]
- [[.init()_2]] - `method` [EXTRACTED]
- [[.recoverLatestContext()]] - `method` [EXTRACTED]
- [[.syncContext()]] - `method` [EXTRACTED]
- [[usb-manager.ts]] - `contains` [EXTRACTED]
- [[vibe-router.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[UniversalSessionBridge]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None