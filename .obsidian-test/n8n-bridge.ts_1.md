---
source_file: "src/plugins/n8n-bridge.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# n8n-bridge.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["n8n-bridge.ts"]:::centerNode
    center -->|"imports"| N_src_arg_brain_argbrain["ARGBrain"]
    center -->|"contains"| N_plugins_n8n_bridge_n8nbridgeplugin["N8NBridgePlugin"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ARGBrain]] - `imports` [EXTRACTED]
- [[N8NBridgePlugin]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[n8n-bridge.ts_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None