---
source_file: "vendor/claude-mem/src/services/transcripts/state.ts"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# state.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["state.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_transcripts_watcher_ts["watcher.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_transcripts_state_loadwatchstate["loadWatchState[]"]
    center -->|"contains"| N_transcripts_state_savewatchstate["saveWatchState[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[loadWatchState()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[saveWatchState()]] - `contains` [EXTRACTED]
- [[watcher.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[state.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None