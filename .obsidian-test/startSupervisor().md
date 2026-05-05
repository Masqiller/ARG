---
source_file: "vendor/claude-mem/src/supervisor/index.ts"
type: "code"
community: "Community None"
degree: 4
location: "L143"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# startSupervisor()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["startSupervisor[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"calls"| N_services_worker_service_workerservice_start[".start[]"]
    center -->|"contains"| N_vendor_claude_mem_src_supervisor_index_ts["index.ts"]
    center -->|"calls"| N_supervisor_index_supervisor_start[".start[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.start()]] - `calls` [INFERRED]
- [[.start()_3]] - `calls` [EXTRACTED]
- [[index.ts_11]] - `contains` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[startSupervisor()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None