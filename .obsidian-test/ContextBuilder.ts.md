---
source_file: "vendor/claude-mem/src/services/context/ContextBuilder.ts"
type: "code"
community: "Community None"
degree: 36
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ContextBuilder.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 36

## Architecture Graph
```mermaid
graph LR
    center["ContextBuilder.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessionstore_ts["SessionStore.ts"]
    center -->|"imports"| N_sqlite_sessionstore_sessionstore["SessionStore"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_contextconfigloader_ts["ContextConfigLoader.ts"]
    center -->|"imports"| N_context_contextconfigloader_loadcontextconfig["loadContextConfig[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_observationcompiler_ts["ObservationCompiler.ts"]
    center -->|"imports"| N_context_observationcompiler_queryobservations["queryObservations[]"]
    center -->|"imports"| N_context_observationcompiler_querysummaries["querySummaries[]"]
    center -->|"imports"| N_context_observationcompiler_queryobservationsmulti["queryObservationsMulti[]"]
    center -->|"imports"| N_context_observationcompiler_querysummariesmulti["querySummariesMulti[]"]
    center -->|"imports"| N_context_observationcompiler_getpriorsessionmessages["getPriorSessionMessages[]"]
    center -->|"imports"| N_context_observationcompiler_preparesummariesfortimeline["prepareSummariesForTimeline[]"]
    center -->|"imports"| N_context_observationcompiler_buildtimeline["buildTimeline[]"]
    center -->|"imports"| N_context_observationcompiler_getfullobservationids["getFullObservationIds[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AgentFormatter.ts]] - `imports_from` [EXTRACTED]
- [[ContextConfigLoader.ts]] - `imports_from` [EXTRACTED]
- [[FooterRenderer.ts]] - `imports_from` [EXTRACTED]
- [[HeaderRenderer.ts]] - `imports_from` [EXTRACTED]
- [[HumanFormatter.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[ObservationCompiler.ts]] - `imports_from` [EXTRACTED]
- [[SessionStore]] - `imports` [EXTRACTED]
- [[SessionStore.ts]] - `imports_from` [EXTRACTED]
- [[SummaryRenderer.ts]] - `imports_from` [EXTRACTED]
- [[TimelineRenderer.ts]] - `imports_from` [EXTRACTED]
- [[buildContextOutput()]] - `contains` [EXTRACTED]
- [[buildTimeline()]] - `imports` [EXTRACTED]
- [[generateContext()]] - `contains` [EXTRACTED]
- [[getFullObservationIds()]] - `imports` [EXTRACTED]
- [[getPriorSessionMessages()]] - `imports` [EXTRACTED]
- [[getProjectContext()]] - `imports` [EXTRACTED]
- [[initializeDatabase()_1]] - `contains` [EXTRACTED]
- [[loadContextConfig()]] - `imports` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[prepareSummariesForTimeline()]] - `imports` [EXTRACTED]
- [[project-name.ts]] - `imports_from` [EXTRACTED]
- [[queryObservations()]] - `imports` [EXTRACTED]
- [[queryObservationsMulti()]] - `imports` [EXTRACTED]
- [[querySummaries()]] - `imports` [EXTRACTED]
- [[querySummariesMulti()]] - `imports` [EXTRACTED]
- [[renderAgentEmptyState()]] - `imports` [EXTRACTED]
- [[renderEmptyState()]] - `contains` [EXTRACTED]
- [[renderFooter()]] - `imports` [EXTRACTED]
- [[renderHeader()]] - `imports` [EXTRACTED]
- [[renderHumanEmptyState()]] - `imports` [EXTRACTED]
- [[renderPreviouslySection()]] - `imports` [EXTRACTED]
- [[renderSummaryFields()]] - `imports` [EXTRACTED]
- [[renderTimeline()]] - `imports` [EXTRACTED]
- [[shouldShowSummary()]] - `imports` [EXTRACTED]
- [[types.ts_12]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ContextBuilder.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None