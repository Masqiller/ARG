---
source_file: "vendor/claude-mem/ragtime/ragtime.ts"
type: "code"
community: "Community None"
degree: 2
location: "L28"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getFilesToProcess()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["getFilesToProcess[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_ragtime_ragtime_ts["ragtime.ts"]
    center -->|"calls"| N_ragtime_ragtime_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[main()_25]] - `calls` [EXTRACTED]
- [[ragtime.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getFilesToProcess()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None