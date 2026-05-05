---
source_file: "vendor/claude-mem/src/services/context/ContextBuilder.ts"
type: "code"
community: "Community None"
degree: 10
location: "L101"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# generateContext()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["generateContext[]"]:::centerNode
    center -->|"calls"| N_context_contextconfigloader_loadcontextconfig["loadContextConfig[]"]
    center -->|"calls"| N_context_observationcompiler_queryobservations["queryObservations[]"]
    center -->|"calls"| N_context_observationcompiler_querysummaries["querySummaries[]"]
    center -->|"calls"| N_context_observationcompiler_queryobservationsmulti["queryObservationsMulti[]"]
    center -->|"calls"| N_context_observationcompiler_querysummariesmulti["querySummariesMulti[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_context_contextbuilder_ts["ContextBuilder.ts"]
    center -->|"calls"| N_context_contextbuilder_initializedatabase["initializeDatabase[]"]
    center -->|"calls"| N_context_contextbuilder_renderemptystate["renderEmptyState[]"]
    center -->|"calls"| N_context_contextbuilder_buildcontextoutput["buildContextOutput[]"]
    center -->|"calls"| N_utils_project_name_getprojectcontext["getProjectContext[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ContextBuilder.ts]] - `contains` [EXTRACTED]
- [[buildContextOutput()]] - `calls` [EXTRACTED]
- [[getProjectContext()]] - `calls` [INFERRED]
- [[initializeDatabase()_1]] - `calls` [EXTRACTED]
- [[loadContextConfig()]] - `calls` [INFERRED]
- [[queryObservations()]] - `calls` [INFERRED]
- [[queryObservationsMulti()]] - `calls` [INFERRED]
- [[querySummaries()]] - `calls` [INFERRED]
- [[querySummariesMulti()]] - `calls` [INFERRED]
- [[renderEmptyState()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[generateContext()]]
```

#graphify/code #graphify/INFERRED #community/Community_None