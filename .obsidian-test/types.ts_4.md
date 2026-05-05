---
source_file: "vendor/claude-mem/src/services/transcripts/types.ts"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# types.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["types.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_transcripts_processor_ts["processor.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_transcripts_config_ts["config.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_transcripts_watcher_ts["watcher.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_transcripts_field_utils_ts["field-utils.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_integrations_codexcliinstaller_ts["CodexCliInstaller.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CodexCliInstaller.ts]] - `imports_from` [EXTRACTED]
- [[config.ts]] - `imports_from` [EXTRACTED]
- [[field-utils.ts]] - `imports_from` [EXTRACTED]
- [[processor.ts]] - `imports_from` [EXTRACTED]
- [[watcher.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[types.ts_4]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None