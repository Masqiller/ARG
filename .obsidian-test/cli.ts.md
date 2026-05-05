---
source_file: "vendor/claude-mem/src/services/transcripts/cli.ts"
type: "code"
community: "Community None"
degree: 8
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cli.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["cli.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_transcripts_config_ts["config.ts"]
    center -->|"imports"| N_transcripts_config_expandhomepath["expandHomePath[]"]
    center -->|"imports"| N_transcripts_config_loadtranscriptwatchconfig["loadTranscriptWatchConfig[]"]
    center -->|"imports"| N_transcripts_config_writesampleconfig["writeSampleConfig[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_transcripts_watcher_ts["watcher.ts"]
    center -->|"imports"| N_transcripts_watcher_transcriptwatcher["TranscriptWatcher"]
    center -->|"contains"| N_transcripts_cli_getargvalue["getArgValue[]"]
    center -->|"contains"| N_transcripts_cli_runtranscriptcommand["runTranscriptCommand[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[TranscriptWatcher]] - `imports` [EXTRACTED]
- [[config.ts]] - `imports_from` [EXTRACTED]
- [[expandHomePath()]] - `imports` [EXTRACTED]
- [[getArgValue()]] - `contains` [EXTRACTED]
- [[loadTranscriptWatchConfig()]] - `imports` [EXTRACTED]
- [[runTranscriptCommand()]] - `contains` [EXTRACTED]
- [[watcher.ts]] - `imports_from` [EXTRACTED]
- [[writeSampleConfig()]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cli.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None