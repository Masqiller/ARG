---
source_file: "vendor/claude-mem/src/supervisor/shutdown.ts"
type: "code"
community: "Community None"
degree: 2
location: "L194"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# loadTreeKill()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["loadTreeKill[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_supervisor_shutdown_ts["shutdown.ts"]
    center -->|"calls"| N_supervisor_shutdown_signalprocess["signalProcess[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[shutdown.ts]] - `contains` [EXTRACTED]
- [[signalProcess()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[loadTreeKill()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None