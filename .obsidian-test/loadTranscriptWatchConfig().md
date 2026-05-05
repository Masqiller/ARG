---
source_file: "vendor/claude-mem/src/services/transcripts/config.ts"
type: "code"
community: "Community None"
degree: 6
location: "L117"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# loadTranscriptWatchConfig()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["loadTranscriptWatchConfig[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"calls"| N_services_worker_service_workerservice_starttranscriptwatcher[".startTranscriptWatcher[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_transcripts_cli_ts["cli.ts"]
    center -->|"calls"| N_transcripts_cli_runtranscriptcommand["runTranscriptCommand[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_transcripts_config_ts["config.ts"]
    center -->|"calls"| N_transcripts_config_expandhomepath["expandHomePath[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.startTranscriptWatcher()]] - `calls` [INFERRED]
- [[cli.ts]] - `imports` [EXTRACTED]
- [[config.ts]] - `contains` [EXTRACTED]
- [[expandHomePath()]] - `calls` [EXTRACTED]
- [[runTranscriptCommand()]] - `calls` [INFERRED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[loadTranscriptWatchConfig()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None