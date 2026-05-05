---
source_file: "vendor/claude-mem/src/services/context/ObservationCompiler.ts"
type: "code"
community: "Community None"
degree: 22
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ObservationCompiler.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 22

## Architecture Graph
```mermaid
graph LR
    center["ObservationCompiler.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_searchroutes_ts["SearchRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessionstore_ts["SessionStore.ts"]
    center -->|"imports"| N_sqlite_sessionstore_sessionstore["SessionStore"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_tag_stripping_ts["tag-stripping.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_types_ts["types.ts"]
    center -->|"contains"| N_context_observationcompiler_queryobservations["queryObservations[]"]
    center -->|"contains"| N_context_observationcompiler_querysummaries["querySummaries[]"]
    center -->|"contains"| N_context_observationcompiler_queryobservationsmulti["queryObservationsMulti[]"]
    center -->|"contains"| N_context_observationcompiler_countobservationsbyprojects["countObservationsByProjects[]"]
    center -->|"contains"| N_context_observationcompiler_querysummariesmulti["querySummariesMulti[]"]
    center -->|"contains"| N_context_observationcompiler_cwdtodashed["cwdToDashed[]"]
    center -->|"contains"| N_context_observationcompiler_parseassistanttextfromline["parseAssistantTextFromLine[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ContextBuilder.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[SearchRoutes.ts]] - `imports_from` [EXTRACTED]
- [[SessionStore]] - `imports` [EXTRACTED]
- [[SessionStore.ts]] - `imports_from` [EXTRACTED]
- [[buildTimeline()]] - `contains` [EXTRACTED]
- [[countObservationsByProjects()]] - `contains` [EXTRACTED]
- [[cwdToDashed()]] - `contains` [EXTRACTED]
- [[extractPriorMessages()]] - `contains` [EXTRACTED]
- [[findLastAssistantMessage()]] - `contains` [EXTRACTED]
- [[getFullObservationIds()]] - `contains` [EXTRACTED]
- [[getPriorSessionMessages()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[parseAssistantTextFromLine()]] - `contains` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[prepareSummariesForTimeline()]] - `contains` [EXTRACTED]
- [[queryObservations()]] - `contains` [EXTRACTED]
- [[queryObservationsMulti()]] - `contains` [EXTRACTED]
- [[querySummaries()]] - `contains` [EXTRACTED]
- [[querySummariesMulti()]] - `contains` [EXTRACTED]
- [[tag-stripping.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_12]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ObservationCompiler.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None