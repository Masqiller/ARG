---
source_file: "vendor/claude-mem/src/services/transcripts/config.ts"
type: "code"
community: "Community None"
degree: 10
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# config.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["config.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_transcripts_processor_ts["processor.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_transcripts_cli_ts["cli.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_transcripts_types_ts["types.ts"]
    center -->|"contains"| N_transcripts_config_expandhomepath["expandHomePath[]"]
    center -->|"contains"| N_transcripts_config_loadtranscriptwatchconfig["loadTranscriptWatchConfig[]"]
    center -->|"contains"| N_transcripts_config_writesampleconfig["writeSampleConfig[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_transcripts_watcher_ts["watcher.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_integrations_codexcliinstaller_ts["CodexCliInstaller.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CodexCliInstaller.ts]] - `imports_from` [EXTRACTED]
- [[cli.ts]] - `imports_from` [EXTRACTED]
- [[expandHomePath()]] - `contains` [EXTRACTED]
- [[loadTranscriptWatchConfig()]] - `contains` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[processor.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_4]] - `imports_from` [EXTRACTED]
- [[watcher.ts]] - `imports_from` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]
- [[writeSampleConfig()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[config.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None