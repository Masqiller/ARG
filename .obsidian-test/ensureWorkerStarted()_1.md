---
source_file: "vendor/claude-mem/src/services/worker-service.ts"
type: "code"
community: "Community None"
degree: 2
location: "L771"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ensureWorkerStarted()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["ensureWorkerStarted[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"calls"| N_services_worker_service_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[main()_22]] - `calls` [EXTRACTED]
- [[worker-service.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ensureWorkerStarted()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None