---
source_file: "vendor/claude-mem/src/services/sync/ChromaSyncState.ts"
type: "code"
community: "Community None"
degree: 3
location: "L16"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# statePath()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["statePath[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_sync_chromasyncstate_ts["ChromaSyncState.ts"]
    center -->|"calls"| N_sync_chromasyncstate_load["load[]"]
    center -->|"calls"| N_sync_chromasyncstate_persist["persist[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ChromaSyncState.ts]] - `contains` [EXTRACTED]
- [[load()]] - `calls` [EXTRACTED]
- [[persist()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[statePath()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None