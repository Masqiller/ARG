---
source_file: "src/plugins/vibe-harden.ts"
type: "code"
community: "Community None"
degree: 4
location: "L10"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# VibeHardenPlugin

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["VibeHardenPlugin"]:::centerNode
    center -->|"imports"| N_src_vibe_router_ts["vibe-router.ts"]
    center -->|"contains"| N_src_plugins_vibe_harden_ts["vibe-harden.ts"]
    center -->|"method"| N_plugins_vibe_harden_vibehardenplugin_constructor[".constructor[]"]
    center -->|"method"| N_plugins_vibe_harden_vibehardenplugin_execute[".execute[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_57]] - `method` [EXTRACTED]
- [[.execute()_2]] - `method` [EXTRACTED]
- [[vibe-harden.ts]] - `contains` [EXTRACTED]
- [[vibe-router.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[VibeHardenPlugin]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None