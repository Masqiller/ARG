---
source_file: "vendor/claude-mem/src/services/sync/ChromaSyncState.ts"
type: "code"
community: "Community None"
degree: 2
location: "L24"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# load()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["load[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_sync_chromasyncstate_ts["ChromaSyncState.ts"]
    center -->|"calls"| N_sync_chromasyncstate_statepath["statePath[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ChromaSyncState.ts]] - `contains` [EXTRACTED]
- [[statePath()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[load()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None