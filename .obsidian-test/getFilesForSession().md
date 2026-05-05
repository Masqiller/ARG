---
source_file: "vendor/claude-mem/src/services/sqlite/observations/files.ts"
type: "code"
community: "Community None"
degree: 2
location: "L16"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getFilesForSession()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["getFilesForSession[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_sqlite_observations_files_ts["files.ts"]
    center -->|"calls"| N_observations_files_parsefilelist["parseFileList[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[files.ts]] - `contains` [EXTRACTED]
- [[parseFileList()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getFilesForSession()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None