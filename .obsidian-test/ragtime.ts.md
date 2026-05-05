---
source_file: "vendor/claude-mem/ragtime/ragtime.ts"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ragtime.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["ragtime.ts"]:::centerNode
    center -->|"contains"| N_ragtime_ragtime_getfilestoprocess["getFilesToProcess[]"]
    center -->|"contains"| N_ragtime_ragtime_cleanupoldtranscripts["cleanupOldTranscripts[]"]
    center -->|"contains"| N_ragtime_ragtime_waitforqueuetoempty["waitForQueueToEmpty[]"]
    center -->|"contains"| N_ragtime_ragtime_processfile["processFile[]"]
    center -->|"contains"| N_ragtime_ragtime_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cleanupOldTranscripts()]] - `contains` [EXTRACTED]
- [[getFilesToProcess()]] - `contains` [EXTRACTED]
- [[main()_25]] - `contains` [EXTRACTED]
- [[processFile()]] - `contains` [EXTRACTED]
- [[waitForQueueToEmpty()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ragtime.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None