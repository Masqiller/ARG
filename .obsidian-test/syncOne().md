---
source_file: "vendor/claude-mem/src/services/worker/http/routes/DataRoutes.ts"
type: "code"
community: "Community None"
degree: 2
location: "L351"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# syncOne()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["syncOne[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_http_routes_dataroutes_ts["DataRoutes.ts"]
    center -->|"calls"| N_routes_dataroutes_safeparsejson["safeParseJson[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[DataRoutes.ts]] - `contains` [EXTRACTED]
- [[safeParseJson()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[syncOne()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None