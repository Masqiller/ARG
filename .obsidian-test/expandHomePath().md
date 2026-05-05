---
source_file: "vendor/claude-mem/src/services/transcripts/config.ts"
type: "code"
community: "Community None"
degree: 11
location: "L109"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# expandHomePath()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 11

## Architecture Graph
```mermaid
graph LR
    center["expandHomePath[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"calls"| N_services_worker_service_workerservice_starttranscriptwatcher[".startTranscriptWatcher[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_transcripts_processor_ts["processor.ts"]
    center -->|"calls"| N_transcripts_processor_transcripteventprocessor_updatecontext[".updateContext[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_transcripts_cli_ts["cli.ts"]
    center -->|"calls"| N_transcripts_cli_runtranscriptcommand["runTranscriptCommand[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_transcripts_config_ts["config.ts"]
    center -->|"calls"| N_transcripts_config_loadtranscriptwatchconfig["loadTranscriptWatchConfig[]"]
    center -->|"calls"| N_transcripts_config_writesampleconfig["writeSampleConfig[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_transcripts_watcher_ts["watcher.ts"]
    center -->|"calls"| N_transcripts_watcher_transcriptwatcher_setupwatch[".setupWatch[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.setupWatch()]] - `calls` [INFERRED]
- [[.startTranscriptWatcher()]] - `calls` [INFERRED]
- [[.updateContext()]] - `calls` [INFERRED]
- [[cli.ts]] - `imports` [EXTRACTED]
- [[config.ts]] - `contains` [EXTRACTED]
- [[loadTranscriptWatchConfig()]] - `calls` [EXTRACTED]
- [[processor.ts]] - `imports` [EXTRACTED]
- [[runTranscriptCommand()]] - `calls` [INFERRED]
- [[watcher.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]
- [[writeSampleConfig()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[expandHomePath()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None