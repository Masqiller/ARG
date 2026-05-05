---
source_file: "vendor/claude-mem/src/services/worker/http/BaseRouteHandler.ts"
type: "code"
community: "Community None"
degree: 2
location: "L33"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# badRequest()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["badRequest[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_http_baseroutehandler_ts["BaseRouteHandler.ts"]
    center -->|"calls"| N_http_baseroutehandler_parseintparam["parseIntParam[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[BaseRouteHandler.ts]] - `contains` [EXTRACTED]
- [[parseIntParam()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[badRequest()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None