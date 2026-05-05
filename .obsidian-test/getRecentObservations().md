---
source_file: "vendor/claude-mem/src/services/sqlite/observations/recent.ts"
type: "code"
community: "Community None"
degree: 1
location: "L6"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getRecentObservations()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["getRecentObservations[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_sqlite_observations_recent_ts["recent.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[recent.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getRecentObservations()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None