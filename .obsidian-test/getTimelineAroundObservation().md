---
source_file: "vendor/claude-mem/src/services/sqlite/timeline/queries.ts"
type: "code"
community: "Community None"
degree: 2
location: "L40"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getTimelineAroundObservation()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["getTimelineAroundObservation[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_sqlite_timeline_queries_ts["queries.ts"]
    center -->|"calls"| N_timeline_queries_gettimelinearoundtimestamp["getTimelineAroundTimestamp[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[getTimelineAroundTimestamp()]] - `calls` [EXTRACTED]
- [[queries.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getTimelineAroundObservation()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None