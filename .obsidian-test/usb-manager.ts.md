---
source_file: "src/usb-manager.ts"
type: "code"
community: "Community None"
degree: 1
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# usb-manager.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["usb-manager.ts"]:::centerNode
    center -->|"contains"| N_src_usb_manager_universalsessionbridge["UniversalSessionBridge"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[UniversalSessionBridge]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[usb-manager.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None