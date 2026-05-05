---
source_file: "vendor/claude-mem/ragtime/ragtime.ts"
type: "code"
community: "Community None"
degree: 5
location: "L188"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# main()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["main[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_ragtime_ragtime_ts["ragtime.ts"]
    center -->|"calls"| N_ragtime_ragtime_getfilestoprocess["getFilesToProcess[]"]
    center -->|"calls"| N_ragtime_ragtime_cleanupoldtranscripts["cleanupOldTranscripts[]"]
    center -->|"calls"| N_ragtime_ragtime_waitforqueuetoempty["waitForQueueToEmpty[]"]
    center -->|"calls"| N_ragtime_ragtime_processfile["processFile[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cleanupOldTranscripts()]] - `calls` [EXTRACTED]
- [[getFilesToProcess()]] - `calls` [EXTRACTED]
- [[processFile()]] - `calls` [EXTRACTED]
- [[ragtime.ts]] - `contains` [EXTRACTED]
- [[waitForQueueToEmpty()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[main()_25]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None