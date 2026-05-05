---
source_file: "scripts/brutal_debug_arg.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# brutal_debug_arg.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["brutal_debug_arg.ts"]:::centerNode
    center -->|"imports"| N_src_vibe_router_viberouter["VibeRouter"]
    center -->|"contains"| N_scripts_brutal_debug_arg_brutaldebugsequence["brutalDebugSequence[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[VibeRouter]] - `imports` [EXTRACTED]
- [[brutalDebugSequence()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[brutal_debug_arg.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None