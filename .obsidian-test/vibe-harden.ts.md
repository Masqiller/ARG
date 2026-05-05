---
source_file: "src/plugins/vibe-harden.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# vibe-harden.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["vibe-harden.ts"]:::centerNode
    center -->|"imports"| N_src_arg_brain_argbrain["ARGBrain"]
    center -->|"contains"| N_plugins_vibe_harden_vibehardenplugin["VibeHardenPlugin"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ARGBrain]] - `imports` [EXTRACTED]
- [[VibeHardenPlugin]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[vibe-harden.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None