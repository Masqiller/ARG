---
source_file: "vendor/claude-mem/src/services/worker/search/TimelineBuilder.ts"
type: "code"
community: "Community None"
degree: 9
location: "L30"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# TimelineBuilder

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["TimelineBuilder"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_search_searchorchestrator_ts["SearchOrchestrator.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_search_timelinebuilder_ts["TimelineBuilder.ts"]
    center -->|"method"| N_search_timelinebuilder_timelinebuilder_buildtimeline[".buildTimeline[]"]
    center -->|"method"| N_search_timelinebuilder_timelinebuilder_filterbydepth[".filterByDepth[]"]
    center -->|"method"| N_search_timelinebuilder_timelinebuilder_findanchorindex[".findAnchorIndex[]"]
    center -->|"method"| N_search_timelinebuilder_timelinebuilder_formattimeline[".formatTimeline[]"]
    center -->|"method"| N_search_timelinebuilder_timelinebuilder_groupbyday[".groupByDay[]"]
    center -->|"method"| N_search_timelinebuilder_timelinebuilder_sortdayschronologically[".sortDaysChronologically[]"]
    center -->|"method"| N_search_timelinebuilder_timelinebuilder_isanchoritem[".isAnchorItem[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.buildTimeline()_1]] - `method` [EXTRACTED]
- [[.filterByDepth()_1]] - `method` [EXTRACTED]
- [[.findAnchorIndex()]] - `method` [EXTRACTED]
- [[.formatTimeline()_2]] - `method` [EXTRACTED]
- [[.groupByDay()]] - `method` [EXTRACTED]
- [[.isAnchorItem()]] - `method` [EXTRACTED]
- [[.sortDaysChronologically()]] - `method` [EXTRACTED]
- [[SearchOrchestrator.ts]] - `imports` [EXTRACTED]
- [[TimelineBuilder.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[TimelineBuilder]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None