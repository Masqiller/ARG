---
source_file: "vendor/claude-mem/scripts/build-hooks.js"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# build-hooks.js

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["build-hooks.js"]:::centerNode
    center -->|"contains"| N_scripts_build_hooks_striphardcodeddirname["stripHardcodedDirname[]"]
    center -->|"contains"| N_scripts_build_hooks_buildhooks["buildHooks[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[buildHooks()]] - `contains` [EXTRACTED]
- [[stripHardcodedDirname()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[build-hooks.js]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None