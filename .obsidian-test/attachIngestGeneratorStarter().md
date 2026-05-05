---
source_file: "vendor/claude-mem/src/services/worker/http/shared.ts"
type: "code"
community: "Community None"
degree: 4
location: "L67"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# attachIngestGeneratorStarter()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["attachIngestGeneratorStarter[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"calls"| N_services_worker_service_workerservice_registerroutes[".registerRoutes[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_http_shared_ts["shared.ts"]
    center -->|"calls"| N_http_shared_requirecontext["requireContext[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.registerRoutes()]] - `calls` [INFERRED]
- [[requireContext()]] - `calls` [EXTRACTED]
- [[shared.ts]] - `contains` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[attachIngestGeneratorStarter()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None