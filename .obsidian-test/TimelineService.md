---
source_file: "vendor/claude-mem/src/services/worker/TimelineService.ts"
type: "code"
community: "Community None"
degree: 12
location: "L18"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# TimelineService

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 12

## Architecture Graph
```mermaid
graph LR
    center["TimelineService"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_searchmanager_timeline_anchor_test_ts["SearchManager.timeline-anchor.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_searchmanager_ts["SearchManager.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_timelineservice_ts["TimelineService.ts"]
    center -->|"method"| N_worker_timelineservice_timelineservice_buildtimeline[".buildTimeline[]"]
    center -->|"method"| N_worker_timelineservice_timelineservice_filterbydepth[".filterByDepth[]"]
    center -->|"method"| N_worker_timelineservice_timelineservice_formattimeline[".formatTimeline[]"]
    center -->|"method"| N_worker_timelineservice_timelineservice_gettypeicon[".getTypeIcon[]"]
    center -->|"method"| N_worker_timelineservice_timelineservice_formatdate[".formatDate[]"]
    center -->|"method"| N_worker_timelineservice_timelineservice_formattime[".formatTime[]"]
    center -->|"method"| N_worker_timelineservice_timelineservice_formatdatetime[".formatDateTime[]"]
    center -->|"method"| N_worker_timelineservice_timelineservice_estimatetokens[".estimateTokens[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.buildTimeline()]] - `method` [EXTRACTED]
- [[.estimateTokens()_1]] - `method` [EXTRACTED]
- [[.filterByDepth()]] - `method` [EXTRACTED]
- [[.formatDate()]] - `method` [EXTRACTED]
- [[.formatDateTime()]] - `method` [EXTRACTED]
- [[.formatTime()_1]] - `method` [EXTRACTED]
- [[.formatTimeline()]] - `method` [EXTRACTED]
- [[.getTypeIcon()]] - `method` [EXTRACTED]
- [[SearchManager.timeline-anchor.test.ts]] - `imports` [EXTRACTED]
- [[SearchManager.ts]] - `imports` [EXTRACTED]
- [[TimelineService.ts]] - `contains` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[TimelineService]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None