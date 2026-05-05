---
source_file: "vendor/claude-mem/src/services/transcripts/state.ts"
type: "code"
community: "Community None"
degree: 3
location: "L9"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# loadWatchState()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["loadWatchState[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_transcripts_watcher_ts["watcher.ts"]
    center -->|"calls"| N_transcripts_watcher_transcriptwatcher_constructor[".constructor[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_transcripts_state_ts["state.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_33]] - `calls` [INFERRED]
- [[state.ts]] - `contains` [EXTRACTED]
- [[watcher.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[loadWatchState()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None