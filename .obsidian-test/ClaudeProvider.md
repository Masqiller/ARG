---
source_file: "vendor/claude-mem/src/services/worker/ClaudeProvider.ts"
type: "code"
community: "Community None"
degree: 8
location: "L101"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ClaudeProvider

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["ClaudeProvider"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_claudeprovider_ts["ClaudeProvider.ts"]
    center -->|"method"| N_worker_claudeprovider_claudeprovider_constructor[".constructor[]"]
    center -->|"method"| N_worker_claudeprovider_claudeprovider_resetsessionforfreshstart[".resetSessionForFreshStart[]"]
    center -->|"method"| N_worker_claudeprovider_claudeprovider_startsession[".startSession[]"]
    center -->|"method"| N_worker_claudeprovider_claudeprovider_createmessagegenerator[".createMessageGenerator[]"]
    center -->|"method"| N_worker_claudeprovider_claudeprovider_getmodelid[".getModelId[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_8]] - `method` [EXTRACTED]
- [[.createMessageGenerator()]] - `method` [EXTRACTED]
- [[.getModelId()]] - `method` [EXTRACTED]
- [[.resetSessionForFreshStart()]] - `method` [EXTRACTED]
- [[.startSession()]] - `method` [EXTRACTED]
- [[ClaudeProvider.ts]] - `contains` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ClaudeProvider]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None