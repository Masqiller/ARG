---
source_file: "vendor/claude-mem/src/services/sqlite/timeline/queries.ts"
type: "code"
community: "Community None"
degree: 2
location: "L30"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getTimelineAroundTimestamp()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["getTimelineAroundTimestamp[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_sqlite_timeline_queries_ts["queries.ts"]
    center -->|"calls"| N_timeline_queries_gettimelinearoundobservation["getTimelineAroundObservation[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[getTimelineAroundObservation()]] - `calls` [EXTRACTED]
- [[queries.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getTimelineAroundTimestamp()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None