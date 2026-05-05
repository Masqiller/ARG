---
source_file: "vendor/claude-mem/src/services/worker/session/GeneratorExitHandler.ts"
type: "code"
community: "Community None"
degree: 5
location: "L27"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# handleGeneratorExit()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["handleGeneratorExit[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_session_generatorexithandler_ts["GeneratorExitHandler.ts"]
    center -->|"calls"| N_supervisor_process_registry_getsdkprocessforsession["getSdkProcessForSession[]"]
    center -->|"calls"| N_supervisor_process_registry_ensuresdkprocessexit["ensureSdkProcessExit[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[GeneratorExitHandler.ts]] - `contains` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports` [EXTRACTED]
- [[ensureSdkProcessExit()]] - `calls` [INFERRED]
- [[getSdkProcessForSession()]] - `calls` [INFERRED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[handleGeneratorExit()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None