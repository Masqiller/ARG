---
source_file: "vendor/claude-mem/src/services/transcripts/state.ts"
type: "code"
community: "Community None"
degree: 2
location: "L27"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# saveWatchState()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["saveWatchState[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_transcripts_watcher_ts["watcher.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_transcripts_state_ts["state.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[state.ts]] - `contains` [EXTRACTED]
- [[watcher.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[saveWatchState()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None