---
source_file: "vendor/claude-mem/src/services/context/sections/TimelineRenderer.ts"
type: "code"
community: "Community None"
degree: 16
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# TimelineRenderer.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 16

## Architecture Graph
```mermaid
graph LR
    center["TimelineRenderer.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_timeline_formatting_ts["timeline-formatting.ts"]
    center -->|"imports"| N_shared_timeline_formatting_parsejsonarray["parseJsonArray[]"]
    center -->|"imports"| N_shared_timeline_formatting_formatdatetime["formatDateTime[]"]
    center -->|"imports"| N_shared_timeline_formatting_formattime["formatTime[]"]
    center -->|"imports"| N_shared_timeline_formatting_formatdate["formatDate[]"]
    center -->|"imports"| N_shared_timeline_formatting_extractfirstfile["extractFirstFile[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_contextbuilder_ts["ContextBuilder.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_types_ts["types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_formatters_humanformatter_ts["HumanFormatter.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_formatters_agentformatter_ts["AgentFormatter.ts"]
    center -->|"contains"| N_sections_timelinerenderer_grouptimelinebyday["groupTimelineByDay[]"]
    center -->|"contains"| N_sections_timelinerenderer_getdetailfield["getDetailField[]"]
    center -->|"contains"| N_sections_timelinerenderer_renderdaytimelineagent["renderDayTimelineAgent[]"]
    center -->|"contains"| N_sections_timelinerenderer_renderdaytimelinehuman["renderDayTimelineHuman[]"]
    center -->|"contains"| N_sections_timelinerenderer_renderdaytimeline["renderDayTimeline[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AgentFormatter.ts]] - `imports_from` [EXTRACTED]
- [[ContextBuilder.ts]] - `imports_from` [EXTRACTED]
- [[HumanFormatter.ts]] - `imports_from` [EXTRACTED]
- [[extractFirstFile()]] - `imports` [EXTRACTED]
- [[formatDate()_1]] - `imports` [EXTRACTED]
- [[formatDateTime()]] - `imports` [EXTRACTED]
- [[formatTime()_1]] - `imports` [EXTRACTED]
- [[getDetailField()]] - `contains` [EXTRACTED]
- [[groupTimelineByDay()]] - `contains` [EXTRACTED]
- [[parseJsonArray()]] - `imports` [EXTRACTED]
- [[renderDayTimeline()]] - `contains` [EXTRACTED]
- [[renderDayTimelineAgent()]] - `contains` [EXTRACTED]
- [[renderDayTimelineHuman()]] - `contains` [EXTRACTED]
- [[renderTimeline()]] - `contains` [EXTRACTED]
- [[timeline-formatting.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_12]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[TimelineRenderer.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None