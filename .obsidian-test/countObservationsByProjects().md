---
source_file: "vendor/claude-mem/src/services/context/ObservationCompiler.ts"
type: "code"
community: "Community None"
degree: 3
location: "L137"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# countObservationsByProjects()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["countObservationsByProjects[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_searchroutes_ts["SearchRoutes.ts"]
    center -->|"calls"| N_routes_searchroutes_projectshaveobservations["projectsHaveObservations[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_context_observationcompiler_ts["ObservationCompiler.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ObservationCompiler.ts]] - `contains` [EXTRACTED]
- [[SearchRoutes.ts]] - `imports` [EXTRACTED]
- [[projectsHaveObservations()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[countObservationsByProjects()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None