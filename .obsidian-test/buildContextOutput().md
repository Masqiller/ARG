---
source_file: "vendor/claude-mem/src/services/context/ContextBuilder.ts"
type: "code"
community: "Community None"
degree: 11
location: "L64"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# buildContextOutput()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 11

## Architecture Graph
```mermaid
graph LR
    center["buildContextOutput[]"]:::centerNode
    center -->|"calls"| N_context_observationcompiler_getpriorsessionmessages["getPriorSessionMessages[]"]
    center -->|"calls"| N_context_observationcompiler_preparesummariesfortimeline["prepareSummariesForTimeline[]"]
    center -->|"calls"| N_context_observationcompiler_getfullobservationids["getFullObservationIds[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_context_contextbuilder_ts["ContextBuilder.ts"]
    center -->|"calls"| N_context_contextbuilder_generatecontext["generateContext[]"]
    center -->|"calls"| N_sections_headerrenderer_renderheader["renderHeader[]"]
    center -->|"calls"| N_sections_timelinerenderer_rendertimeline["renderTimeline[]"]
    center -->|"calls"| N_sections_summaryrenderer_shouldshowsummary["shouldShowSummary[]"]
    center -->|"calls"| N_sections_summaryrenderer_rendersummaryfields["renderSummaryFields[]"]
    center -->|"calls"| N_sections_footerrenderer_renderpreviouslysection["renderPreviouslySection[]"]
    center -->|"calls"| N_sections_footerrenderer_renderfooter["renderFooter[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ContextBuilder.ts]] - `contains` [EXTRACTED]
- [[generateContext()]] - `calls` [EXTRACTED]
- [[getFullObservationIds()]] - `calls` [INFERRED]
- [[getPriorSessionMessages()]] - `calls` [INFERRED]
- [[prepareSummariesForTimeline()]] - `calls` [INFERRED]
- [[renderFooter()]] - `calls` [INFERRED]
- [[renderHeader()]] - `calls` [INFERRED]
- [[renderPreviouslySection()]] - `calls` [INFERRED]
- [[renderSummaryFields()]] - `calls` [INFERRED]
- [[renderTimeline()]] - `calls` [INFERRED]
- [[shouldShowSummary()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[buildContextOutput()]]
```

#graphify/code #graphify/INFERRED #community/Community_None