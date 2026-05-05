---
source_file: "src/hooks.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# hooks.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["hooks.ts"]:::centerNode
    center -->|"contains"| N_src_hooks_registerhooks["registerHooks[]"]
    center -->|"contains"| N_src_hooks_checkgodnodeimpact["checkGodNodeImpact[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[checkGodNodeImpact()]] - `contains` [EXTRACTED]
- [[registerHooks()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[hooks.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None