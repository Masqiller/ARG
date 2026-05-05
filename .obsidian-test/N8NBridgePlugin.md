---
source_file: "src/plugins/n8n-bridge.ts"
type: "code"
community: "Community None"
degree: 4
location: "L9"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# N8NBridgePlugin

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["N8NBridgePlugin"]:::centerNode
    center -->|"imports"| N_src_vibe_router_ts["vibe-router.ts"]
    center -->|"contains"| N_src_plugins_n8n_bridge_ts["n8n-bridge.ts"]
    center -->|"method"| N_plugins_n8n_bridge_n8nbridgeplugin_constructor[".constructor[]"]
    center -->|"method"| N_plugins_n8n_bridge_n8nbridgeplugin_execute[".execute[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_55]] - `method` [EXTRACTED]
- [[.execute()_1]] - `method` [EXTRACTED]
- [[n8n-bridge.ts_1]] - `contains` [EXTRACTED]
- [[vibe-router.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[N8NBridgePlugin]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None