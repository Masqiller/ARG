---
source_file: "vendor/claude-mem/src/services/transcripts/cli.ts"
type: "code"
community: "Community None"
degree: 5
location: "L10"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# runTranscriptCommand()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["runTranscriptCommand[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_transcripts_cli_ts["cli.ts"]
    center -->|"calls"| N_transcripts_cli_getargvalue["getArgValue[]"]
    center -->|"calls"| N_transcripts_config_writesampleconfig["writeSampleConfig[]"]
    center -->|"calls"| N_transcripts_config_expandhomepath["expandHomePath[]"]
    center -->|"calls"| N_transcripts_config_loadtranscriptwatchconfig["loadTranscriptWatchConfig[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cli.ts]] - `contains` [EXTRACTED]
- [[expandHomePath()]] - `calls` [INFERRED]
- [[getArgValue()]] - `calls` [EXTRACTED]
- [[loadTranscriptWatchConfig()]] - `calls` [INFERRED]
- [[writeSampleConfig()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[runTranscriptCommand()]]
```

#graphify/code #graphify/INFERRED #community/Community_None