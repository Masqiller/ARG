---
source_file: "vendor/claude-mem/src/services/worker/http/routes/SearchRoutes.ts"
type: "code"
community: "Community None"
degree: 2
location: "L60"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# projectsHaveObservations()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["projectsHaveObservations[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_http_routes_searchroutes_ts["SearchRoutes.ts"]
    center -->|"calls"| N_context_observationcompiler_countobservationsbyprojects["countObservationsByProjects[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[SearchRoutes.ts]] - `contains` [EXTRACTED]
- [[countObservationsByProjects()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[projectsHaveObservations()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None