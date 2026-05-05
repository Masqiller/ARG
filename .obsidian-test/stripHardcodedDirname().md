---
source_file: "vendor/claude-mem/scripts/build-hooks.js"
type: "code"
community: "Community None"
degree: 2
location: "L25"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# stripHardcodedDirname()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["stripHardcodedDirname[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_build_hooks_js["build-hooks.js"]
    center -->|"calls"| N_scripts_build_hooks_buildhooks["buildHooks[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[build-hooks.js]] - `contains` [EXTRACTED]
- [[buildHooks()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[stripHardcodedDirname()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None