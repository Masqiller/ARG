---
source_file: "vendor/claude-mem/src/shared/timeline-formatting.ts"
type: "code"
community: "Community None"
degree: 15
location: "L54"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# extractFirstFile()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 15

## Architecture Graph
```mermaid
graph LR
    center["extractFirstFile[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_shared_timeline_formatting_test_ts["timeline-formatting.test.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_shared_timeline_formatting_ts["timeline-formatting.ts"]
    center -->|"calls"| N_shared_timeline_formatting_parsejsonarray["parseJsonArray[]"]
    center -->|"calls"| N_shared_timeline_formatting_torelativepath["toRelativePath[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_searchmanager_ts["SearchManager.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_search_resultformatter_ts["ResultFormatter.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_search_timelinebuilder_ts["TimelineBuilder.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_context_sections_timelinerenderer_ts["TimelineRenderer.ts"]
    center -->|"calls"| N_worker_searchmanager_searchmanager_search[".search[]"]
    center -->|"calls"| N_worker_searchmanager_searchmanager_timeline[".timeline[]"]
    center -->|"calls"| N_worker_searchmanager_searchmanager_getcontexttimeline[".getContextTimeline[]"]
    center -->|"calls"| N_worker_searchmanager_searchmanager_gettimelinebyquery[".getTimelineByQuery[]"]
    center -->|"calls"| N_search_resultformatter_resultformatter_formatsearchresults[".formatSearchResults[]"]
    center -->|"calls"| N_search_timelinebuilder_timelinebuilder_formattimeline[".formatTimeline[]"]
    center -->|"calls"| N_sections_timelinerenderer_renderdaytimelinehuman["renderDayTimelineHuman[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.formatSearchResults()]] - `calls` [INFERRED]
- [[.formatTimeline()_2]] - `calls` [INFERRED]
- [[.getContextTimeline()]] - `calls` [INFERRED]
- [[.getTimelineByQuery()]] - `calls` [INFERRED]
- [[.search()]] - `calls` [INFERRED]
- [[.timeline()]] - `calls` [INFERRED]
- [[ResultFormatter.ts]] - `imports` [EXTRACTED]
- [[SearchManager.ts]] - `imports` [EXTRACTED]
- [[TimelineBuilder.ts]] - `imports` [EXTRACTED]
- [[TimelineRenderer.ts]] - `imports` [EXTRACTED]
- [[parseJsonArray()]] - `calls` [EXTRACTED]
- [[renderDayTimelineHuman()]] - `calls` [INFERRED]
- [[timeline-formatting.test.ts]] - `imports` [EXTRACTED]
- [[timeline-formatting.ts]] - `contains` [EXTRACTED]
- [[toRelativePath()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extractFirstFile()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None