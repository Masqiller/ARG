---
source_file: "vendor/claude-mem/src/services/worker/search/filters/DateFilter.ts"
type: "code"
community: "Community None"
degree: 8
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# DateFilter.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["DateFilter.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_types_ts["types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_filters_datefilter_parsedaterange["parseDateRange[]"]
    center -->|"contains"| N_filters_datefilter_iswithindaterange["isWithinDateRange[]"]
    center -->|"contains"| N_filters_datefilter_isrecent["isRecent[]"]
    center -->|"contains"| N_filters_datefilter_filterresultsbydate["filterResultsByDate[]"]
    center -->|"contains"| N_filters_datefilter_getdateboundaries["getDateBoundaries[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[filterResultsByDate()]] - `contains` [EXTRACTED]
- [[getDateBoundaries()]] - `contains` [EXTRACTED]
- [[isRecent()]] - `contains` [EXTRACTED]
- [[isWithinDateRange()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[parseDateRange()]] - `contains` [EXTRACTED]
- [[types.ts_2]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[DateFilter.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None