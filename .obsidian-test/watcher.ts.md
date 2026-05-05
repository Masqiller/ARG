---
source_file: "vendor/claude-mem/src/services/transcripts/watcher.ts"
type: "code"
community: "Community None"
degree: 14
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# watcher.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 14

## Architecture Graph
```mermaid
graph LR
    center["watcher.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_transcripts_processor_ts["processor.ts"]
    center -->|"imports"| N_transcripts_processor_transcripteventprocessor["TranscriptEventProcessor"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_transcripts_cli_ts["cli.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_transcripts_config_ts["config.ts"]
    center -->|"imports"| N_transcripts_config_expandhomepath["expandHomePath[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_transcripts_state_ts["state.ts"]
    center -->|"imports"| N_transcripts_state_loadwatchstate["loadWatchState[]"]
    center -->|"imports"| N_transcripts_state_savewatchstate["saveWatchState[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_transcripts_types_ts["types.ts"]
    center -->|"contains"| N_transcripts_watcher_filetailer["FileTailer"]
    center -->|"contains"| N_transcripts_watcher_transcriptwatcher["TranscriptWatcher"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[FileTailer]] - `contains` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[TranscriptEventProcessor]] - `imports` [EXTRACTED]
- [[TranscriptWatcher]] - `contains` [EXTRACTED]
- [[cli.ts]] - `imports_from` [EXTRACTED]
- [[config.ts]] - `imports_from` [EXTRACTED]
- [[expandHomePath()]] - `imports` [EXTRACTED]
- [[loadWatchState()]] - `imports` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[processor.ts]] - `imports_from` [EXTRACTED]
- [[saveWatchState()]] - `imports` [EXTRACTED]
- [[state.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_4]] - `imports_from` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[watcher.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None