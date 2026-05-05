---
source_file: "vendor/claude-mem/src/services/worker/search/filters/DateFilter.ts"
type: "code"
community: "Community None"
degree: 2
location: "L31"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isWithinDateRange()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["isWithinDateRange[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_search_filters_datefilter_ts["DateFilter.ts"]
    center -->|"calls"| N_filters_datefilter_parsedaterange["parseDateRange[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[DateFilter.ts]] - `contains` [EXTRACTED]
- [[parseDateRange()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isWithinDateRange()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None